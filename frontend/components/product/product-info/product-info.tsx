import ProductCardActions from "@/components/shared/product-card/product-card-actions";
import ProductCardPrice from "@/components/shared/product-card/product-card-price";
import ProductCardRating from "@/components/shared/product-card/product-card-rating";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/types/product";

interface ProductInfoProps {
  data: Product;
}

export default function ProductInfo({ data }: ProductInfoProps) {
  return (
    <div className="flex flex-col justify-center space-y-6">
      <Badge className="w-fit">{data.category}</Badge>

      <h1 className="text-4xl font-bold">{data.title}</h1>

      <p className="text-muted-foreground">{data.description}</p>

      <div className="flex items-center gap-3">
        <ProductCardPrice
          price={data.price}
          discountPercentage={data.discountPercentage}
        />

        {data.discountPercentage > 0 && (
          <Badge variant="destructive">
            -{Math.round(data.discountPercentage)}%
          </Badge>
        )}
      </div>

      <div className="flex items-center gap-6 text-sm text-muted-foreground">
        <ProductCardRating rating={data.rating} />
        <span>Stock: {data.stock}</span>
        <span>Brand: {data.brand}</span>
      </div>

      <ProductCardActions size="lg" product={data} className="w-fit" />
    </div>
  );
}
