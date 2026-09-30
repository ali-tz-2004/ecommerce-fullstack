import Link from "next/link";

import Container from "@/components/ui/container";
import PrimaryActionButton from "@/components/shared/primary-action-button";

export default function ProductDetailsNotFound() {
  return (
    <section className="py-20">
      <Container>
        <div className="flex min-h-100 flex-col items-center justify-center rounded-3xl border bg-card p-8 text-center">
          <h2 className="text-2xl font-bold">Product Not Found</h2>

          <p className="mt-2 max-w-md text-muted-foreground">
            {
              "The product you're looking for doesn't exist or may have been removed."
            }
          </p>

          <PrimaryActionButton className="mt-6">
            <Link href="/products">Back to Products</Link>
          </PrimaryActionButton>
        </div>
      </Container>
    </section>
  );
}
