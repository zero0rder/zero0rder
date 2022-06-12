// import { useState } from 'react';
import {DesktopContainer, DesktopItem, DesktopModalAboutBody, DesktopRepos} from './styled/index';
import {DesktopModalPopup} from './desktopModal';     

const Desktop = ({toggle, flags}) => {
    return (
        <DesktopContainer>
            <DesktopItem onClick={() => toggle('aboutModalOpen')} name='about' className='about-avatar'>
                <div className='about-inner-wrap'>
                    <img alt='about' src='https://avatars.githubusercontent.com/u/11478868?v=4'/>
                    <span></span>
                </div>
            </DesktopItem>
            <DesktopItem onClick={() => toggle('projectsModalOpen')} className='projects-folder' name='projects'>
                <span className="iconify" data-icon="icon-park:folder-code"></span>
            </DesktopItem>
            {
                flags[0] ? (
                    <DesktopModalPopup title='About' className='about-modal' toggle={toggle}>
                        <DesktopModalAboutBody></DesktopModalAboutBody>
                    </DesktopModalPopup>
                ) : <div className='hidden-block'></div>
            }
            {
                flags[1] ? (
                    <DesktopModalPopup title='Projects' className='projects-modal' toggle={toggle}>
                        <DesktopRepos>
                            <ul>{new Array(10).fill('').map((e, i) => <li key={i}><img alt='project' src='' /><span>project name</span></li>)}</ul>
                        </DesktopRepos>
                    </DesktopModalPopup>
                ) : <div className='hidden-block'></div>
                
            }
        </DesktopContainer>
    )

};

export default Desktop;