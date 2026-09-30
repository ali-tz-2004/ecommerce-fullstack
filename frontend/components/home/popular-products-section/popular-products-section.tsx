"use client";

import ProductCard from "@/components/shared/product-card";
import Container from "@/components/ui/container";
import SectionTitle from "@/components/ui/section-title/section-title";
import { usePopularProducts } from "@/hooks/queries/use-popular-products";
import PopularProductsSectionSkeleton from "./popular-products-section-skeleton";

export default function PopularProductsSection() {
  const { data, isLoading } = usePopularProducts();

  return (
    <section className="py-12 sm:py-16 md:py-24">
      <Container>
        <SectionTitle
          title="Popular Products"
          description="Most loved by our customers."
        />
        {isLoading ? (
          <PopularProductsSectionSkeleton />
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {data?.map((product) => (
              <ProductCard key={product.id} data={product} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
