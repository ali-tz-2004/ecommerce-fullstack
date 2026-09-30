"use client";

import Link from "next/link";
import { Heart } from "lucide-react";

import Container from "@/components/ui/container";
import ProductCard from "@/components/shared/product-card";
import { useFavoriteStore } from "@/stores/favorite/favorite-store";
import PrimaryActionButton from "../shared/primary-action-button";

export default function FavoritesView() {
  const items = useFavoriteStore((state) => state.items);

  if (items.length === 0) {
    return (
      <main className="py-20">
        <Container>
          <div className="flex flex-col items-center justify-center text-center">
            <div className="mb-6 flex size-20 items-center justify-center rounded-full bg-muted">
              <Heart className="size-10 text-muted-foreground" />
            </div>

            <h1 className="text-2xl font-bold">Your favorites are empty</h1>

            <p className="mt-2 max-w-md text-muted-foreground">
              Save products you love and find them here later.
            </p>

            <Link href="/products" className="mt-6">
              <PrimaryActionButton>Browse Products</PrimaryActionButton>
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
          <h1 className="text-3xl font-bold">Favorites</h1>

          <p className="mt-1 text-muted-foreground">
            {items.length} {items.length === 1 ? "product" : "products"} you
            saved
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
      </Container>
    </main>
  );
}
