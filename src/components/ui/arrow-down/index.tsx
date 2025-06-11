import { motion } from "framer-motion";
import Image from "next/image";

import "./arrow-down.css";

export default function ArrowDown() {
  return (
    <motion.div
      animate={{ y: [-2, 8, -2] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="arrow_container"
    >
      <motion.button type="button" className="arrow_button">
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
