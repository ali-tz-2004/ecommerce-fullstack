import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProductCardSkeleton() {
  return (
    <Card className="overflow-hidden">
      <Skeleton className="aspect-square w-full rounded-none" />

      <CardContent className="space-y-3 pt-5">
        <Skeleton className="h-3 w-20" />

        <Skeleton className="h-5 w-4/5" />
        <Skeleton className="h-5 w-3/5" />

        <Skeleton className="h-4 w-28" />

        <div className="flex items-center justify-between">
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-5 w-14" />
        </div>
      </CardContent>

      <CardFooter>
        <Skeleton className="h-9 w-full" />
      </CardFooter>
    </Card>
  );
}
