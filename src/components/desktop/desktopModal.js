// import { useState } from "react";
import {DesktopModal, DesktopModalHeader, DesktopModalCloseButton} from "./styled";

export const DesktopModalPopup = (props) => {
    const closeModal = () => props.title === 'About' ? props.toggle('aboutModalOpen') : props.toggle('projectsModalOpen');
    
    return (
        <DesktopModal className={props.className}>
            <DesktopModalHeader>{props.title}</DesktopModalHeader>
            <DesktopModalCloseButton onClick={() => closeModal()}>
                <span className="iconify" data-icon="icon-park:close" data-width="256" data-height="256"></span>
            </DesktopModalCloseButton>
            {props.children}
        </DesktopModal>
    )
}