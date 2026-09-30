import { Product, ProductsResponse } from "@/types/product";
import { apiClient } from "./api/api-client";
import { API_ENDPOINTS } from "./api/endpoints";
import { SortOptionValue } from "@/types/product-sort";

export async function getProducts(
  limit: number = 30,
  skip: number = 0,
  search?: string,
  sort?: SortOptionValue,
  categories: string[] = [],
): Promise<ProductsResponse> {
  if (search) {
    return getSearchProducts({
      search,
      limit,
      skip,
      categories,
      sort,
    });
  }

  if (categories.length > 0) {
    return getCategoryProducts({
      categories,
      limit,
      skip,
      sort,
    });
  }

  return getAllProducts({
    limit,
    skip,
    sort,
  });
}

async function getSearchProducts({
  search,
  limit,
  skip,
  categories,
  sort,
}: {
  search: string;
  limit: number;
  skip: number;
  categories: string[];
  sort?: SortOptionValue;
}): Promise<ProductsResponse> {
  const response = await apiClient.get<ProductsResponse>(
    API_ENDPOINTS.PRODUCTS_SEARCH,
    {
      params: {
        q: search,
        limit: 0,
        skip: 0,
      },
    },
  );

  let products = response.data.products;

  if (categories.length > 0) {
    const categoryProducts = await getProductsFromCategories(categories);

    const categoryProductIds = new Set(
      categoryProducts.map((product) => product.id),
    );

    products = products.filter((product) => categoryProductIds.has(product.id));
  }

  products = sortProducts(products, sort);

  return createPaginatedResponse(products, limit, skip);
}

async function getCategoryProducts({
  categories,
  limit,
  skip,
  sort,
}: {
  categories: string[];
  limit: number;
  skip: number;
  sort?: SortOptionValue;
}): Promise<ProductsResponse> {
  const products = await getProductsFromCategories(categories);

  const sortedProducts = sortProducts(products, sort);

  return createPaginatedResponse(sortedProducts, limit, skip);
}

async function getAllProducts({
  limit,
  skip,
  sort,
}: {
  limit: number;
  skip: number;
  sort?: SortOptionValue;
}): Promise<ProductsResponse> {
  const response = await apiClient.get<ProductsResponse>(
    API_ENDPOINTS.PRODUCTS,
    {
      params: {
        limit: 0,
        skip: 0,
      },
    },
  );

  const products = sortProducts(response.data.products, sort);

  return createPaginatedResponse(products, limit, skip);
}

async function getProductsFromCategories(
  categories: string[],
): Promise<Product[]> {
  const responses = await Promise.all(
    categories.map((category) =>
      apiClient.get<ProductsResponse>(
        `${API_ENDPOINTS.PRODUCTS}/category/${category}`,
        {
          params: {
            limit: 0,
            skip: 0,
          },
        },
      ),
    ),
  );

  return responses.flatMap((response) => response.data.products);
}

function createPaginatedResponse(
  products: Product[],
  limit: number,
  skip: number,
): ProductsResponse {
  return {
    products: products.slice(skip, skip + limit),
    total: products.length,
    skip,
    limit,
  };
}

function sortProducts(products: Product[], sort?: SortOptionValue): Product[] {
  if (!sort || sort === "default") {
    return products;
  }

  return [...products].sort((a, b) => {
    const result = a.title.localeCompare(b.title);

    return sort === "title-asc" ? result : -result;
  });
}

export async function getProductById(id: number) {
  const response = await apiClient.get<Product>(
    `${API_ENDPOINTS.PRODUCT}/${id}`,
  );

  return response.data;
}
