import { SortOptionValue } from "@/types/product-sort";

export interface SortOption {
  label: string;
  value: SortOptionValue;
}

export interface ProductsToolbarProps {
  search: string;
  sort: SortOptionValue;
  hasActiveFilters: boolean;
  onSearchChange: (value: string) => void;
  onSortChange: (value: SortOptionValue) => void;
  onClearFilters: () => void;
}
