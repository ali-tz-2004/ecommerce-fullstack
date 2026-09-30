import { useQuery } from "@tanstack/react-query";
import { getProductById } from "@/services/product.service";
import { QUERY_KEYS } from "@/lib/query-keys";

interface UseProductProps {
  id: number;
}

export function useProduct({ id }: UseProductProps) {
  return useQuery({
    queryKey: QUERY_KEYS.PRODUCT(id),
    queryFn: () => getProductById(id),
    enabled: !!id,
  });
}
