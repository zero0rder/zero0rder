import { forwardRef } from 'react';
import Draggable from 'react-draggable';
import { DesktopProjectCard } from './styled';
import cryptoImg from '../../assets/images/crypto-sm.jpg';

const ProjectCard = forwardRef((props, ref) => {
    
    return (
        <Draggable
            handle='.card-header'
            nodeRef={ref}
            bounds='body'>
            <DesktopProjectCard ref={ref}>
                <header className='card-header'>Crypto Desktop</header>
                <button><span className="iconify" data-icon="icon-park:close" data-width="256" data-height="256"></span></button>
                <section>
                    <img src={cryptoImg}/>
                    <span>Crypto Desktop</span>
                    <p>Cryptocurrency Exchange App</p>
                    <section>
                        <div className='open-app-btn'>
                            <a><span>Open App</span></a>
                        </div>
                        <div><a><span>More Info</span></a></div>
                    </section>
                </section>
            </DesktopProjectCard>
        </Draggable>
    )

})


export default ProjectCard;