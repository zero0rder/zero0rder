import React from "react";
import { useFetch } from "../hooks/useFetch";
import { TypingText } from "../utils/framer-motion/customText";
import { whitelistedURLS } from "../utils/misc/whitelist";
import { GlobalSectionTitle } from "./styled";
import { OSContainer } from "./styled/opensource";
import { OpenSourceProps, RepositoryProps } from "../interfaces";
import Cards from "./shared/cards";

// @ts-ignore
const OpenSource: React.FC<OpenSourceProps> = ({}) => {
  const repos = useFetch<RepositoryProps[]>(
    `${import.meta.env.VITE_REPO_URL}/repos?sort=updated`
  );
  const filteredRepos = repos?.filter((r) => whitelistedURLS.includes(r.id));

  return (
    <OSContainer>
      <GlobalSectionTitle>
        <TypingText title="OSS" />
      </GlobalSectionTitle>
      <Cards data={filteredRepos} />
    </OSContainer>
  );
};

export default OpenSource;
