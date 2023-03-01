import React from "react";
import { IconWrap, Icon, IconText } from "./shared";

interface MainIconProps {}

const MainIcon: React.FC<MainIconProps> = ({}) => {
  return (
    <IconWrap>
      <Icon>Zero0rder</Icon>
      <IconText>New York, NY</IconText>
    </IconWrap>
  );
};

export default MainIcon;
