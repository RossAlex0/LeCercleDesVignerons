import { motion } from "framer-motion";
import Image from "next/image";

import "./arrow-down.css";
import { scrollToElementById } from "@/utils/scroll-utils";

export default function ArrowDown() {
  return (
    <motion.div
      animate={{ y: [-2, 8, -2] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="flex_row_center_center"
    >
      <motion.button
        type="button"
        className="arrow_button"
        onClick={() => scrollToElementById("wine_section")}
      >
        <Image
          src="/logo/arrow-down.svg"
          alt="arrow down"
          width={70}
          height={60}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,[...]"
        />
      </motion.button>
    </motion.div>
  );
}
