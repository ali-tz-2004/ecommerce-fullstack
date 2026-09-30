import { useQuery } from "@tanstack/react-query";
import { getCategories } from "@/services/category.service";
import { QUERY_KEYS } from "@/lib/query-keys";

export function useCategories() {
  return useQuery({
    queryKey: QUERY_KEYS.CATEGORIES,
    queryFn: getCategories,
  });
}
