import { useState } from 'react';
import { DesktopContainer, DesktopItem, DesktopRepos } from './styled/index';
import NavigationBar from './navigation/navigationBar';
import ProjectCard from './projectCard';
import { DesktopModalPopup } from './desktopModal'; 
import { Dock } from './dock';
import { repos } from '../../utils/repos/repoData';
import DesktopModalAbout from './desktopModalAbout';

const initialState = {
    card: repos[0],
    modal: { about: false, projects: true },
    zIndex: { about: '1', projects: '2', card: '3' }
}

const Desktop = () => {
    const [cardVisible, setCardVisible] = useState(true);
    const [cardData, setCardData] = useState(initialState.card);
    const [modalState, setModalState] = useState(initialState.modal);
    const [zIndexOrder, setZIndexOrder] = useState(initialState.zIndex);
    const closeProjectCard = () => setCardVisible(() => false);

    const modalToggle = (modalType) => {
        setModalState((prevState) => ({...prevState, [modalType]: !prevState[modalType]}));
        
        setTimeout(() => {
            configZIndex(modalType);
        });
    }

    const configZIndex = (modalType) => {
        let container = document.getElementsByClassName('dsktp-container')[0];
        let modals = Array.from(container.childNodes).filter((e) => e.classList.contains('dsk-modal'));
        zIndex(modals.find(e => e.id === modalType));
    }

    const openProjectCard = (e, id) => {
        e.stopPropagation();
        
        let repo = repos.filter(r => r.id === id)[0];
        setCardData(() => repo);
        
        if (!cardVisible) 
            setCardVisible(() => true);
        
        configZIndex('card');
    }

    const zIndex = (currElem) => {
        const type = currElem?.id;
        const currIndex = currElem?.attributes?.order?.value;

        let indx3, indx2;
        for(const [key, value] of Object.entries(zIndexOrder)){
            if(value === '3')
                indx3 = key;

            if(value === '2')
                indx2 = key;

        }

        if(currIndex === '3') return;

        switch(currIndex){
            case '2':
                setZIndexOrder((prev) => ({...prev, [type]: '3', [indx3]: '2'}));
                break;
            case '1':
                setZIndexOrder({[type]: '3', [indx2]: '1', [indx3]: '2'});
                break;
        }
    }

    return (
        <DesktopContainer className='dsktp-container'>
            <NavigationBar toggle={modalToggle}/>
            <DesktopItem onClick={() => modalToggle('about')} name='about' className='about-avatar'>
                <div className='about-inner-wrap'>
                    <img alt='about' src='https://avatars.githubusercontent.com/u/11478868?v=4'/>
                    <span></span>
                </div>
            </DesktopItem>
            <DesktopItem onClick={() => modalToggle('projects')} className='projects-folder' name='projects'>
                <span className="iconify" data-icon="icon-park:folder-code"></span>
            </DesktopItem>
            <DesktopItem className='clear-desktop' name='trash'>
                <span className="iconify" data-icon="icon-park:delete-themes"></span>
            </DesktopItem>
            {
                modalState.about ? (
                    <DesktopModalPopup title='about' className='about-modal' order={zIndexOrder.about} setZIndex={zIndex} toggle={modalToggle}>
                        <DesktopModalAbout/>
                    </DesktopModalPopup>
                ) : <div className='hidden-block'></div>
            }
            {
                modalState.projects ? (
                    <DesktopModalPopup title='projects' className='projects-modal' setZIndex={zIndex} order={zIndexOrder.projects} toggle={modalToggle}>
                        <DesktopRepos>
                            <ul>{repos.map((e, i) => <li onClick={(evt) => openProjectCard(evt, e.id)} key={i}><div><span className="iconify" data-icon={e.icon}></span></div><span>{e.name}</span></li>)}</ul>
                        </DesktopRepos>
                    </DesktopModalPopup>
                ) : <div className='hidden-block'></div>
            }
            { cardVisible ? <ProjectCard closeCard={closeProjectCard} data={cardData} setZIndex={zIndex} order={zIndexOrder.card} title='card'/> : <div className='hidden-block'></div> }
            <Dock />
        </DesktopContainer>
    )

};

export default Desktop;