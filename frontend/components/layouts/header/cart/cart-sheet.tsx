"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/stores/cart/cart-store";
import CartSheetItem from "./cart-sheet-item";
import { CartSheetSummary } from "./cart-sheet-summary";
import { CartSheetEmpty } from "./cart-sheet-empty";
import { calculateDiscountPrice } from "@/components/shared/product-card/product-card.utils";
import { useState } from "react";

export default function CartSheet() {
  const [open, setOpen] = useState(false);
  const items = useCartStore((state) => state.items);

  const cartCount = items.reduce((total, item) => total + item.quantity, 0);

  const subtotal = items.reduce(
    (total, item) =>
      total +
      calculateDiscountPrice(item.price, item.discountPercentage) *
        item.quantity,
    0,
  );

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        className="relative rounded-lg p-2 transition hover:bg-muted "
        aria-label={`Shopping cart, ${cartCount} items`}
      >
        <ShoppingCart size={20} />

        {cartCount > 0 && (
          <span className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
            {cartCount}
          </span>
        )}
      </SheetTrigger>

      <SheetContent className="flex w-full flex-col sm:max-w-md">
        <SheetHeader className="border-b pb-5">
          <SheetTitle className="text-xl">Shopping Cart</SheetTitle>

          <SheetDescription>
            {cartCount > 0
              ? `${cartCount} ${cartCount === 1 ? "item" : "items"} in your cart`
              : "Your cart is empty"}
          </SheetDescription>
        </SheetHeader>

        {items.length > 0 ? (
          <>
            <div className="flex-1 space-y-5 overflow-y-auto py-5 px-4">
              {items.map((item) => (
                <CartSheetItem key={item.id} item={item} />
              ))}
            </div>
            <CartSheetSummary
              subtotal={subtotal}
              onViewCart={() => setOpen(false)}
            />
          </>
        ) : (
          <CartSheetEmpty />
        )}
      </SheetContent>
    </Sheet>
  );
}
