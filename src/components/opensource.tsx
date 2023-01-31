import React, { useRef, forwardRef } from "react";
import { motion } from "framer-motion";
import { useFetch } from "../hooks/useFetch";
import { FiLink } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { fadeIn } from "../utils/framer-motion/motion";
import { TypingText } from "../utils/framer-motion/customText";
import { whitelistedURLS } from "../utils/misc/whitelist";
import { GlobalIconAnchors, GlobalSectionTitle } from "./styled";
import {
  OSContainer,
  CardWrapper,
  OSCard,
  CardBody,
  TitleWrap,
  CardTitle,
  CardText,
  CardData,
} from "./styled/opensource";

interface OpenSourceProps {
  ref?: React.Ref<HTMLDivElement | null>;
}

interface RepositoryProps {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
}

//todo: fix type error
// @ts-ignore
const OpenSource: React.FC<OpenSourceProps> = forwardRef(
  ({}, ref: React.Ref<HTMLDivElement>) => {
    const repos = useFetch<RepositoryProps[]>(
      `${import.meta.env.VITE_REPO_URL}/repos?sort=updated`
    );
    const filteredRepos = repos?.filter((r) => whitelistedURLS.includes(r.id));
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    return (
      <OSContainer ref={ref}>
        <GlobalSectionTitle>
          <TypingText title="OSS" />
        </GlobalSectionTitle>
        <CardWrapper ref={wrapperRef} className="card-wrapper">
          {filteredRepos &&
            filteredRepos.map((r, i) => (
              <motion.div
                variants={fadeIn("up", "spring", i * 0.2, 0.7)}
                initial="hidden"
                animate="show"
                whileHover={{ scale: 1.05 }}
                key={r.id}
                className="motion-div"
              >
                <OSCard>
                  <CardBody>
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
                    <TitleWrap>
                      <CardTitle>{r.name.toLowerCase()}</CardTitle>
                    </TitleWrap>
                    <CardText>{r.description}</CardText>
                  </CardBody>
                </OSCard>
              </motion.div>
            ))}
        </CardWrapper>
      </OSContainer>
    );
  }
);

export default OpenSource;
