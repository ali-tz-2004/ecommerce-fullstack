import ProductDetail from "@/components/product/product-details";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;

  return <ProductDetail id={id} />;
}
