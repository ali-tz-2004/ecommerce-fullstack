import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useFavoriteStore } from "@/stores/favorite/favorite-store";
import { Product } from "@/types/product";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProductCardImageProps {
  data: Product;
}

export default function ProductCardImage({ data }: ProductCardImageProps) {
  const addFavorite = useFavoriteStore((state) => state.addFavorite);
  const removeFavorite = useFavoriteStore((state) => state.removeFavorite);
  const items = useFavoriteStore((state) => state.items);

  const exists = items.some((x) => x.id === data.id);

  const favoriteHandler = () => {
    if (exists) {
      removeFavorite(data.id);
    } else {
      addFavorite(data);
    }
  };

  return (
    <div className="relative aspect-square overflow-hidden bg-muted">
      <Link href={`/products/${data.id}`}>
        <Image
          src={data.thumbnail}
          alt={data.title}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </Link>

      <Button
        variant="secondary"
        size="icon"
        className="absolute right-3 top-3 shadow-sm transition-transform hover:scale-105"
        onClick={favoriteHandler}
        aria-label={exists ? "Remove from favorites" : "Add to favorites"}
      >
        <Heart
          className={cn(
            "size-4 transition-colors",
            exists && "fill-destructive text-destructive",
          )}
        />
      </Button>

      {data.discountPercentage && (
        <span className="absolute left-3 top-3 rounded-md bg-destructive px-2 py-1 text-xs font-semibold text-primary-foreground">
          -{Math.round(data.discountPercentage)}%
        </span>
      )}
    </div>
  );
}
