import { useRef } from 'react';
import Draggable from 'react-draggable';
import { DesktopProjectCard } from './styled';
import DesktopModalCloseBtn from './desktopModalCloseBtn';

const ProjectCard = ({ data, closeCard, setZIndex, order, title}) => {
    const cardRef = useRef();
    
    return (
        <Draggable
            handle='.card-header'
            nodeRef={cardRef}
            bounds='body'>
            <DesktopProjectCard id={title} ref={cardRef} className='dsk-modal' onClick={() => setZIndex(cardRef.current)} order={order}>
                <header className='card-header'>{data.name}</header>
                <DesktopModalCloseBtn close={closeCard}/>
                <section>
                    <img alt={data.name} src={data.src}/>
                    <span>{data.name}</span>
                    <p>{data.desc}</p>
                    <section>
                        <div className='open-app-btn'>
                            <a href={data.link} target='_blank' rel='noopener noreferrer'><span>Open App</span></a>
                        </div>
                        <div>
                            <a href={data.repo} target='_blank' rel='noopener noreferrer'><span>More Info</span></a>
                        </div>
                    </section>
                </section>
            </DesktopProjectCard>
        </Draggable>
    )

}


export default ProjectCard;