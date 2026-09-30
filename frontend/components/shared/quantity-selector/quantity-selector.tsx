import { Minus, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  max?: number;
}

export default function QuantitySelector({
  quantity,
  onIncrease,
  onDecrease,
  max,
}: QuantitySelectorProps) {
  const isMaxReached = max !== undefined && quantity >= max;

  return (
    <div className="flex items-center overflow-hidden rounded-lg border">
      <Button
        type="button"
        variant="ghost"
        size="icon-sm"
        className="rounded-none"
        onClick={onDecrease}
        aria-label="Decrease quantity"
      >
        <Minus />
      </Button>

      <span className="min-w-8 text-center text-sm">{quantity}</span>

      <Button
        type="button"
        variant="ghost"
        size="icon-sm"
        className="rounded-none"
        onClick={onIncrease}
        disabled={isMaxReached}
        aria-label="Increase quantity"
      >
        <Plus />
      </Button>
    </div>
  );
}
