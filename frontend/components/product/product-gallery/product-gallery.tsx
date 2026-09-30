import { Product } from "@/types/product";
import Image from "next/image";
import { useState } from "react";

interface ProductGalleryProps {
  data: Product;
}

export default function ProductGallery({ data }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(
    data.images[0] ?? data.thumbnail,
  );

  return (
    <div className="space-y-4">
      <div className="relative aspect-square overflow-hidden rounded-3xl border bg-card">
        <Image
          src={selectedImage}
          alt={data.title}
          fill
          priority
          className="object-contain p-10 transition duration-300"
        />
      </div>

      {data.images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2">
          {data.images.map((image, index) => {
            const isSelected = image === selectedImage;

            return (
              <button
                key={index}
                type="button"
                onClick={() => setSelectedImage(image)}
                className={`relative size-20 shrink-0 overflow-hidden rounded-xl border-2 bg-muted transition-all ${
                  isSelected
                    ? "border-primary ring-2 ring-primary/20"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <Image
                  src={image}
                  alt={`${data.title} ${index + 1}`}
                  fill
                  className="object-contain p-2 transition-transform duration-200 hover:scale-105"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
