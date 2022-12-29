import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai'
import { BiCopyright} from 'react-icons/bi'
import { FooterWrap, FooterText, SocialIcons } from './styled/footer'

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
    return (
        <FooterWrap>
            <FooterText>All rights reserved. <BiCopyright/> {new Date().getFullYear()}</FooterText>
            <SocialIcons>
                <a href='https://github.com/zero0rder' target='_blank' rel='noopener noreferrer'>
                    <AiFillGithub/>
                </a>
                <a href='https://www.linkedin.com/in/elismth' target='_blank' rel='noopener noreferrer'>
                    <AiFillLinkedin/>
                </a>
                <a href='https://twitter.com/zero0rder' target='_blank' rel='noopener noreferrer'>
                    <AiFillTwitterCircle/>
                </a>
            </SocialIcons>
        </FooterWrap>
    )
}

export default Footer