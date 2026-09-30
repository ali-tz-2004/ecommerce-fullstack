"use client";

import ProductCard from "@/components/shared/product-card";
import Container from "@/components/ui/container";
import SectionTitle from "@/components/ui/section-title";
import { useFeaturedProducts } from "@/hooks/queries/use-featured-products";
import FeaturedProductsSectionSkeleton from "./featured-products-section-skeleton";

export default function FeaturedProductsSection() {
  const { data, isLoading } = useFeaturedProducts();

  return (
    <section className="py-12 sm:py-16 md:py-24">
      <Container>
        <SectionTitle
          title="Featured Products"
          description="Our hand-picked products."
        />

        {isLoading ? (
          <FeaturedProductsSectionSkeleton />
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
