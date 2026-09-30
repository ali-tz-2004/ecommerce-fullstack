import { ProductCategory } from "@/types/product-category";
import { apiClient } from "./api/api-client";
import { API_ENDPOINTS } from "./api/endpoints";

export async function getCategories() {
  const response = await apiClient.get<ProductCategory[]>(
    API_ENDPOINTS.CATEGORIES,
  );

  return response.data;
}
