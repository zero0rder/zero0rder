import { useContext, useRef } from 'react'
import Draggable from 'react-draggable'
import { DesktopProjectCard } from './styled'
import DesktopModalCloseBtn from './desktopModalCloseBtn'
import ModalContext from '../../../context/modalContext'

const ProjectCard = ({ data, closeCard, title }) => {
    const { modalIndex, setIndexes } = useContext(ModalContext)
    const cardRef = useRef()
    
    return (
        <Draggable
            handle='.card-header'
            nodeRef={cardRef}
            bounds='body'>
            <DesktopProjectCard 
                id={title} 
                ref={cardRef} 
                order={modalIndex.card}
                onClick={() => setIndexes(cardRef.current.id)}>
                <header className='card-header'>{data.name}</header>
                <DesktopModalCloseBtn close={closeCard}/>
                <section>
                    <img alt={data.name} src={data.src}/>
                    <span>{data.name}</span>
                    <p>{data.description}</p>
                    <section>
                        <div className='open-app-btn'>
                            <a href={data.homepage ?? ''} target='_blank' rel='noopener noreferrer'><span>Open App</span></a>
                        </div>
                        <div>
                            <a href={data.html_url} target='_blank' rel='noopener noreferrer'><span>More Info</span></a>
                        </div>
                    </section>
                </section>
            </DesktopProjectCard>
        </Draggable>
    )
}

export default ProjectCard