import { Product } from "@/types/product";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { FavoriteState } from "./favorite.types";

export const useFavoriteStore = create<FavoriteState>()(
  persist(
    (set) => ({
      items: [],

      addFavorite: (product: Product) => {
        set((state) => {
          const exists = state.items.some((item) => item.id === product.id);

          if (exists) {
            return { items: state.items };
          }

          return {
            items: [...state.items, product],
          };
        });
      },

      removeFavorite: (productId: number) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== productId),
        }));
      },

      clearFavorite: () => {
        set({ items: [] });
      },
    }),
    {
      name: "favorite-storage",
    },
  ),
);
