"use client";
import Button from "@/components/ui/button";
import { useRouter } from "next/navigation";

import "@/styles/not-found.css";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex_column_center_center not_found">
      <div className="flex_column_between_center not_found_block">
        <h1>404</h1>
        <p>Oups… Cette page n’existe pas ou a été déplacée.</p>
        <Button onClick={() => router.push("/")}>Retour à l’accueil</Button>
      </div>
    </div>
  );
}
