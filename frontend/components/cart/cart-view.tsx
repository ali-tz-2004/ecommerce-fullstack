"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ShoppingCart } from "lucide-react";

import Container from "@/components/ui/container";
import { useCartStore } from "@/stores/cart/cart-store";
import { calculateDiscountPrice } from "../shared/product-card/product-card.utils";
import ProductCardPrice from "../shared/product-card/product-card-price";
import QuantitySelector from "../shared/quantity-selector";
import RemoveButton from "../shared/remove-button";
import PrimaryActionButton from "../shared/primary-action-button";

export default function CartView() {
  const items = useCartStore((state) => state.items);
  const incrementQuantity = useCartStore((state) => state.incrementQuantity);
  const decrementQuantity = useCartStore((state) => state.decrementQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);

  const cartCount = items.reduce((total, item) => total + item.quantity, 0);

  const subtotal = items.reduce(
    (total, item) =>
      total +
      calculateDiscountPrice(item.price, item.discountPercentage) *
        item.quantity,
    0,
  );

  if (items.length === 0) {
    return (
      <main className="py-20">
        <Container>
          <div className="flex flex-col items-center justify-center text-center">
            <div className="mb-6 flex size-20 items-center justify-center rounded-full bg-muted">
              <ShoppingCart className="size-10 text-muted-foreground" />
            </div>

            <h1 className="text-2xl font-bold">Your cart is empty</h1>

            <p className="mt-2 max-w-md text-muted-foreground">
              {"Looks like you haven't added any products to your cart yet."}
            </p>

            <Link href="/products" className="mt-6">
              <PrimaryActionButton>Continue Shopping</PrimaryActionButton>
            </Link>
          </div>
        </Container>
      </main>
    );
  }

  return (
    <main className="py-10">
      <Container>
        <div className="mb-8">
          <Link
            href="/products"
            className="mb-4 inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Continue Shopping
          </Link>

          <div className="flex items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold">Shopping Cart</h1>
              <p className="mt-1 text-muted-foreground">
                {cartCount} {cartCount === 1 ? "item" : "items"} in your cart
              </p>
            </div>
            <PrimaryActionButton onClick={clearCart}>
              Clear Cart
            </PrimaryActionButton>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex gap-4 rounded-xl border p-4">
                <div className="size-28 shrink-0 overflow-hidden rounded-lg bg-muted">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    width={112}
                    height={112}
                    className="size-full object-cover"
                  />
                </div>

                <div className="flex min-w-0 flex-1 flex-col justify-between gap-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <h2 className="line-clamp-2 font-semibold">
                        {item.title}
                      </h2>

                      <ProductCardPrice
                        price={item.price}
                        discountPercentage={item.discountPercentage}
                      />
                    </div>

                    <RemoveButton
                      onClick={() => removeFromCart(item.id)}
                      label={`Remove ${item.title}`}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <QuantitySelector
                      quantity={item.quantity}
                      onIncrease={() => incrementQuantity(item.id)}
                      onDecrease={() => decrementQuantity(item.id)}
                      max={item.stock}
                    />

                    <p className="font-bold">
                      $
                      {(
                        calculateDiscountPrice(
                          item.price,
                          item.discountPercentage,
                        ) * item.quantity
                      ).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <aside className="h-fit rounded-xl border p-6 lg:sticky lg:top-24">
            <h2 className="text-lg font-semibold">Order Summary</h2>

            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">
                  Items ({cartCount})
                </span>

                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Shipping</span>

                <span>Free</span>
              </div>

              <div className="border-t pt-4">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Total</span>

                  <span className="text-xl font-bold">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
              </div>

              <PrimaryActionButton className="w-full" size="lg">
                Checkout
              </PrimaryActionButton>
            </div>
          </aside>
        </div>
      </Container>
    </main>
  );
}
