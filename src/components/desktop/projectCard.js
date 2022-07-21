import { useRef } from 'react';
import Draggable from 'react-draggable';
import { DesktopProjectCard } from './styled';

const ProjectCard = ({data}) => {
    const cardRef = useRef();

    return (
        <Draggable
            handle='.card-header'
            nodeRef={cardRef}
            bounds='body'>
            <DesktopProjectCard ref={cardRef}>
                <header className='card-header'>{data.name}</header>
                <button><span className="iconify" data-icon="icon-park:close" data-width="256" data-height="256"></span></button>
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