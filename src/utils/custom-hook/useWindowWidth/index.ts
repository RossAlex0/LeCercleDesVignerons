"use client";

import React from "react";
import type { WindowSize } from "./type";

export default function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = React.useState<WindowSize | undefined>(
    undefined
  );

  React.useEffect(() => {
    const updateSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return { width: windowSize?.width, height: windowSize?.height };
}
