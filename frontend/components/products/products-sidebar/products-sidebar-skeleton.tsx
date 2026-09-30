import { Skeleton } from "@/components/ui/skeleton";

interface ProductsSidebarSkeletonProps {
  count?: number;
}

export default function ProductsSidebarSkeleton({
  count = 8,
}: ProductsSidebarSkeletonProps) {
  return (
    <div className="space-y-5">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="flex items-center gap-3">
          <Skeleton className="h-4 w-4 rounded-sm" />
          <Skeleton
            className="h-4"
            style={{
              width: `${60 + ((index * 17) % 50)}px`,
            }}
          />
        </div>
      ))}
    </div>
  );
}
