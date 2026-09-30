import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

import PrimaryActionButton from "@/components/shared/primary-action-button";

export default function HeroContent() {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-medium text-primary">Your everyday store</p>

      <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
        Find what you need.
        <br />
        <span className="text-muted-foreground">Love what you buy.</span>
      </h1>

      <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
        Shop a wide range of quality products, from everyday essentials to
        things you simply want to have.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <Link href="/products">
          <PrimaryActionButton size="lg">
            Start Shopping
            <ArrowRight className="ml-2 size-4" />
          </PrimaryActionButton>
        </Link>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="flex size-6 items-center justify-center rounded-full bg-muted">
            <Check className="size-3" />
          </span>
          Fast & reliable delivery
        </div>
      </div>

      <div className="mt-10 flex gap-8 border-t pt-6">
        <div>
          <p className="text-2xl font-bold">1000+</p>
          <p className="text-sm text-muted-foreground">Products</p>
        </div>

        <div>
          <p className="text-2xl font-bold">4.8</p>
          <p className="text-sm text-muted-foreground">Average rating</p>
        </div>

        <div>
          <p className="text-2xl font-bold">Fast</p>
          <p className="text-sm text-muted-foreground">Delivery</p>
        </div>
      </div>
    </div>
  );
}
