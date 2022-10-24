import React, { useState } from 'react'
import { useDateTimeHook } from '../../../hooks/useDateTime'
import { MainHeader, NavList, NavListItem, NestedNavList, NestedListItem, SvgIcon } from './styled'
import EmailModal from '../modals/emailModal'

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
                                <NestedListItem>LinkedIn</NestedListItem>
                            </NestedNavList>
                        </div>
                    </NavListItem>
                </NavList>
                <NavList className='right-nav-list'>
                    <NavListItem>
                        <SvgIcon onClick={() => setEmailShow(!emailShow)}>
                            <iconify-icon icon="fluent-emoji:incoming-envelope"></iconify-icon>
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