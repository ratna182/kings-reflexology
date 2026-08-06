import Hero from "@/components/sections/Hero";
import MemberBenefits from "@/components/sections/MemberBenefits";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Branches from "@/components/sections/Branches";
import Contact from "@/components/sections/Contact";
import History from "@/components/sections/History";
import Stats from "@/components/sections/Stats";
import PageTransition from "@/components/PageTransition";
import { JsonLd } from "@/lib/seo";

export default function Home() {
  return (
    <main>
      <JsonLd />
      <PageTransition />
      <Hero />
      <MemberBenefits />
      <About />
      <Services />
      <Branches />
      <Contact />
      <History />
      <Stats />
    </main>
  );
}
