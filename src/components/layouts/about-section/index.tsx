import { Grape } from "lucide-react";
import UserCard from "@/components/blocks/card/user-card";
import { usersCDV } from "@/utils/data";
import { motion } from "framer-motion";
import Image from "next/image";
import { coordinatesCDV } from "@/utils/data";

import "./about.css";

export default function AboutSection() {
  return (
    <section className="about flex_column" id="about">
      <h2 className="about_title flex_row_center_center">
        <Grape size={48} color="#b6935e" />
        Nos Négociants
      </h2>
      <p className="about_title_desc">
        Rencontrez notre équipe de négociants experts, passionnés par l&apos;art
        de sélectionner les plus beaux vins français pour notre clientèle
        exigeante.
      </p>
      <div className="about_user flex_row_center">
        {usersCDV.map((user) => (
          <UserCard user={user} key={user.firstname} />
        ))}
      </div>
      <motion.div
        className="about_store flex_row_between_center"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <div className="about_logo_wrapper flex_column_center_center">
          <Image fill src={"/logo/white_logo.svg"} alt="Cercle Des Vignerons" />
        </div>
        <div className="about_separtor" />
        <p className="about_store_description">{coordinatesCDV.description}</p>
      </motion.div>
    </section>
  );
}
