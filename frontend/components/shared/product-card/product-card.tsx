import { Card, CardContent, CardFooter } from "@/components/ui/card";

import ProductCardActions from "./product-card-actions";
import ProductCardImage from "./product-card-image";
import ProductCardPrice from "./product-card-price";
import ProductCardRating from "./product-card-rating";
import { ProductCardProps } from "./product-card.types";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function ProductCard({ data }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden transition-shadow hover:shadow-lg">
      <ProductCardImage data={data} />

      <Link href={`/products/${data.id}`}>
        <CardContent className="space-y-3 pt-5">
          <Badge className="w-fit">{data.category}</Badge>

          <h3 className="line-clamp-2 font-semibold">{data.title}</h3>

          <ProductCardRating rating={data.rating} />

          <div className="flex items-center justify-between">
            <ProductCardPrice
              price={data.price}
              discountPercentage={data.discountPercentage}
            />

            <span className="text-xs text-muted-foreground">
              {data.stock} in stock
            </span>
          </div>
        </CardContent>
      </Link>

      <CardFooter>
        <ProductCardActions product={data} />
      </CardFooter>
    </Card>
  );
}
