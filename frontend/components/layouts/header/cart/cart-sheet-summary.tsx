import Link from "next/link";
import PrimaryActionButton from "@/components/shared/primary-action-button";

interface CartSheetSummaryProps {
  subtotal: number;
  onViewCart: () => void;
}
export function CartSheetSummary({
  subtotal,
  onViewCart,
}: CartSheetSummaryProps) {
  return (
    <div className="space-y-4 border-t py-5 px-4">
      <div className="flex items-center justify-between">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>

      <Link href="/cart" onClick={onViewCart}>
        <PrimaryActionButton className="w-full">View Cart</PrimaryActionButton>
      </Link>
    </div>
  );
}
