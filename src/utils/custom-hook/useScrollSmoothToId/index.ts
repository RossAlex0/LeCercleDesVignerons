import React from "react";

export default function useScrollSmoothToId() {
  return React.useCallback((id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
}
