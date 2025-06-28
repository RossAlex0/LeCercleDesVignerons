import Image from "next/image";
import "./header.css";
import NavHeader from "@/components/ui/nav-header";
import useWindowSize from "@/utils/custom-hook/useWindowWidth";

export default function Header() {
  const { width } = useWindowSize();
  return (
    <header className="header_container flex_row_center_center">
      <div className="header_logo_container">
        {width && width > 1280 ? (
          <Image
            src="/logo/white_logo.svg"
            alt="vignerons"
            fill
            sizes="(max-width: 768px) 100px, 150px"
            placeholder="blur"
            className="header_logo"
            blurDataURL="data:image/jpeg;base64,[...]"
          />
        ) : undefined}
      </div>
      <NavHeader />
    </header>
  );
}
