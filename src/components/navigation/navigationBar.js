import React from 'react';
import styled from 'styled-components';
import { useDateTimeHook } from '../../hooks/useDateTime';
//import anime from 'animejs/lib/anime.es.js';

const MainHeader = styled.header`
    display: flex;
    justify-content: space-between;
    background-color: #3E9E9E;
    border-bottom: 2px solid #000;
    color: #fff;
`;

const NavList = styled.ul`
    display: flex;
    padding: 0.5rem 1.5rem;
    margin: 0.5rem;
    list-style: none;

    &.right-nav-list li:last-child {
        line-height: 1.1rem;
    }
`;

const NavListItem = styled.li`
    padding: 0 0.35rem;
    font-size: 0.75rem;
    font-weight: bold;
    cursor: pointer;

    > span:hover {
        text-shadow: 0 0 0.25rem #51D8FF;
    }

    &:hover {
        > div {
            opacity: 1;
            z-index: 1;
        }
    }

    > div {
        position: absolute;
        top: 3.2rem;
        height: auto;
        width: 9rem;
        background-color: #2DA0ED;
        transition: all 0.3s;
        opacity: -1;
        z-index: -1;
    }
`;

const NestedNavList = styled.ul`
    list-style: none;
    padding: 0;
`;

const NestedListItem = styled.li`
    padding: 0.25rem;
    cursor: pointer;
    
    &:hover {
        background-color: orange;
    }
`;

const SvgIcon = styled.span`
    svg {
        width: 1.2rem;
        height: 1.2rem;

        path {
            fill: #D15A5A;
        }

        &[data-icon="icon-park:mail"] {
            path:nth-child(2){
                stroke: #000;
            }
        }
    }

`;

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
                           <NestedListItem>About</NestedListItem>
                           <NestedListItem>Projects</NestedListItem>
                           <NestedListItem>Info</NestedListItem>
                       </NestedNavList>
                    </div>
                </NavListItem>
                <NavListItem onMouseEnter={ mouseEnter } onMouseOut={ mouseOut } >
                    <span>Contact</span>
                    <div>
                        <NestedNavList>
                            <NestedListItem>Email</NestedListItem>
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