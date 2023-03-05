import React from "react";
import { db_repos } from "../../utils/misc/app.data";
import { OSContainer } from "./opensource";
import { OpenSourceProps } from "../../interfaces";
import Cards from "./cards";

// @ts-ignore
const OpenSource: React.FC<OpenSourceProps> = ({}) => {
  return (
    <OSContainer>
      <Cards data={db_repos} />
    </OSContainer>
  );
};

export default OpenSource;
