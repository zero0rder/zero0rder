import React, { useState } from 'react';
import { useDateTimeHook } from '../../hooks/useDateTime';
import { MainHeader, NavList, NavListItem, NestedNavList, NestedListItem, SvgIcon } from './styled';
import EmailModal from './emailModal';

const NavigationBar = ({toggle}) => {
    const datetime = useDateTimeHook();
    const [searchShow, setSearchShow] = useState(false);
    const [emailShow, setEmailShow] = useState(false);

    return (
        <>
            <MainHeader>
                <NavList>
                    <NavListItem>
                        <span>File</span>
                        <div>
                            <NestedNavList>
                                <NestedListItem onClick={() => toggle('aboutModalOpen')}>About</NestedListItem>
                                <NestedListItem onClick={() => toggle('projectsModalOpen')}>Projects</NestedListItem>
                            </NestedNavList>
                        </div>
                    </NavListItem>
                    <NavListItem>
                        <span>Contact</span>
                        <div>
                            <NestedNavList>
                                <NestedListItem onClick={() => setEmailShow(s => !s)}>Email</NestedListItem>
                                <NestedListItem>LinkedIn</NestedListItem>
                                <NestedListItem>Github</NestedListItem>
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
                            <span onClick={() => setSearchShow(!searchShow)}>
                                <span className="iconify" data-icon="icon-park:search"></span>
                            </span>
                            <div className='extended-searchbar' style={searchShow ? {transform: 'translateY(0)'} : {transform: 'translateY(3.5rem)'}}>
                                <input type='search' />
                                <span onClick={() => setSearchShow(!searchShow)}>
                                    <span className="iconify" data-icon="icon-park:close-one" data-width="256" data-height="256"></span>
                                </span>
                            </div>
                        </SvgIcon>
                    </NavListItem>
                    <NavListItem>
                        <SvgIcon>
                            <span onClick={() => setEmailShow(!emailShow)}>
                                <span className="iconify" data-icon="icon-park:mail"></span>
                            </span>
                        </SvgIcon>
                    </NavListItem>
                    <NavListItem>{datetime}</NavListItem>
                </NavList>
            </MainHeader>
            {emailShow && <EmailModal setEmailShow={setEmailShow}/>}
        </>
    )
}
    
export default NavigationBar;