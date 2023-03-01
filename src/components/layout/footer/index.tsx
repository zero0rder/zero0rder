import React from "react";
import {
  FooterWrap,
  SocialWrap,
  LinkedInIcon,
  GithubIcon,
  AnchorWrap,
} from "./footer";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <FooterWrap>
      <SocialWrap>
        <AnchorWrap
          href="https://github.com/zero0rder"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="github account"
        >
          <GithubIcon />
        </AnchorWrap>
        <AnchorWrap
          href="https://www.linkedin.com/in/dwightsmth"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="linkedin profile"
        >
          <LinkedInIcon />
        </AnchorWrap>
      </SocialWrap>
    </FooterWrap>
  );
};

export default Footer;
