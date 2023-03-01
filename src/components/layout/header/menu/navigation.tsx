import React, { useContext } from "react";
import MenuItems from ".";
import { DrawerContext } from "../../../../contexts";
import { navListVariant } from "../../../../utils/framer-motion/motion";
import { NavList } from "../navbar/navbar";

interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = ({}) => {
  const { isDrawerOpen } = useContext(DrawerContext);
  return (
    <>
      <NavList
        variants={navListVariant}
        initial="closed"
        animate={isDrawerOpen ? "open" : "closed"}
      >
        <MenuItems />
      </NavList>
    </>
  );
};

export default Navigation;
