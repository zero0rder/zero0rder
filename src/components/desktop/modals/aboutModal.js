import { useEffect, useState, useContext, useRef } from "react"
import Draggable from 'react-draggable'
import { DesktopModal, DesktopModalHeader } from '../styled'
import DesktopModalCloseBtn from './desktopModalCloseBtn'
import AboutModalContent from './aboutModalContent'
import ModalContext from '../../../context/modalContext'
import { fetchInfo } from '../../../utils/http/api'

const AboutModal = (props) => {
    const { modalIndex, setIndexes } = useContext(ModalContext)
    const [info, setInfo] = useState(null)
    const closeModal = () => props.toggle(`${props.title}`)
    const modalRef = useRef()

    useEffect(() => {
        const controller = new AbortController()
        const getInfo = fetchInfo(process.env.REACT_APP_URI, controller.signal)
        const unPkg = (async () => {
            const res = await getInfo
            setInfo(() => res)
        })

        unPkg()
        return () => controller?.abort()
        
    }, [])

    if(!info) return 'Loading...'

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