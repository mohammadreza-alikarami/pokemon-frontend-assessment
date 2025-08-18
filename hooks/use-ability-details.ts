import { getAbilityDetails } from '@/lib/api';
import { Ability } from '@/types/pokemon';
import { useQuery } from './use-query';

export function useAbilityDetails(abilityName: string | null) {
  const { data, isLoading, error } = useQuery<Ability | null>(
    'ability',
    abilityName,
    getAbilityDetails
  );

  return {
    ability: data,
    isLoading,
    error,
  };
}
