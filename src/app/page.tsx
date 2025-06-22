"use client";

import Header from "@/components/blocks/header";
import AboutSection from "@/components/layouts/about-section";
import FooterContact from "@/components/layouts/footer-contact";
import Hero from "@/components/layouts/hero";
import WineSection from "@/components/layouts/wines-section";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WineSection />
        <AboutSection />
        <FooterContact />
      </main>
    </>
  );
}
