import PrimaryActionButton from "@/components/shared/primary-action-button";
import Container from "@/components/ui/container";

interface ProductDetailsErrorProps {
  onRetry?: () => void;
}

export default function ProductDetailsError({
  onRetry,
}: ProductDetailsErrorProps) {
  return (
    <section className="py-20">
      <Container>
        <div className="flex min-h-100 flex-col items-center justify-center rounded-3xl border bg-card p-8 text-center">
          <h2 className="text-2xl font-bold">Something went wrong</h2>

          <p className="mt-2 max-w-md text-muted-foreground">
            {"We couldn't load this product. Please try again."}
          </p>

          {onRetry && (
            <PrimaryActionButton onClick={onRetry} className="mt-6">
              Try Again
            </PrimaryActionButton>
          )}
        </div>
      </Container>
    </section>
  );
}
