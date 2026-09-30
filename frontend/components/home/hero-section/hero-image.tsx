import Image from "next/image";

const products = {
  main: {
    image:
      "https://cdn.dummyjson.com/product-images/laptops/asus-zenbook-pro-dual-screen-laptop/3.webp",
    alt: "ASUS ZenBook Pro",
  },
  secondary: [
    {
      image:
        "https://cdn.dummyjson.com/product-images/smartphones/iphone-13-pro/3.webp",
      alt: "iPhone 13 Pro",
    },
    {
      image:
        "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-watch-series-4-gold/3.webp",
      alt: "Apple Watch",
    },
    {
      image:
        "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods-max-silver/1.webp",
      alt: "AirPods Max",
    },
  ],
};

export default function HeroImage() {
  return (
    <div className="relative min-h-120 hidden md:block">
      <div className="absolute left-1/2 top-1/2 size-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="absolute left-1/2 top-1/2 z-20 w-[75%] max-w-lg -translate-x-1/2 -translate-y-1/2">
        <div className="rounded-3xl border bg-card/80 p-8 shadow-2xl backdrop-blur">
          <Image
            src={products.main.image}
            alt={products.main.alt}
            width={600}
            height={600}
            className="h-auto w-full object-contain transition duration-500 hover:scale-105"
          />
        </div>
      </div>

      <div className="absolute right-0 top-4 z-30 w-32 rotate-6 rounded-2xl border bg-card p-4 shadow-xl">
        <Image
          src={products.secondary[0].image}
          alt={products.secondary[0].alt}
          width={220}
          height={220}
          className="h-auto w-full object-contain"
        />
      </div>

      <div className="absolute bottom-4 left-0 z-30 w-32 -rotate-6 rounded-2xl border bg-card p-4 shadow-xl">
        <Image
          src={products.secondary[1].image}
          alt={products.secondary[1].alt}
          width={220}
          height={220}
          className="h-auto w-full object-contain"
        />
      </div>

      <div className="absolute bottom-0 right-8 z-30 w-36 rotate-3 rounded-2xl border bg-card p-4 shadow-xl">
        <Image
          src={products.secondary[2].image}
          alt={products.secondary[2].alt}
          width={220}
          height={220}
          className="h-auto w-full object-contain"
        />
      </div>

      <div className="absolute right-1/4 top-10 size-3 rounded-full bg-primary/40" />
      <div className="absolute bottom-20 left-1/4 size-2 rounded-full bg-muted-foreground/30" />
    </div>
  );
}
