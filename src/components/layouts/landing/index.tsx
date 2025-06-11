"use client";

import Image from "next/image";
import Button from "@/components/ui/button";
import ArrowDown from "@/components/ui/arrow-down";

import "./landing.css";
import ModalContact from "../contact-modal";
import { useState } from "react";

export default function Landing() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="home">
      <div className="home_container">
        <Image
          src="/logo/simple_white_logo.svg"
          alt="winebottle"
          width={260}
          height={190}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,[...]"
        />
        <h1 className="home_title">
          Savourez l&apos;authenticité <br />
          et la richesse des grands vins.
        </h1>
        <div className="home_button">
          <Button onClick={() => setIsOpen(true)}>Grille Tarrifaire</Button>
          <Button
            style={{
              backgroundColor: "transparent",
              backdropFilter: "blur(6px)",
              border: "1px solid #f5f5f5",
            }}
          >
            Nous contacter
          </Button>
        </div>
        <ArrowDown />
      </div>
      <ModalContact isOpen={isOpen} setIsOpen={setIsOpen} />
    </section>
  );
}
