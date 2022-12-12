import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Navigation from './navigation'
import { HiMenuAlt1, HiMenuAlt2 } from 'react-icons/hi'
import { Overlay } from './styled'
import { Header, BurgerWrap, NavTitle, ImageWrap, Image } from './styled/navbar'
import { DrawerContext } from '../contexts'
import { sidebarVariant } from '../utils/framer-motion/motion'

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    return (
        <>
            { isOpen ? <Overlay onClick={() => setIsOpen(false)}/> : <></> }
            <Header>
                <BurgerWrap 
                    style={{ color: `${isOpen ? '#000' : ''}`}} 
                    onClick={() => setIsOpen(isOpen ? false : true)}>
                    { isOpen ? <HiMenuAlt1/> : <HiMenuAlt2/> }
                </BurgerWrap>
                <motion.div 
                    variants={sidebarVariant}
                    initial='closed' 
                    animate={isOpen ? 'open': 'closed'} 
                    className='nav-background' 
                    style={{ height: `${window.innerHeight}px`}}>
                    <DrawerContext.Provider value={{isOpen, setIsOpen}}>
                        <Navigation/>
                    </DrawerContext.Provider>
                </motion.div>
                <NavTitle>zero0rder</NavTitle>
                <ImageWrap>
                    <Image src='https://avatars.githubusercontent.com/u/11478868?v=4' />
                </ImageWrap>
            </Header>
        </>
    )
}

export default Navbar