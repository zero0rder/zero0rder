import React from "react";
import { fadeIn } from "../../utils/framer-motion/motion";
import { CardProps } from "../../interfaces";
import { FiLink } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { IMGHash } from "../../utils/misc/app.data";
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
  GlobalIconAnchors,
} from "../styled";

const Cards: React.FC<CardProps> = ({ data }) => {
  return (
    <CardWrapper className="card-wrapper">
      {data?.map((r, i) => (
        <CardMotion
          variants={fadeIn("up", "spring", i * 0.2, 0.7)}
          initial="hidden"
          animate="show"
          whileHover={{ scale: 1.05 }}
          key={r.id}
        >
          <OSCard>
            <CardBody>
              <CardImage
                style={{
                  backgroundImage: `url(${IMGHash.get(r.id)})`,
                }}
              ></CardImage>
              <CardBottom>
                <TitleWrap>
                  <CardTitle>{r.name.toLowerCase()}</CardTitle>
                </TitleWrap>
                <CardText>{r.description}</CardText>
                <CardData>
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
                </CardData>
              </CardBottom>
            </CardBody>
          </OSCard>
        </CardMotion>
      ))}
    </CardWrapper>
  );
};

export default Cards;
