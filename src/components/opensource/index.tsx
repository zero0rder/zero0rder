import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { whitelistedURLS } from "../../utils/misc/whitelist";
import { OSContainer } from "./opensource";
import { OpenSourceProps, RepositoryProps } from "../../interfaces";
import Cards from "../shared/cards";

// @ts-ignore
const OpenSource: React.FC<OpenSourceProps> = ({}) => {
  const repos = useFetch<RepositoryProps[]>(
    `${import.meta.env.VITE_REPO_URL}/repos?sort=updated`
  );
  const filteredRepos = repos?.filter((r) => whitelistedURLS.includes(r.id));

  return (
    <OSContainer>
      <Cards data={filteredRepos} />
    </OSContainer>
  );
};

export default OpenSource;
