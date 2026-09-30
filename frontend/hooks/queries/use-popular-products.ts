import { QUERY_KEYS } from "@/lib/query-keys";
import { getProducts } from "@/services/product.service";
import { useQuery } from "@tanstack/react-query";

export function usePopularProducts() {
  return useQuery({
    queryKey: QUERY_KEYS.PRODUCTS,
    queryFn: async () => {
      const response = await getProducts();

      return response.products
        .toSorted((a, b) => b.rating - a.rating)
        .slice(0, 8);
    },
  });
}
