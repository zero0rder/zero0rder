import React, { useContext } from "react";
import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "../utils/framer-motion/motion";
import { RxCaretRight } from "react-icons/rx";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { MdPictureAsPdf } from "react-icons/md";
import { SiMedium } from "react-icons/si";
import { ResumeContext } from "../contexts";
import Carousel from "./shared/carousel";
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
  MobileName,
  RightPanelMediaContainer,
  RightPanelCarouselWrap,
} from "./styled/hero";
import { GlobalImage } from "./styled";
import MainImage from "../assets/images/maskon.jpg";
import { slides } from "../utils/misc/app.data";

interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}) => {
  const { setIsResume } = useContext(ResumeContext);
  return (
    <HeroContainer
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
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
              <RightPanelText>
                Software Developer based in New York who has been working in the
                IT industry for 6 years.
              </RightPanelText>
            </HeroMeta>
          </RightPanelTop>
          <RightPanelMediaContainer>
            <RightPanelCarouselWrap>
              <Carousel content={slides} />
            </RightPanelCarouselWrap>
          </RightPanelMediaContainer>
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
            <AnchorWrap
              href="https://medium.com/@dwightsmth"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="medium profile"
            >
              <SiMedium />
            </AnchorWrap>
            <AnchorWrap onClick={() => setIsResume(true)}>
              <MdPictureAsPdf />
            </AnchorWrap>
          </RightPanelBottom>
        </RightPanel>
      </RightSection>
    </HeroContainer>
  );
};

export default Hero;
