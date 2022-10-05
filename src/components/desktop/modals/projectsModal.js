import { useState, useRef, useContext, useEffect } from "react"
import Draggable from 'react-draggable'
import { DesktopModal, DesktopModalHeader, DesktopRepos } from '../styled'
import DesktopModalCloseBtn from './desktopModalCloseBtn'
import ProjectCard from './projectCard'
import ModalContext from '../../../context/modalContext'
import { fetchRepos } from '../../../utils/http/api'
import { _repos } from '../../../utils/repos/repoData'

const ProjectsModal = (props) => {
    const [repos, setRepos] = useState(null)
    const [cardVisible, setCardVisible] = useState(true)
    const [cardData, setCardData] = useState(_repos[0])
    const { modalIndex, setIndexes } = useContext(ModalContext)
    const modalRef = useRef()
    const closeModal = () => props.toggle(`${props.title}`)
    const closeProjectCard = () => setCardVisible(() => false)
    const openProjectCard = (e, id) => {
        e.stopPropagation()
        
        const repo = repos.filter(r => r.id === id)[0]
        setCardData(() => repo)
        
        if (!cardVisible) setCardVisible(() => true)
        setIndexes('card')
    }

    useEffect(() => {
        const controller = new AbortController()
        const getRepos = fetchRepos(`${process.env.REACT_APP_URI}/repos?sort=updated&per_page=10&page=1`, controller.signal)
        const unPkg = (async () => {
            const res = await getRepos
            setRepos(() => res)
        })

        unPkg()
        return () => controller?.abort()

    }, [])

    if(!repos) return 'Loading...'

    return (
        <>
            <Draggable
                handle='.modal-header'
                nodeRef={modalRef}
                bounds='body'>
                <DesktopModal 
                    id={props.title} 
                    ref={modalRef} 
                    className='projects-modal'
                    onClick={() => setIndexes(modalRef.current.id)} 
                    order={modalIndex.projects}>
                    <DesktopModalHeader className='modal-header'>{props.title}</DesktopModalHeader>
                    <DesktopModalCloseBtn close={closeModal} />
                    <DesktopRepos>
                        <ul>
                            { repos.map((e, i) => (
                                <li onClick={(evt) => openProjectCard(evt, e.id)} key={i}>
                                    <div>
                                        <span className="iconify" data-icon='icon-park:bitcoin'></span>
                                    </div>
                                    <span>{e.name}</span>
                                </li> 
                            ))}
                        </ul>
                    </DesktopRepos>
                </DesktopModal>
            </Draggable>
            { cardVisible && <ProjectCard closeCard={closeProjectCard} data={cardData} title='card'/> }
        </>
    )
}

export default ProjectsModal