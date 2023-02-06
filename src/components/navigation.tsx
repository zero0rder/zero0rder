import React, { useContext } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import MenuItems from "./menuItems";
import { DrawerContext } from "../contexts";
import { navListVariant } from "../utils/framer-motion/motion";
import { AiOutlineClose } from "react-icons/ai";
import { NavSliderHeader, NavSliderLeftContent } from "./styled/navbar";
import ParallaxText from "./parallax";

interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = ({}) => {
  const { isOpen, setIsOpen } = useContext(DrawerContext);
  return (
    <>
      <NavSliderHeader>
        <NavSliderLeftContent>
          <ParallaxText baseVelocity={5}>Open For Work</ParallaxText>
        </NavSliderLeftContent>
        <AiOutlineClose tw="cursor-pointer" onClick={() => setIsOpen(false)} />
      </NavSliderHeader>
      <motion.ul
        variants={navListVariant}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        className="nav-list"
      >
        <MenuItems />
      </motion.ul>
    </>
  );
};

export default Navigation;
