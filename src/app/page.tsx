import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Concept } from "@/components/sections/Concept";
import { CoreSystem } from "@/components/sections/CoreSystem";
import { Merits } from "@/components/sections/Merits";
import { BusinessModel } from "@/components/sections/BusinessModel";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-slate-50 selection:bg-[#007AFF] selection:text-white">
      <Header />
      <main>
        <Hero />
        <Concept />
        <CoreSystem />
        <Merits />
        <BusinessModel />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
