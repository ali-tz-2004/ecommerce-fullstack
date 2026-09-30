import { calculateDiscountPrice } from "./product-card.utils";

interface ProductCardPriceProps {
  price: number;
  discountPercentage?: number;
}

export default function ProductCardPrice({
  price,
  discountPercentage,
}: ProductCardPriceProps) {
  const discountedPrice = calculateDiscountPrice(price, discountPercentage);

  return (
    <div className="flex items-center gap-2">
      <p className="text-xl font-bold">${discountedPrice.toFixed(2)}</p>

      {discountPercentage != null && discountPercentage > 0 && (
        <p className="text-sm text-muted-foreground line-through">
          ${price.toFixed(2)}
        </p>
      )}
    </div>
  );
}
