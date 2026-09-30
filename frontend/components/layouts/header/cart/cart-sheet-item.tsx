"use client";

import ProductCardPrice from "@/components/shared/product-card/product-card-price";
import QuantitySelector from "@/components/shared/quantity-selector";
import RemoveButton from "@/components/shared/remove-button";
import { useCartStore } from "@/stores/cart/cart-store";
import { CartItem } from "@/stores/cart/cart.types";
import Image from "next/image";

interface CartSheetItemProps {
  item: CartItem;
}
export default function CartSheetItem({ item }: CartSheetItemProps) {
  const incrementQuantity = useCartStore((state) => state.incrementQuantity);

  const decrementQuantity = useCartStore((state) => state.decrementQuantity);

  const removeFromCart = useCartStore((state) => state.removeFromCart);

  return (
    <div key={item.id} className="flex gap-4 border-b pb-5 last:border-0">
      <div className="size-20 shrink-0 overflow-hidden rounded-lg bg-muted">
        <Image
          src={item.thumbnail}
          alt={item.title}
          className="size-full object-cover"
          width={100}
          height={100}
        />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="line-clamp-2 text-sm font-medium">{item.title}</h3>

        <ProductCardPrice
          price={item.price}
          discountPercentage={item.discountPercentage}
        />

        <div className="mt-3 flex items-center justify-between">
          <QuantitySelector
            quantity={item.quantity}
            onIncrease={() => incrementQuantity(item.id)}
            onDecrease={() => decrementQuantity(item.id)}
            max={item.stock}
          />

          <RemoveButton
            onClick={() => removeFromCart(item.id)}
            label={`Remove ${item.title}`}
          />
        </div>
      </div>
    </div>
  );
}
