import { useContext, useRef } from 'react'
import Draggable from 'react-draggable'
import { DesktopModal, DesktopModalHeader } from './styled'
import DesktopModalCloseBtn from './desktopModalCloseBtn'
import AboutModalContent from './aboutModalContent'
import ModalContext from '../../../context/modalContext'

const AboutModal = (props) => {
    const { modalIndex, setIndexes } = useContext(ModalContext)
    const closeModal = () => props.toggle(`${props.title}`)
    const modalRef = useRef()
    
    return (
        <Draggable
            handle='.modal-header'
            nodeRef={modalRef}
            bounds='body'>
            <DesktopModal 
                id={props.title} 
                ref={modalRef} 
                className='about-modal' 
                onClick={() => setIndexes(modalRef.current.id)} 
                order={modalIndex.about}>
                <DesktopModalHeader className='modal-header'>{props.title}</DesktopModalHeader>
                <DesktopModalCloseBtn close={closeModal} />
                <AboutModalContent/>
            </DesktopModal>
        </Draggable>
    )
}

export default AboutModal