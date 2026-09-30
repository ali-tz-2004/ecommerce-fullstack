import Container from "@/components/ui/container";

import HeroContent from "./hero-content";
import HeroImage from "./hero-image";

export default function HeroSection() {
  return (
    <section className="overflow-hidden py-12 sm:py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-[1fr_1.2fr]">
          <HeroContent />

          <HeroImage />
        </div>
      </Container>
    </section>
  );
}
