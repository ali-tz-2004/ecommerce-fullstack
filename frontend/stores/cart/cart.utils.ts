import { CartItem } from "./cart.types";

export const removeItem = (items: CartItem[], productId: number) => {
  return items.filter((item) => item.id !== productId);
};
