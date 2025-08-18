import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export function LoadingGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {Array.from({ length: 20 }).map((_, index) => (
        <Card key={index} className="bg-white/90 backdrop-blur-sm border-0">
          <CardContent className="p-6">
            <div className="text-center space-y-4">
              <Skeleton className="h-4 w-12 mx-auto" />
              <Skeleton className="h-32 w-32 mx-auto rounded-full" />
              <Skeleton className="h-6 w-24 mx-auto" />
              <div className="space-y-2">
                <Skeleton className="h-6 w-16 mx-auto" />
                <div className="flex gap-2 justify-center">
                  <Skeleton className="h-5 w-16" />
                  <Skeleton className="h-5 w-16" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
