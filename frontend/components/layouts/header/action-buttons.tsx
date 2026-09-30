"use client";

import { Heart, Moon, Sun } from "lucide-react";
import ShoppingCard from "./cart/cart-sheet";
import Link from "next/link";
import { useFavoriteStore } from "@/stores/favorite/favorite-store";
import { useTheme } from "next-themes";

export default function ActionButtons() {
  const favoriteCount = useFavoriteStore((state) => state.items.length);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        className="rounded-lg p-2 transition hover:bg-muted"
        aria-label="Toggle theme"
        onClick={toggleTheme}
      >
        {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
      </button>

      <Link
        href="/favorites"
        className="relative rounded-lg p-2 transition hover:bg-muted"
        aria-label={`Favorites, ${favoriteCount} items`}
      >
        <Heart size={20} />

        {favoriteCount > 0 && (
          <span className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
            {favoriteCount}
          </span>
        )}
      </Link>

      <ShoppingCard />
    </div>
  );
}
