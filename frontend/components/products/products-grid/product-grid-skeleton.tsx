import ProductCardSkeleton from "@/components/shared/product-card/product-card-skeleton";

interface ProductsGridSkeletonProps {
  count?: number;
}

export default function ProductsGridSkeleton({
  count = 12,
}: ProductsGridSkeletonProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: count }).map((_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </div>
  );
}
