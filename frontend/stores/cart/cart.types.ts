import { Product } from "@/types/product";

export interface CartItem {
  id: number;
  title: string;
  price: number;
  discountPercentage?: number;
  thumbnail: string;
  quantity: number;
  stock: number;
}

export interface CartState {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  incrementQuantity: (productId: number) => void;
  decrementQuantity: (productId: number) => void;
  clearCart: () => void;
}
