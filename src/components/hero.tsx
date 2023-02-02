import React, { useContext } from "react";
import { motion } from "framer-motion";
import { RxCaretRight } from "react-icons/rx";
import { staggerContainer, textVariant } from "../utils/framer-motion/motion";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillMediumCircle,
  // AiOutlineTwitter,
} from "react-icons/ai";
import { MdPictureAsPdf } from "react-icons/md";
import { ResumeContext } from "../contexts";
import { MissionParagraph } from "../utils/misc/app.data";
import {
  HeroContainer,
  LeftSection,
  LeftContent,
  HeroName,
  InfoList,
  InfoListItem,
  RightSection,
  RightPanel,
  RightPanelTop,
  RightPanelText,
  AnchorWrap,
  RightPanelBottom,
  ImageContainer,
  ImageWrap,
  HeroMeta,
  HeroUL,
  HeroLI,
  HeroSpan,
  MobileName,
} from "./styled/hero";
import { GlobalImage } from "./styled";
import MainImage from "../assets/images/maskon.jpg";

interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}) => {
  const { setIsResume } = useContext(ResumeContext);

  return (
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      style={{ height: "inherit" }}
    >
      <HeroContainer>
        <LeftSection>
          <LeftContent>
            <motion.div className="hero-name-div" variants={textVariant(0.25)}>
              <HeroName>Dwight Smith</HeroName>
            </motion.div>
            <motion.div variants={textVariant(0.35)} className="infolist-div">
              <InfoList>
                <InfoListItem>
                  <RxCaretRight />
                  Software Developer
                </InfoListItem>
                <InfoListItem>
                  <RxCaretRight />
                  Open Source Contributor
                </InfoListItem>
                <InfoListItem>
                  <RxCaretRight />
                  Curious Human
                </InfoListItem>
              </InfoList>
            </motion.div>
          </LeftContent>
        </LeftSection>
        <RightSection>
          <RightPanel>
            <RightPanelTop>
              <ImageContainer>
                <ImageWrap>
                  <GlobalImage src={MainImage} />
                </ImageWrap>
              </ImageContainer>
              <HeroMeta>
                <MobileName>Dwight Smith</MobileName>
                <HeroUL>
                  <HeroLI>
                    <HeroSpan>Position:</HeroSpan> Fullstack Developer
                  </HeroLI>
                  <HeroLI>
                    <HeroSpan>Experience:</HeroSpan> 7 Years
                  </HeroLI>
                  <HeroLI>
                    <HeroSpan>Location:</HeroSpan> New York, NY
                  </HeroLI>
                </HeroUL>
              </HeroMeta>
            </RightPanelTop>
            <RightPanelText>{MissionParagraph}</RightPanelText>
            {/* <div>Row</div> */}
            <RightPanelBottom>
              <AnchorWrap
                href="https://github.com/zero0rder"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="github account"
              >
                <AiFillGithub />
              </AnchorWrap>
              <AnchorWrap
                href="https://www.linkedin.com/in/dwightsmth"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="linkedin profile"
              >
                <AiFillLinkedin />
              </AnchorWrap>
              {/* <AnchorWrap
                href=""
                target="_blank"
                rel="noopener noreferrer"
                aria-label="twitter profile"
              >
                <AiOutlineTwitter />
              </AnchorWrap> */}
              <AnchorWrap
                href="https://medium.com/@dwightsmth"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="medium profile"
              >
                <AiFillMediumCircle />
              </AnchorWrap>
              <AnchorWrap onClick={() => setIsResume(true)}>
                <MdPictureAsPdf />
              </AnchorWrap>
            </RightPanelBottom>
          </RightPanel>
        </RightSection>
      </HeroContainer>
    </motion.div>
  );
};

export default Hero;
