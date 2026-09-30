export function calculateDiscountPrice(
  price: number,
  discountPercentage?: number,
): number {
  if (!discountPercentage) {
    return price;
  }

  return price * (1 - discountPercentage / 100);
}
