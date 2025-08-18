/**
 * @file Custom data fetching hooks inspired by Apollo Client and React Query (TanStack Query).
 * These hooks provide a simple, consistent way to fetch and cache data with SWR under the hood.
 *
 * Key features:
 * - Automatic caching with cache-first strategy
 * - Configurable revalidation
 * - Support for both eager and lazy loading
 * - Consistent cache key management
 * - TypeScript support
 */

import { useCallback } from 'react';
import useSWR, { mutate } from 'swr';
import useSWRMutation from 'swr/mutation';

/**
 * Helper to ensure consistent cache keys across the application.
 * @example
 * getCacheKey('user', '123') // returns 'user-123'
 */
export const getCacheKey = (prefix: string, key: string) => `${prefix}-${key}`;

/**
 * Configuration options for the query hooks.
 * @property revalidateOnFocus - Whether to revalidate when window gains focus
 * @property revalidateOnReconnect - Whether to revalidate when network reconnects
 * @property dedupingInterval - Time window (in milliseconds) during which identical requests will be deduplicated.
 *                             For example, if multiple components request the same data within this interval,
 *                             only one network request will be made. This helps prevent request waterfalls
 *                             and unnecessary API calls.
 *
 * @example
 * // Without deduping:
 * // Component A and B render almost simultaneously, both fetching user "123"
 * // Result: Two separate API calls for the same data
 *
 * // With dedupingInterval: 2000 (2 seconds)
 * // Component A renders and fetches user "123" at t=0ms
 * // Component B renders and requests user "123" at t=500ms
 * // Result: Only one API call is made, Component B receives the same response as A
 *
 * // However, if Component C requests user "123" at t=3000ms
 * // A new API call will be made since we're outside the deduping window
 */
interface QueryConfig {
  revalidateOnFocus?: boolean;
  revalidateOnReconnect?: boolean;
  dedupingInterval?: number;
}

const defaultConfig: QueryConfig = {
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
  dedupingInterval: 60000, // 1 minute - prevents duplicate requests for the same data within this window
};

/**
 * Hook for immediate data fetching with caching. Similar to Apollo Client's useQuery
 * or React Query's useQuery, this hook will fetch data immediately when rendered and
 * cache the results.
 *
 * @example
 * // Basic usage
 * function useUserDetails(userId: string | null) {
 *   const { data, isLoading, error } = useQuery(
 *     'user',
 *     userId,
 *     (id) => fetchUser(id)
 *   );
 *   return { user: data, isLoading, error };
 * }
 *
 * @example
 * // With custom config and deduping
 * function useProductDetails(productId: string | null) {
 *   const { data, isLoading, error } = useQuery(
 *     'product',
 *     productId,
 *     fetchProduct,
 *     {
 *       // If multiple components load the same product within 30 seconds,
 *       // only one API call will be made
 *       dedupingInterval: 30000,
 *       revalidateOnFocus: true
 *     }
 *   );
 *   return { product: data, isLoading, error };
 * }
 *
 * @example
 * // Real-world deduping scenario
 * function ProductPage({ productId }: { productId: string }) {
 *   // These components render almost simultaneously
 *   return (
 *     <div>
 *       <ProductHeader productId={productId} />
 *       <ProductDetails productId={productId} />
 *       <RelatedProducts productId={productId} />
 *     </div>
 *   );
 * }
 *
 * // Even though three components need the same data,
 * // dedupingInterval ensures only one API call is made
 * function ProductHeader({ productId }: { productId: string }) {
 *   const { data } = useQuery('product', productId, fetchProduct);
 *   return <h1>{data?.name}</h1>;
 * }
 *
 * function ProductDetails({ productId }: { productId: string }) {
 *   const { data } = useQuery('product', productId, fetchProduct);
 *   return <div>{data?.description}</div>;
 * }
 *
 * function RelatedProducts({ productId }: { productId: string }) {
 *   const { data } = useQuery('product', productId, fetchProduct);
 *   return <div>{data?.related.map(...)}</div>;
 * }
 *
 * @template T - The type of data returned by the fetcher
 * @param prefix - Namespace for the cache key (e.g., 'user', 'product')
 * @param key - Unique identifier for the data. If null, no fetch will occur
 * @param fetcher - Function to fetch the data
 * @param config - Optional configuration for the query behavior
 */
