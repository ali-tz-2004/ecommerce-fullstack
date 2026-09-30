import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/services/product.service";
import { QUERY_KEYS } from "@/lib/query-keys";
import { SortOptionValue } from "@/types/product-sort";

interface UseProductsProps {
  limit: number;
  skip: number;
  search?: string;
  sort?: SortOptionValue;
  categories: string[];
}

export function useProducts({
  limit,
  skip,
  search,
  sort,
  categories,
}: UseProductsProps) {
  return useQuery({
    queryKey: QUERY_KEYS.PRODUCTS_LIST(limit, skip, search, sort, categories),
    queryFn: () => getProducts(limit, skip, search, sort, categories),
  });
}
