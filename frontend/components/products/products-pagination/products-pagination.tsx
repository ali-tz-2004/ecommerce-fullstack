import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { ProductsPaginationProps } from "./products-pagination.types";
import PrimaryActionButton from "@/components/shared/primary-action-button";

const PAGE_SIZE_OPTIONS = [12, 24, 48];

export default function ProductsPagination({
  currentPage,
  totalPages,
  pageSize,
  totalProducts,
  onPageChange,
  onPageSizeChange,
}: ProductsPaginationProps) {
  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, totalProducts);

  const canGoPrevious = currentPage > 1;
  const canGoNext = currentPage < totalPages;

  return (
    <div className="flex flex-col gap-6 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3">
        <span className="text-sm text-muted-foreground">Products per page</span>

        <Select
          value={String(pageSize)}
          onValueChange={(value) => onPageSizeChange(Number(value))}
        >
          <SelectTrigger className="w-20">
            <SelectValue />
          </SelectTrigger>

          <SelectContent>
            {PAGE_SIZE_OPTIONS.map((size) => (
              <SelectItem key={size} value={String(size)}>
                {size}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <span className="text-sm text-muted-foreground">
        Showing {startItem}-{endItem} of {totalProducts}
      </span>

      <div className="flex items-center gap-3">
        <PrimaryActionButton
          disabled={!canGoPrevious}
          onClick={() => onPageChange(currentPage - 1)}
        >
          Previous
        </PrimaryActionButton>

        <span className="text-sm font-medium whitespace-nowrap">
          Page {currentPage} of {totalPages}
        </span>

        <PrimaryActionButton
          disabled={!canGoNext}
          onClick={() => onPageChange(currentPage + 1)}
        >
          Next
        </PrimaryActionButton>
      </div>
    </div>
  );
}
