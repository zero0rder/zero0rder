import React from "react";
import Tilt from "react-parallax-tilt";
import { CardProps } from "../../interfaces";
import { FiLink } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import {
  CardWrapper,
  OSCard,
  CardBody,
  TitleWrap,
  CardTitle,
  CardText,
  CardData,
  CardBottom,
  CardImage,
  CardMotion,
  CardIcons,
} from "./opensource";

import { GlobalIconAnchors } from "../styled/index";

const Cards: React.FC<CardProps> = ({ data }) => {
  return (
    <CardWrapper className="card-wrapper">
      {data?.map((r, i) => (
        <CardMotion key={r.id}>
          <Tilt>
            <OSCard>
              <CardBody>
                <CardImage
                  style={{
                    backgroundImage: `url(${r.image})`,
                  }}
                ></CardImage>
                <CardBottom>
                  <TitleWrap>
                    <CardTitle>{r.name.toLowerCase()}</CardTitle>
                  </TitleWrap>
                  <CardData>
                    <CardText>{r.description}</CardText>
                    <CardIcons>
                      <span>
                        <GlobalIconAnchors
                          href={r.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ display: "flex" }}
                        >
                          <AiFillGithub />
                        </GlobalIconAnchors>
                      </span>
                      <span>
                        <GlobalIconAnchors
                          href={r.homepage ?? ""}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FiLink />
                        </GlobalIconAnchors>
                      </span>
                    </CardIcons>
                  </CardData>
                </CardBottom>
              </CardBody>
            </OSCard>
          </Tilt>
        </CardMotion>
      ))}
    </CardWrapper>
  );
};

export default Cards;
