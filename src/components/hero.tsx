import React, { useContext } from "react";
import { motion } from "framer-motion";
import { RxCaretRight } from "react-icons/rx";
import { staggerContainer, textVariant } from "../utils/framer-motion/motion";
import { AiFillLinkedin } from "react-icons/ai";
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
} from "./styled/hero";

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
            <motion.div variants={textVariant(0.25)}>
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
                  New York, NY
                </InfoListItem>
              </InfoList>
            </motion.div>
          </LeftContent>
        </LeftSection>
        <RightSection>
          <RightPanel>
            <RightPanelTop>
              <AnchorWrap onClick={() => setIsResume(true)}>
                <MdPictureAsPdf />
              </AnchorWrap>
              <AnchorWrap
                href="https://www.linkedin.com/in/dwightsmth"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin />
              </AnchorWrap>
            </RightPanelTop>
            <RightPanelText>{MissionParagraph}</RightPanelText>
            <RightPanelBottom></RightPanelBottom>
          </RightPanel>
        </RightSection>
      </HeroContainer>
    </motion.div>
  );
};

export default Hero;
