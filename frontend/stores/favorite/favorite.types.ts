import { Product } from "@/types/product";

export interface FavoriteState {
  items: Product[];
  addFavorite: (product: Product) => void;
  removeFavorite: (productId: number) => void;
  clearFavorite: () => void;
}
