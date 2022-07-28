import { useRef } from "react";
import { DesktopModal, DesktopModalHeader } from "./styled";
import Draggable from 'react-draggable';
import DesktopModalCloseBtn from './desktopModalCloseBtn';

export const DesktopModalPopup = (props) => {
    const closeModal = () => props.toggle(`${props.title}`);
    const modalRef = useRef();

    return (
        <Draggable
            handle='.modal-header'
            nodeRef={modalRef}
            bounds='body'>
            <DesktopModal id={props.title} ref={modalRef} className={props.className + ' dsk-modal'} onClick={() => props.setZIndex(modalRef.current, props.title)} order={props.order}>
                <DesktopModalHeader className='modal-header'>{props.title}</DesktopModalHeader>
                <DesktopModalCloseBtn close={closeModal} />
                {props.children}
            </DesktopModal>
        </Draggable>
    )
}