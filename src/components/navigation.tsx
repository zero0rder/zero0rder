import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { ResumeContext, DrawerContext, ContactWrapperContext } from '../contexts'
import { useScrollTo } from '../hooks/useScrollTo'
import { AiFillGithub, AiFillLinkedin, AiOutlineMail, AiFillFilePdf } from 'react-icons/ai'
import { AnchorWrap, ListIcon, ListText, ItemWrap } from './styled/navigation'
import { navListVariant, navItemsVariant } from '../utils/framer-motion/motion'

interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = ({}) => {
  const { isOpen } = useContext(DrawerContext)
  return (
      <motion.ul 
          variants={navListVariant}
          initial='closed'
          animate={isOpen ? 'open' : 'closed'}
          className='nav-list'>
          <MenuItems/>
      </motion.ul>
  )
}

interface MenuItemProps {}

const MenuItems: React.FC<MenuItemProps> = ({}) => {
  const { setIsResume } = useContext(ResumeContext)
  const { setIsOpen } = useContext(DrawerContext)
  const { element: contactElem } = useContext(ContactWrapperContext)
  const { moveTo } = useScrollTo()

  const openResume = () => {
    setIsOpen(false)
    setIsResume(true)
  }

  const scrollToEmail = () => {
    setIsOpen(false)
    moveTo(contactElem?.offsetTop ?? 0)
  }

  const liAttrs = {
    variants: navItemsVariant, 
    whileHover: { scale: 1.1},
    whileTap: {scale: 0.95}
  }
  
  return (
    <>
      <motion.li
        {...liAttrs }>
        <AnchorWrap href='https://www.linkedin.com/in/elismth' target='_blank' rel='noopener noreferrer'>
          <ListIcon><AiFillLinkedin/></ListIcon>
          <ListText>LinkedIn</ListText>
        </AnchorWrap>
      </motion.li>
      <motion.li
      {...liAttrs }>
        <AnchorWrap href='https://github.com/zero0rder/zero0rder' target='_blank' rel='noopener noreferrer'>
          <ListIcon><AiFillGithub/></ListIcon>
          <ListText>Github</ListText>
        </AnchorWrap>
      </motion.li>
      <motion.li
      {...liAttrs }>
        <ItemWrap onClick={() => openResume()}>
          <ListIcon><AiFillFilePdf/></ListIcon>
          <ListText>Resume/CV</ListText>
        </ItemWrap>
      </motion.li>
      <motion.li
      {...liAttrs }>
         <ItemWrap onClick={() => scrollToEmail()}>
            <ListIcon><AiOutlineMail/></ListIcon>
            <ListText>Email</ListText>
        </ItemWrap>
      </motion.li>
    </>
  )
}

export default Navigation