import Image from "next/image";
import "./header.css";
import NavHeader from "@/components/ui/nav-header";

export default function Header() {
  return (
    <header className="header_container flex_row_center_center">
      <div className="header_logo_container">
        <Image
          src="/logo/white_logo.svg"
          alt="vignerons"
          fill
          sizes="(max-width: 768px) 100px, 150px"
          placeholder="blur"
          className="header_logo"
          blurDataURL="data:image/jpeg;base64,[...]"
        />
      </div>
      <NavHeader />
    </header>
  );
}
