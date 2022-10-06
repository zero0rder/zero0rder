import React, { useState } from 'react'
import { useDateTimeHook } from '../../../hooks/useDateTime'
import { MainHeader, NavList, NavListItem, NestedNavList, NestedListItem, SvgIcon } from './styled'
import EmailModal from './emailModal'

const NavigationBar = ({toggle}) => {
    const datetime = useDateTimeHook()
    const [emailShow, setEmailShow] = useState(false)

    return (
        <>
            <MainHeader>
                <NavList>
                    <NavListItem>
                        <span>File</span>
                        <div>
                            <NestedNavList>
                                <NestedListItem onClick={() => toggle('about')}>About</NestedListItem>
                                <NestedListItem onClick={() => toggle('projects')}>Projects</NestedListItem>
                            </NestedNavList>
                        </div>
                    </NavListItem>
                    <NavListItem>
                        <span>Contact</span>
                        <div>
                            <NestedNavList>
                                <NestedListItem onClick={() => setEmailShow(s => !s)}>Email</NestedListItem>
                                <NestedListItem>Twitter</NestedListItem>
                                <NestedListItem>LinkedIn</NestedListItem>
                            </NestedNavList>
                        </div>
                    </NavListItem>
                </NavList>
                <NavList className='right-nav-list'>
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
    
export default NavigationBar