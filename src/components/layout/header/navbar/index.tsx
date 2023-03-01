import React, { useState, useContext } from "react";
import Navigation from "../menu/navigation";
import { HiMenuAlt2 } from "react-icons/hi";
import {
  Header,
  BurgerWrap,
  TabsList,
  TabsListItem,
  LeftNavBarContent,
  NavBackground,
} from "./navbar";
import {
  ModalContext,
  ModalTypeContext,
  DrawerContext,
} from "../../../../contexts";
import { sidebarVariant } from "../../../../utils/framer-motion/motion";
import { menuData } from "../../../../utils/misc/app.data";

interface NavbarProps {}
const Navbar: React.FC<NavbarProps> = ({}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext);
  const { modalType, setModalType } = useContext(ModalTypeContext);
  const openModal = (e: string) => {
    setModalType(() => e);
    setIsModalOpen(true);
  };

  return (
    <>
      <Header>
        <BurgerWrap
          style={{ color: `${isDrawerOpen ? "#6ee7b7" : ""}` }}
          onClick={() => setIsDrawerOpen(isDrawerOpen ? false : true)}
        >
          <HiMenuAlt2 />
        </BurgerWrap>
        <LeftNavBarContent></LeftNavBarContent>
        <TabsList>
          {menuData.map((e, i) => (
            <TabsListItem
              className={`tablist ${
                modalType === e.path && isModalOpen ? "active-tab" : ""
              }`}
              key={i}
              onClick={() => openModal(e.path)}
            >
              {e.text}
            </TabsListItem>
          ))}
        </TabsList>
        <NavBackground
          variants={sidebarVariant}
          initial="closed"
          animate={isDrawerOpen ? "open" : "closed"}
        >
          <DrawerContext.Provider value={{ isDrawerOpen, setIsDrawerOpen }}>
            <Navigation />
          </DrawerContext.Provider>
        </NavBackground>
      </Header>
    </>
  );
};

export default Navbar;
