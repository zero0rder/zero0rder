import React from 'react'
import { motion } from 'framer-motion'
import { footerVariants } from '../utils/framer-motion/motion'
import { AiFillGithub } from 'react-icons/ai'
import { FaStackOverflow, FaLinkedinIn } from 'react-icons/fa'
import { BiCopyright} from 'react-icons/bi'
import { FooterWrap, FooterText, SocialIcons } from './styled/footer'

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
    return (
        <motion.footer
            variants={footerVariants}
            initial='hidden'
            whileInView='show'>
            <FooterWrap>
                <FooterText>All rights reserved. <BiCopyright/> {new Date().getFullYear()}</FooterText>
                <SocialIcons>
                    <a href='https://github.com/zero0rder/zero0rder' target='_blank' rel='noopener noreferrer'>
                        <AiFillGithub/>
                    </a>
                    <a href='https://www.linkedin.com/in/elismth' target='_blank' rel='noopener noreferrer'>
                        <FaLinkedinIn/>
                    </a>
                    <a href='https://stackoverflow.com/users/5081104/zero0rder' target='_blank' rel='noopener noreferrer'>
                        <FaStackOverflow/>
                    </a>
                </SocialIcons>
            </FooterWrap>
        </motion.footer>
    )
}

export default Footer