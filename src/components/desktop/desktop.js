//import anime from 'animejs';
import { 
    DesktopContainer, 
    DesktopItem, 
    DesktopProjectsPopup, 
    DesktopProjectsPopupHeader, 
    DesktopProjectsPopupCloseButton, 
    DesktopProjectsRepos } from './styled/index';

// import useLocalStorage from '../hooks/useLocalStorage';

const mouseEnter = ({target}) => {
    //console.log(target.lastElementChild)
    // anime({
    //     targets: '.about-inner-wrap > span',
    //     translateX: '-104%',
    //     easing: 'easeInOutQuad',
    //     duration: 350
    // })
}

const mouseOut = ({target}) => {
    //console.log(target.lastElementChild)
    // anime({
    //     targets: '.about-inner-wrap > span',
    //     translateX: 0,
    //     easing: 'easeInOutQuad',
    //     duration: 350
    // })
}

const Desktop = () => {
    // const [value, setvalue] = useLocalStorage('name', '');
    
    return (
        <DesktopContainer>
            {/* <input type='text' value={value} onChange={(e) => setvalue(e.target.value)}/> */} 
            <DesktopItem className='about-avatar'>
                <div className='about-inner-wrap'>
                    <img alt='about' src='https://avatars.githubusercontent.com/u/11478868?v=4' onMouseEnter={ mouseEnter } onMouseOut={ mouseOut }/>
                    <span></span>
                </div>
            </DesktopItem>
            <DesktopItem className='projects-folder'><span className="iconify" data-icon="icon-park:folder-code"></span>
            </DesktopItem>
            <DesktopProjectsPopup>
                <DesktopProjectsPopupHeader>Projects</DesktopProjectsPopupHeader>
                <DesktopProjectsPopupCloseButton>
                    <span className="iconify" data-icon="icon-park:close" data-width="256" data-height="256"></span>
                </DesktopProjectsPopupCloseButton>
                <DesktopProjectsRepos>
                    <ul>{new Array(10).fill('').map((e, i) => <li key={i}><img alt='project' src='https://www.marianopascual.me/img/projects/c-36-days-of-type2.svg' /><span>project name</span></li>)}</ul>
                </DesktopProjectsRepos>
            </DesktopProjectsPopup>

        </DesktopContainer>
    )

};

export default Desktop;