export function useQuery<T>(
  prefix: string,
  key: string | null,
  fetcher: (key: string) => Promise<T>,
  config: QueryConfig = defaultConfig
) {
  const { data, error, isLoading } = useSWR(
    key ? getCacheKey(prefix, key) : null,
    async () => {
      if (!key) return null;
      const cacheKey = getCacheKey(prefix, key);

      // Try to get data from cache first
      const cachedData = await mutate<T | undefined>(
        cacheKey,
        async (currentData) => {
          if (currentData !== undefined) {
            return currentData;
          }
          return undefined;
        },
        { revalidate: false }
      );

      // If we have cached data, return it
      if (cachedData !== undefined) {
        return cachedData;
      }

      // No cache hit - fetch from API
      const result = await fetcher(key);

      // Update cache explicitly
      await mutate(cacheKey, result, {
        revalidate: false,
        populateCache: true,
      });

      return result;
    },
    config
  );

  return {
    data,
    isLoading,
    error,
  };
}

/**
 * Hook for manual/lazy data fetching with caching. Similar to Apollo Client's useLazyQuery
 * or React Query's useQuery with enabled: false, this hook provides a trigger function
 * to fetch data on demand.
 *
 * Note: The dedupingInterval from the default config also applies to lazy queries,
 * preventing duplicate API calls if the same data is requested multiple times within
 * the interval window.
 *
 * @example
 * // Basic usage
 * function UserSearch() {
 *   const [searchUser, { data: user, isLoading, error }] = useLazyQuery(fetchUser);
 *
 *   return (
 *     <div>
 *       <button onClick={() => searchUser('user', '123')}>
 *         Load User 123
 *       </button>
 *       {isLoading && <div>Loading...</div>}
 *       {user && <UserProfile user={user} />}
 *     </div>
 *   );
 * }
 *
 * @example
 * // With form submission and deduping
 * function SearchForm() {
 *   const [search, { data: results, isLoading }] = useLazyQuery(searchProducts);
 *
 *   const handleSubmit = (e: React.FormEvent) => {
 *     e.preventDefault();
 *     const term = e.target.search.value;
 *     // If the same search term is submitted multiple times within
 *     // the dedupingInterval, only one API call will be made
 *     search('products', term);
 *   };
 *
 *   return (
 *     <form onSubmit={handleSubmit}>
 *       <input name="search" />
 *       <button type="submit">Search</button>
 *       {isLoading ? <Spinner /> : <Results data={results} />}
 *     </form>
 *   );
 * }
 *
 * @template T - The type of data returned by the fetcher
 * @param fetcher - Function to fetch the data
 * @returns A tuple containing [trigger function, query state]
 */
export function useLazyQuery<T>(fetcher: (key: string) => Promise<T>) {
  const { trigger, data, error, isMutating, reset } = useSWRMutation<
    T,
    Error,
    string,
    { prefix: string; key: string }
  >(
    'lazy-query', // Use a unique key instead of null
    async (_key: string, { arg }: { arg: { prefix: string; key: string } }) => {
      const cacheKey = getCacheKey(arg.prefix, arg.key);

      // Try to get data from cache first
      const cachedData = await mutate<T | undefined>(
        cacheKey,
        async (currentData) => {
          if (currentData !== undefined) {
            return currentData;
          }
          return undefined;
        },
        { revalidate: false }
      );

      // If we have cached data, return it
      if (cachedData !== undefined) {
        return cachedData;
      }

      // No cache hit - fetch from API
      const result = await fetcher(arg.key);

      // Update cache explicitly with a longer revalidation time
      await mutate(cacheKey, result, {
        revalidate: false,
        populateCache: true,
      });

      return result;
    }
  );

  const memoizedTrigger = useCallback(
    (prefix: string, key: string) => {
      // Reset error state before triggering new request
      reset();
      return trigger({ prefix, key });
    },
    [trigger, reset]
  );

  return [memoizedTrigger, { data, isLoading: isMutating, error }] as const;
}
