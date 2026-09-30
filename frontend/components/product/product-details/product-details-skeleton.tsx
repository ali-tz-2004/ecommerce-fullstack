import Container from "@/components/ui/container";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProductDetailsSkeleton() {
  return (
    <section className="py-12">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Gallery */}
          <div className="space-y-4">
            <Skeleton className="aspect-square rounded-3xl" />

            <div className="flex gap-3">
              {Array.from({ length: 4 }).map((_, index) => (
                <Skeleton key={index} className="size-20 shrink-0 rounded-xl" />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center space-y-6">
            <Skeleton className="h-6 w-24" />

            <Skeleton className="h-12 w-3/4" />

            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-2/3" />
            </div>

            <Skeleton className="h-10 w-32" />

            <div className="flex gap-6">
              <Skeleton className="h-5 w-20" />
              <Skeleton className="h-5 w-24" />
              <Skeleton className="h-5 w-20" />
            </div>

            <Skeleton className="h-11 w-36" />
          </div>
        </div>
      </Container>
    </section>
  );
}
