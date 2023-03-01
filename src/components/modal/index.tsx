import React, { useContext } from "react";
import { ModalContainer, ModalOverlay } from "./modal";
import { ModalContext, ModalTypeContext } from "../../contexts";
import OpenSource from "../opensource";
import Contact from "../contact";
import About from "../about";
import CloseModal from "./closeModal";

interface ModalProps {}

const Modal: React.FC<ModalProps> = ({}) => {
  const { isModalOpen } = useContext(ModalContext);
  const { modalType } = useContext(ModalTypeContext);

  return (
    <>
      <ModalOverlay isModalOpen={isModalOpen} />
      <CloseModal />
      <ModalContainer isModalOpen={isModalOpen}>
        {modalType === "os" ? (
          <OpenSource />
        ) : modalType === "contact" ? (
          <Contact />
        ) : modalType === "about" ? (
          <About />
        ) : null}
      </ModalContainer>
    </>
  );
};

export default Modal;
