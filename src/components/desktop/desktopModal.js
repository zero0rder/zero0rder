import { useRef } from "react";
import { DesktopModal, DesktopModalHeader, DesktopModalCloseButton } from "./styled";
import Draggable from 'react-draggable';

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
    const modalRef = useRef();

    return (
        <Draggable
            handle='.modal-header'
            nodeRef={modalRef}
            bounds='body'>
            <DesktopModal ref={modalRef} className={props.className} onClick={(e) => setZIndex(e.currentTarget)}>
                <DesktopModalHeader className='modal-header'>{props.title}</DesktopModalHeader>
                <DesktopModalCloseButton onClick={() => closeModal()}>
                    <span className="iconify" data-icon="icon-park:close" data-width="256" data-height="256"></span>
                </DesktopModalCloseButton>
                {props.children}
            </DesktopModal>
        </Draggable>
    )
}