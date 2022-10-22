import { useState } from 'react'
import NavigationBar from './navigation/navigationBar'
import ProjectsModal from './modals/projectsModal'
import AboutModal from './modals/aboutModal'
import { DesktopContainer, DesktopItem } from './styled/index'
import { Dock } from './dock'
import ModalContext from '../../context/modalContext'
import { useModalIndex } from '../../hooks/useModalIndex'

const Desktop = () => {
    const [modalState, setModalState] = useState({ about: false, projects: true })
    const { modalIndex, setIndexes } = useModalIndex()
    const modalToggle = (modalType) => {
        setModalState((prevState) => ({...prevState, [modalType]: !prevState[modalType]}))
        setIndexes(modalType)
    }

    return (
        <ModalContext.Provider value={{ modalIndex, setIndexes }}>
            <DesktopContainer className='dsktp-container'>
                <NavigationBar toggle={modalToggle}/>
                <DesktopItem onClick={() => modalToggle('about')} name='about' className='about-avatar'>
                    <iconify-icon icon="fluent-emoji:identification-card"></iconify-icon>
                    <div>About</div>
                </DesktopItem>
                <DesktopItem onClick={() => modalToggle('projects')} className='projects-folder' name='projects'>
                    <iconify-icon icon="fluent-emoji:open-file-folder"></iconify-icon>
                    <div>Projects</div>
                </DesktopItem>
                { modalState.about && <AboutModal title='about' toggle={modalToggle}/> }
                { modalState.projects && <ProjectsModal title='projects' toggle={modalToggle}/> }
                <Dock />
            </DesktopContainer>
        </ModalContext.Provider>
    )

}

export default Desktop