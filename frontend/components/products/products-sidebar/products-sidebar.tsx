"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ProductCategory } from "@/types/product-category";
import ProductsSidebarSkeleton from "./products-sidebar-skeleton";

interface ProductsSidebarProps {
  data: ProductCategory[];
  isLoading: boolean;
  selectedCategories: string[];
  onCategoriesChange: (categories: string[]) => void;
}

export default function ProductsSidebar({
  data,
  isLoading,
  selectedCategories,
  onCategoriesChange,
}: ProductsSidebarProps) {
  const selectedCheckboxHandler = (
    checked: boolean,
    category: ProductCategory,
  ) => {
    if (checked) {
      onCategoriesChange([...selectedCategories, category.slug]);
    } else {
      onCategoriesChange(
        selectedCategories.filter((slug) => slug !== category.slug),
      );
    }
  };

  return (
    <aside className="rounded-xl border border-border p-6">
      <h2 className="mb-4 text-lg font-semibold">Categories</h2>

      <div className="space-y-4">
        {isLoading ? (
          <ProductsSidebarSkeleton />
        ) : (
          data?.map((category, index) => (
            <div key={index} className="flex items-center gap-3">
              <Checkbox
                id={`category-${index}`}
                checked={selectedCategories.includes(category.slug)}
                onCheckedChange={(checked) =>
                  selectedCheckboxHandler(checked, category)
                }
              />

              <Label htmlFor={`category-${index}`} className="cursor-pointer">
                {category.name}
              </Label>
            </div>
          ))
        )}
      </div>
    </aside>
  );
}
