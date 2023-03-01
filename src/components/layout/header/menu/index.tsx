import React, { useContext } from "react";
import {
  DrawerContext,
  ModalContext,
  ModalTypeContext,
} from "../../../../contexts";
import { ListText, ListItem } from "./menuItems";
import { navItemsVariant } from "../../../../utils/framer-motion/motion";
import { menuData } from "../../../../utils/misc/app.data";

interface MenuItemProps {}

const MenuItems: React.FC<MenuItemProps> = ({}) => {
  const { setIsDrawerOpen } = useContext(DrawerContext);
  const { setIsModalOpen } = useContext(ModalContext);
  const { setModalType } = useContext(ModalTypeContext);
  const openModal = (e: string) => {
    setModalType(() => e);
    setIsModalOpen(true);
    setIsDrawerOpen(false);
  };
  const liAttrs = {
    variants: navItemsVariant,
    whileHover: { scale: 1.1 },
    whileTap: { scale: 0.95 },
  };

  return (
    <>
      {menuData.map((e, i) => (
        <ListItem {...liAttrs} key={i} onClick={() => openModal(e.path)}>
          <ListText>{e.text}</ListText>
        </ListItem>
      ))}
    </>
  );
};

export default MenuItems;
