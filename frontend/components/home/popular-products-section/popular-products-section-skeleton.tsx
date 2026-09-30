import ProductCardSkeleton from "@/components/shared/product-card/product-card-skeleton";

export default function PopularProductsSectionSkeleton() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {Array.from({ length: 4 }).map((_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </div>
  );
}
