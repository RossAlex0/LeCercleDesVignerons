import { motion } from "framer-motion";
import { Mail, Smartphone } from "lucide-react";

import "./user-card.css";
import type { UsersCDV } from "@/utils/data";
import Image from "next/image";

export default function UserCard({ user }: { user: UsersCDV }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
      className="user_card_container flex_column_between"
    >
      <div className="user_card_header flex_row_between_center">
        <div className="user_image_wrapper">
          <Image
            className="user_avatar"
            fill
            src={user.avatar}
            alt={`${user.lastname}-${user.firstname}`}
          />
        </div>
        <div className="user_header_name flex_column">
          <p>
            {user.lastname} {user.firstname}
          </p>
          <p>{user.role}</p>
        </div>
      </div>
      <p className="user_description">{user.description}</p>
      <div className="user_contact flex_column">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="user_contact_wrapper flex_row"
        >
          <Mail className="user_icon" />
          <a href={`mailto:${user.mail}`}>{user.mail}</a>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="user_contact_wrapper flex_row"
        >
          <Smartphone className="user_icon" />
          <a href={`tel:${user.phone}`}>{user.phone}</a>
        </motion.div>
      </div>
    </motion.div>
  );
}
