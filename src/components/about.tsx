import React from "react";
import { TypingText } from "../utils/framer-motion/customText";
import {
  AboutContainer,
  CardContainer,
  CardTitle,
  CardList,
  CardItem,
  AboutMe,
  AboutCards,
  AboutText,
  AboutAnchors,
} from "./styled/about";
import { GlobalSectionTitle } from "./styled";
import { SkillSet, AboutParagraph } from "../utils/misc/app.data";

interface AboutProps {}

type CardProps = {
  data: {
    type: string;
    payload: string[];
  };
};

const About: React.FC<AboutProps> = () => {
  return (
    <AboutContainer>
      <GlobalSectionTitle>
        <TypingText title="A bit about me..." />
      </GlobalSectionTitle>
      <AboutMe>
        <AboutText>
          {AboutParagraph}{" "}
          <AboutAnchors
            href="https://github.com/zero0rder"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </AboutAnchors>
          ! Or my blog posts over at{" "}
          <AboutAnchors
            href="https://medium.com/@dwightsmth"
            target="_blank"
            rel="noopener noreferrer"
          >
            medium
          </AboutAnchors>
          ...
        </AboutText>
      </AboutMe>
      <AboutCards>
        {SkillSet.map((e, i) => (
          <Card key={i} data={e} />
        ))}
      </AboutCards>
    </AboutContainer>
  );
};

const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <CardContainer>
      <CardTitle>{data.type}</CardTitle>
      <CardList>
        {data.payload.map((e, i) => (
          <CardItem key={i}>{e}</CardItem>
        ))}
      </CardList>
    </CardContainer>
  );
};

export default About;
