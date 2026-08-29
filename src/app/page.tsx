import Hero from "@/components/sections/Hero";
import FeatureIconRow from "@/components/sections/FeatureIconRow";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import MemberBenefits from "@/components/sections/MemberBenefits";
import Promo from "@/components/sections/Promo";
import Branches from "@/components/sections/Branches";
import Contact from "@/components/sections/Contact";
import PageTransition from "@/components/PageTransition";
import { JsonLd } from "@/lib/seo";

export default function Home() {
  return (
    <main>
      <JsonLd />
      <PageTransition />
      <Hero />
      <FeatureIconRow />
      <About />
      <Services />
      <MemberBenefits />
      <Promo />
      <Branches />
      <Contact />
    </main>
  );
}