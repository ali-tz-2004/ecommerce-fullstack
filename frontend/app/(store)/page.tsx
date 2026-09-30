import ConnectSection from "@/components/home/connect-section";
import FeaturedProductsSection from "@/components/home/featured-products-section";
import HeroSection from "@/components/home/hero-section";
import PopularProductsSection from "@/components/home/popular-products-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProductsSection />
      <PopularProductsSection />
      <ConnectSection />
    </>
  );
}
