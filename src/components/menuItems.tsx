import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { DrawerContext } from "../contexts";
import { ListText } from "./styled/menuItems";
import { navItemsVariant } from "../utils/framer-motion/motion";
import { menuData } from "../utils/misc/app.data";

interface MenuItemProps {}

const MenuItems: React.FC<MenuItemProps> = ({}) => {
  const { setIsOpen } = useContext(DrawerContext);
  const closeDrawer = () => setIsOpen(false);

  const liAttrs = {
    variants: navItemsVariant,
    whileHover: { scale: 1.1 },
    whileTap: { scale: 0.95 },
  };

  return (
    <>
      {menuData.map((e, i) => (
        <motion.li {...liAttrs} key={i} onClick={() => closeDrawer()}>
          <Link to={e.path}>
            <ListText>{e.text}</ListText>
          </Link>
        </motion.li>
      ))}
    </>
  );
};

export default MenuItems;
