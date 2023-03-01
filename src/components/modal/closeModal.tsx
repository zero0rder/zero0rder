import React, { useContext } from "react";
import { CloseOverlayWrap, CloseOverlay, CloseOverlayText } from "./modal";
import { ModalContext } from "../../contexts";
interface CloseModalProps {}

const CloseModal: React.FC<CloseModalProps> = ({}) => {
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext);
  const handleClose = () => {
    setIsModalOpen(false);
  };
  return (
    <CloseOverlayWrap
      className="close-modal"
      isModalOpen={isModalOpen}
      onClick={handleClose}
    >
      <CloseOverlay />
      <CloseOverlayText>close</CloseOverlayText>
    </CloseOverlayWrap>
  );
};

export default CloseModal;
