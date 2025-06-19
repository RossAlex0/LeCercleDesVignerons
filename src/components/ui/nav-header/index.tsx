"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import "./nav-header.css";
import { scrollToElementById } from "@/utils/scroll-utils";
import { TabProps } from "./type";

export default function NavHeader() {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      className="nav_ul"
      onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
    >
      <Tab setPosition={setPosition} refId="acceuil">
        Acceuil
      </Tab>
      <Tab setPosition={setPosition} refId="wine_section">
        Vins
      </Tab>
      <Tab setPosition={setPosition} refId="wine_section">
        À Propos
      </Tab>
      <Tab setPosition={setPosition} refId="wine_section">
        Contact
      </Tab>

      <Cursor position={position} />
    </ul>
  );
}

const Tab = ({ children, setPosition, refId }: TabProps) => {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      onClick={() => scrollToElementById(refId)}
      className="nav_li"
    >
      {children}
    </li>
  );
};

const Cursor = ({
  position,
}: {
  position: {
    left: number;
    width: number;
    opacity: number;
  };
}) => {
  return <motion.li animate={position} className="nav_motion_li" />;
};
