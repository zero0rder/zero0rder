import React, { useEffect, useState } from "react";
import { LoadingWrapper, LoadingText, LoadingChar } from "./loading";

interface LoadingProps {
  isLoading: boolean;
}

const name = "zero0rder";
const Loading: React.FC<LoadingProps> = ({ isLoading }) => {
  const [delay, setDelay] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => {
      setDelay(true);
    }, 250);
  }, []);

  return (
    <LoadingWrapper isLoading={isLoading}>
      <LoadingText delay={delay}>
        {name.split("").map((c, i) => (
          <LoadingChar key={i}>{c}</LoadingChar>
        ))}
      </LoadingText>
    </LoadingWrapper>
  );
};

export default Loading;
