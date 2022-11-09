import React, { useState } from 'react'
import { MainHeader, BurgerIcon } from './styled'
import Drawer from './drawer'
import BreadCrumb from './breadcrumb'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer = () => setIsOpen(prev => !prev)

    return (
        <MainHeader>
            <BreadCrumb/>
            <BurgerIcon onClick={() => toggleDrawer()}/>
            <Drawer isOpen={isOpen} setOpen={setIsOpen}/>
        </MainHeader>
    )
}

export default Header