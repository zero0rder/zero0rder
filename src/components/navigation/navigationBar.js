import React from 'react';
import styled from 'styled-components';
import { HiMail, HiSearch } from 'react-icons/hi'
import { BsBatteryCharging } from 'react-icons/bs';
// import anime from 'animejs/lib/anime.es.js';
import { useDateTimeHook } from '../../hooks/datetimeHook';

const MainHeader = styled.header`
    display: flex;
    justify-content: space-between;
    background-color: #427BD2;
    color: #fff;
`;

const NavList = styled.ul`
    display: flex;
    padding: 0.5rem 1.5rem;
    margin: 0.5rem;
    list-style: none;
`;

const NavListItem = styled.li`
    padding: 0 0.35rem;
    font-size: 0.75rem;
    font-weight: bold;
    cursor: pointer;
    &:hover {
        text-shadow: 0 0 0.25rem #51D8FF;
    }

    > div {
        position: absolute;
        top: 3.2rem;
        height: 75px;
        width: 108px;
        border: 1px solid grey;
        opacity: 0;
        transform: translateX(-7rem);
        background-color: green;
    }
`;

const SvgIcon = styled.span`
    font-size: 1rem;
`;

const mouseEnter = ({target}) => {
    //console.log(target.lastElementChild)
    // anime({
    //     targets: target.lastElementChild,
    //     // translateY: ['-60px', '20px'],
    //     translateX: ['-7rem', '0'],
    //     opacity: [0, 1],
    //     easing: 'easeInQuad',
    //     duration: 600
    // })
}

const mouseOut = ({ target }) => {
    // anime({
    //     targets: target.lastElementChild,
    //     // translateY: ['20px', '-60px'],
    //     translateX: ['0', '-7rem'],
    //     opacity: [1, 0],
    //     easing: 'easeOutQuad',
    //     duration: 300
    // })
}

//  REMEMBER: Hooks handle biz logic, which are imported here
const NavigationBar = () => {
    const datetime = useDateTimeHook();

    return (
        <MainHeader>
            <NavList>
                <NavListItem onMouseEnter={ mouseEnter } onMouseOut={ mouseOut } >
                    File
                    <div>
                       <ul>
                           <li>About</li>
                           <li>Projects</li>
                           <li>Info</li>
                       </ul>
                    </div>
                </NavListItem>
                <NavListItem onMouseEnter={ mouseEnter } onMouseOut={ mouseOut } >
                    Contact
                    <div>
                        <ul>
                            <li>Email</li>
                            <li>LinkedIn</li>
                        </ul>
                    </div>
                </NavListItem>
                <NavListItem>
                    Settings
                </NavListItem>
            </NavList>
            <NavList>
                <NavListItem>
                    <SvgIcon><HiSearch/></SvgIcon>
                </NavListItem>
                <NavListItem>
                    <SvgIcon><HiMail/></SvgIcon>
                </NavListItem>
                <NavListItem>
                    <SvgIcon><BsBatteryCharging/></SvgIcon>
                </NavListItem>
                <NavListItem>{ datetime }</NavListItem>
            </NavList>
        </MainHeader>
    )
}
    
export default NavigationBar;