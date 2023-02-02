import React from "react";
import { BiCopyright } from "react-icons/bi";
import { FooterWrap, FooterText } from "./styled/footer";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <FooterWrap>
      <FooterText>
        All rights reserved. <BiCopyright /> {new Date().getFullYear()}
      </FooterText>
    </FooterWrap>
  );
};

export default Footer;
