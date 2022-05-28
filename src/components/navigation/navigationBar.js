import React from 'react';
import { useDateTimeHook } from '../../hooks/useDateTime';
import { MainHeader, NavList, NavListItem, NestedNavList, NestedListItem, SvgIcon } from './styled';
//import anime from 'animejs/lib/anime.es.js';

const mouseEnter = ({target}) => {
    //console.log(target.lastElementChild)
    // anime({
    //     targets: target.lastElementChild,
    //     zIndex: 1,
    //     opacity: 1,
    //     easing: 'easeInQuad',
    //     duration: 250
    // })
}

const mouseOut = (e) => {
    // anime({
    //     targets: target.lastElementChild,
    //     zIndex: -1,
    //     opacity: 0,
    //     easing: 'easeInQuad',
    //     duration: 250
    // })
}

const NavigationBar = () => {
    const datetime = useDateTimeHook();

    return (
        <MainHeader>
            <NavList>
                <NavListItem onMouseEnter={ mouseEnter } onMouseOut={ mouseOut } >
                    <span>File</span>
                    <div>
                       <NestedNavList>
                           <NestedListItem >About</NestedListItem>
                           <NestedListItem >Projects</NestedListItem>
                           <NestedListItem >Info</NestedListItem>
                       </NestedNavList>
                    </div>
                </NavListItem>
                <NavListItem onMouseEnter={ mouseEnter } onMouseOut={ mouseOut }>
                    <span>Contact</span>
                    <div>
                        <NestedNavList>
                            <NestedListItem >Email</NestedListItem>
                            <NestedListItem>LinkedIn</NestedListItem>
                        </NestedNavList>
                    </div>
                </NavListItem>
                <NavListItem>
                    <span>Settings</span>
                </NavListItem>
            </NavList>
            <NavList className='right-nav-list'>
                <NavListItem>
                    <SvgIcon>
                        <span className="iconify" data-icon="icon-park:search"></span>
                    </SvgIcon>
                </NavListItem>
                <NavListItem>
                    <SvgIcon>
                        <span className="iconify" data-icon="icon-park:mail"></span>
                    </SvgIcon>
                </NavListItem>
                <NavListItem>{ datetime }</NavListItem>
            </NavList>
        </MainHeader>
    )
}
    
export default NavigationBar;