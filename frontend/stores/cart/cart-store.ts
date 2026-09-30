import { Product } from "@/types/product";
import { create } from "zustand";
import { persist } from "zustand/middleware";

import { CartState } from "./cart.types";
import { removeItem } from "./cart.utils";

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],

      addToCart: (product: Product) => {
        set((state) => {
          const exists = state.items.some((x) => x.id === product.id);

          if (exists) {
            const result = state.items.map((item) =>
              item.id === product.id && item.quantity < item.stock
                ? { ...item, quantity: item.quantity + 1 }
                : item,
            );

            return { items: result };
          }
          const result = [
            ...state.items,
            {
              id: product.id,
              title: product.title,
              price: product.price,
              discountPercentage: product.discountPercentage,
              quantity: 1,
              thumbnail: product.thumbnail,
              stock: product.stock,
            },
          ];

          return { items: result };
        });
      },

      removeFromCart: (productId: number) => {
        set((state) => ({
          items: removeItem(state.items, productId),
        }));
      },

      incrementQuantity: (productId: number) => {
        set((state) => ({
          items: state.items.map((item) =>
            item.id === productId && item.quantity < item.stock
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        }));
      },

      decrementQuantity: (productId: number) => {
        set((state) => {
          const item = state.items.find((item) => item.id === productId);

          if (!item) {
            return { items: state.items };
          }

          if (item.quantity === 1) {
            return {
              items: removeItem(state.items, productId),
            };
          }

          return {
            items: state.items.map((item) =>
              item.id === productId
                ? { ...item, quantity: item.quantity - 1 }
                : item,
            ),
          };
        });
      },

      clearCart: () => {
        set({ items: [] });
      },
    }),
    {
      name: "cart-storage",
    },
  ),
);
