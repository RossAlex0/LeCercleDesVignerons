"use client";

import Header from "@/components/blocks/header";
import AboutSection from "@/components/layouts/about-section";
import FooterContact from "@/components/layouts/footer-contact";
import Hero from "@/components/layouts/hero";
import WineSection from "@/components/layouts/wines-section";
import Loading from "./loading";
import useWindowSize from "@/utils/custom-hook/useWindowWidth";

export default function Home() {
  const { width } = useWindowSize();

  return (
    <>
      {width ? (
        <>
          <Header />
          <main>
            <Hero />
            <WineSection />
            <AboutSection />
            <FooterContact />
          </main>
        </>
      ) : (
        <>
          <Loading />
        </>
      )}
    </>
  );
}
