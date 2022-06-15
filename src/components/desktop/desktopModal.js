// import { useState } from "react";
import { DesktopModal, DesktopModalHeader, DesktopModalCloseButton } from "./styled";

const setZIndex = (target) => {
    Array.from(target.closest('.dsktp-container').childNodes).map((e, i) => {
        if(e.classList.contains('active-modal'))
            e.classList.remove('active-modal');
        
        return i;
    });

    target.classList.add('active-modal');
};

export const DesktopModalPopup = (props) => {
    const closeModal = () => props.title === 'About' ? props.toggle('aboutModalOpen') : props.toggle('projectsModalOpen');
    
    return (
        <DesktopModal className={props.className} onClick={(e) => setZIndex(e.currentTarget)}>
            <DesktopModalHeader>{props.title}</DesktopModalHeader>
            <DesktopModalCloseButton onClick={() => closeModal()}>
                <span className="iconify" data-icon="icon-park:close" data-width="256" data-height="256"></span>
            </DesktopModalCloseButton>
            {props.children}
        </DesktopModal>
    )
}