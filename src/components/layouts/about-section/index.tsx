import { UserRound } from "lucide-react";
import UserCard from "@/components/blocks/card/user-card";
import SectionHeader from "@/components/blocks/section-header";
import { usersCDV } from "@/utils/data";
import Image from "next/image";
import { coordinatesCDV } from "@/utils/data";

import "./about.css";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="about flex_column" id="about">
      <SectionHeader Icon={UserRound} title="Notre Équipe">
        Rencontrez notre équipe de négociants experts, passionnés par l&apos;art
        de sélectionner les plus beaux vins français pour notre clientèle
        exigeante.
      </SectionHeader>
      <div className="about_user flex_row_center">
        {usersCDV.map((user, index) => (
          <UserCard user={user} index={index} key={user.firstname} />
        ))}
      </div>
      <motion.div
        className="about_store flex_row_between_center"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true, amount: 0.3 }}
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
