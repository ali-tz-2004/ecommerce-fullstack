"use client";

import Container from "@/components/ui/container";
import { useProduct } from "@/hooks/queries/use-product";
import ProductGallery from "../product-gallery";
import ProductInfo from "../product-info/product-info";
import ProductDetailsSkeleton from "./product-details-skeleton";
import ProductDetailsError from "./product-details-error";
import ProductDetailsNotFound from "./product-details-not-found";
import { isNotFoundError } from "@/lib/api-error";

interface ProductDetailProps {
  id: string;
}

export default function ProductDetail({ id }: ProductDetailProps) {
  const { data, isLoading, isError, refetch, error } = useProduct({
    id: Number(id),
  });

  if (isLoading) {
    return <ProductDetailsSkeleton />;
  }

  if (isNotFoundError(error)) {
    return <ProductDetailsNotFound />;
  }

  if (isError || !data) {
    return <ProductDetailsError onRetry={refetch} />;
  }

  return (
    <section className="py-12">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2">
          <ProductGallery data={data} />

          <ProductInfo data={data} />
        </div>
      </Container>
    </section>
  );
}
