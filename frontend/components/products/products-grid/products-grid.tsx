"use client";

import { ProductsGridProps } from "./products-grid.types";
import ProductCard from "@/components/shared/product-card";

export default function ProductsGrid({ data }: ProductsGridProps) {
  if (!data?.products?.length) {
    return (
      <div className="flex min-h-75 flex-col items-center justify-center rounded-xl border border-dashed border-border px-6 text-center">
        <h3 className="text-lg font-semibold">No products found</h3>

        <p className="mt-2 max-w-md text-sm text-muted-foreground">
          {
            "We couldn't find any products matching your search or filters. Try changing your search or selecting different categories."
          }
        </p>
      </div>
    );
  }
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {data?.products.map((product) => (
        <ProductCard key={product.id} data={product} />
      ))}
    </div>
  );
}
