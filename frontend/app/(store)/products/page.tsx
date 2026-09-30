import ProductsView from "@/components/products/products-view/products-view";
import { Suspense } from "react";

export default function ProductsPage() {
  return (
    <Suspense fallback={null}>
      <ProductsView />
    </Suspense>
  );
}
