import { Star } from "lucide-react";

interface ProductCardRatingProps {
  rating: number;
}

export default function ProductCardRating({ rating }: ProductCardRatingProps) {
  return (
    <div className="flex items-center gap-1 text-sm text-muted-foreground">
      <Star className="size-4 fill-yellow-400 text-yellow-400" />

      <span>{rating}</span>
    </div>
  );
}
