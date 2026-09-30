import Container from "@/components/ui/container";
import { ProductsHeaderProps } from "./products-header.types";

export default function ProductsHeader({
  title,
  description,
}: ProductsHeaderProps) {
  return (
    <Container>
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">{title}</h1>

        <p className="text-muted-foreground">{description}</p>
      </div>
    </Container>
  );
}
