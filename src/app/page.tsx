"use client";
import Header from "@/components/blocks/header";
import Hero from "@/components/layouts/hero";
import WinesSection from "@/components/layouts/wines-section";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WinesSection />
      </main>
    </>
  );
}
