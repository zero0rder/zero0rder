import React from 'react';
import styled from 'styled-components';
import { HiMail, HiSearch } from 'react-icons/hi'
import { BsBatteryCharging } from 'react-icons/bs';
import { dateTime } from '../../utils/datetime';

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
`;

//  REMEMBER: Hooks handle biz logic, which are imported here
const NavigationBar = () => {
    
    return (
        <MainHeader>
            <NavList>
                <NavListItem>File</NavListItem>
                <NavListItem>Settings</NavListItem>
                <NavListItem>Contact</NavListItem>
            </NavList>
            <NavList>
                <NavListItem>
                    <HiSearch style={{fontSize: '1rem'}}/>
                </NavListItem>
                <NavListItem>
                    <HiMail style={{fontSize: '1rem'}}/>
                </NavListItem>
                <NavListItem>
                    <BsBatteryCharging style={{fontSize: '1rem'}}/>
                </NavListItem>
                <NavListItem>{ dateTime }</NavListItem>
            </NavList>
        </MainHeader>
    )
}
    
export default NavigationBar;