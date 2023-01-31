import React, { useState } from "react";
import ParallaxText from "./parallax";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "./navigation";
import { HiMenuAlt1, HiMenuAlt2 } from "react-icons/hi";
import { Overlay } from "./styled";
import {
  Header,
  BurgerWrap,
  // NavTitle,
  ImageWrap,
  Image,
  TabsList,
  TabsListItem,
  ImageContainer,
} from "./styled/navbar";
import { DrawerContext } from "../contexts";
import { sidebarVariant } from "../utils/framer-motion/motion";
import { menuData } from "../utils/misc/app.data";
// import { TypingText } from "../utils/framer-motion/customText";

interface NavbarProps {}
const Navbar: React.FC<NavbarProps> = ({}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      {isOpen ? <Overlay onClick={() => setIsOpen(false)} /> : <></>}
      <Header>
        <BurgerWrap
          style={{ color: `${isOpen ? "#6ee7b7" : ""}` }}
          onClick={() => setIsOpen(isOpen ? false : true)}
        >
          {isOpen ? <HiMenuAlt1 /> : <HiMenuAlt2 />}
        </BurgerWrap>
        <ParallaxText baseVelocity={5}>Open For Work</ParallaxText>
        <TabsList>
          {menuData.map((e, i) => (
            <TabsListItem
              className={`tablist ${
                location.pathname === e.path ? "active-tab" : ""
              }`}
              key={i}
              onClick={() => navigate(e.path)}
            >
              {e.text}
            </TabsListItem>
          ))}
        </TabsList>
        <ImageContainer>
          <ImageWrap>
            <Image src="https://avatars.githubusercontent.com/u/11478868?v=4" />
          </ImageWrap>
        </ImageContainer>
        <motion.div
          variants={sidebarVariant}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          className="nav-background"
          style={{ height: `${window.innerHeight}px` }}
        >
          <DrawerContext.Provider value={{ isOpen, setIsOpen }}>
            <Navigation />
          </DrawerContext.Provider>
        </motion.div>
      </Header>
    </>
  );
};

export default Navbar;

{
  /* <NavTitle>
<TypingText title='zero0rder'/>
</NavTitle> */
}
