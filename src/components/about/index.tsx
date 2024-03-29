import React from "react";
import {
  AboutContainer,
  CardContainer,
  CardTitle,
  CardList,
  CardItem,
  AboutMe,
  AboutCards,
  AboutText,
  CardItemTitle,
} from "./about";
import { SkillSet, AboutParagraph } from "../../utils/misc/app.data";
import { IconType } from "react-icons";

interface AboutProps {}

type CardProps = {
  type: string;
  payload: { title: string; icon: IconType }[];
};

const About: React.FC<AboutProps> = () => {
  return (
    <AboutContainer>
      <AboutMe>
        <AboutText>{AboutParagraph}</AboutText>
      </AboutMe>
      <AboutCards>
        {SkillSet.map((e, i) => (
          <Card key={i} type={e.type} payload={e.payload} />
        ))}
      </AboutCards>
    </AboutContainer>
  );
};

const Card: React.FC<CardProps> = ({ type, payload }) => {
  return (
    <CardContainer>
      <CardTitle>{type}</CardTitle>
      <CardList>
        {payload.map((e, i) => (
          <CardItem key={i}>
            {<e.icon />}
            <CardItemTitle>{e.title}</CardItemTitle>
          </CardItem>
        ))}
      </CardList>
    </CardContainer>
  );
};

export default About;
