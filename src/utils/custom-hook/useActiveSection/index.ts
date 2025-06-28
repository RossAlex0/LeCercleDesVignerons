"use client";
import { useEffect, useState } from "react";

export default function useActiveSection(ids: string[]) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const handleIntersect: IntersectionObserverCallback = (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      }
    };

    const observer = new IntersectionObserver(handleIntersect, {
      rootMargin: "0px 0px -70% 0px",
      threshold: 0.1,
    });

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, [ids]);

  return activeId;
}
