import React from "react";
import { LoadingWrapper, LoadingText, LoadingChar } from "./loading";

interface LoadingProps {
  isLoading: boolean;
}

const name = "zero0rder";

const Loading: React.FC<LoadingProps> = ({ isLoading }) => {
  return (
    <LoadingWrapper isLoading={isLoading}>
      <LoadingText>
        {name.split("").map((c, i) => (
          <LoadingChar key={i}>{c}</LoadingChar>
        ))}
      </LoadingText>
    </LoadingWrapper>
  );
};

export default Loading;
