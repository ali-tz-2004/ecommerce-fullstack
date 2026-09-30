import { ShoppingCart } from "lucide-react";

export function CartSheetEmpty() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center text-center">
      <ShoppingCart size={40} className="mb-4 text-muted-foreground" />

      <h3 className="font-semibold">Your cart is empty</h3>

      <p className="mt-1 text-sm text-muted-foreground">
        Add some products to get started.
      </p>
    </div>
  );
}
