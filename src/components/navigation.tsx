import React, { useContext } from "react";
import { motion } from "framer-motion";
import MenuItems from "./menuItems";
import { DrawerContext } from "../contexts";
import { navListVariant } from "../utils/framer-motion/motion";

interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = ({}) => {
  const { isOpen } = useContext(DrawerContext);
  return (
    <motion.ul
      variants={navListVariant}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      className="nav-list"
    >
      <MenuItems />
    </motion.ul>
  );
};

export default Navigation;
