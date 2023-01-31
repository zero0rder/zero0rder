import React from "react";
import { AiFillGithub, AiFillMediumCircle } from "react-icons/ai";
import { BiCopyright } from "react-icons/bi";
import { FooterWrap, FooterText, SocialIcons } from "./styled/footer";
import { GlobalIconAnchors } from "./styled";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <FooterWrap>
      <FooterText>
        All rights reserved. <BiCopyright /> {new Date().getFullYear()}
      </FooterText>
      <SocialIcons>
        <GlobalIconAnchors
          href="https://github.com/zero0rder"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="github account"
        >
          <AiFillGithub />
        </GlobalIconAnchors>
        <GlobalIconAnchors
          href="https://medium.com/@dwightsmth"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="medium profile"
        >
          <AiFillMediumCircle />
        </GlobalIconAnchors>
      </SocialIcons>
    </FooterWrap>
  );
};

export default Footer;
