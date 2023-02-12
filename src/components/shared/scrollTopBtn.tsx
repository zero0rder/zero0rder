import React, { useState, useEffect } from "react";
import { useScroll } from "framer-motion";
import { ImArrowUp2 } from "react-icons/im";
import { useScrollTo } from "../../hooks/useScrollTo";
import { ScrollBtn } from "../styled";

interface ScrollTopBtnProps {}

const ScrollTopBtn: React.FC<ScrollTopBtnProps> = ({}) => {
  const [showToTop, setShowToTop] = useState<boolean>(false);
  const { scrollYProgress } = useScroll();
  const { moveTo } = useScrollTo();
  const handleScrollBtn = (percent: number) =>
    setShowToTop(percent > 0.45 ? true : false);
  useEffect(() => scrollYProgress.onChange((pos) => handleScrollBtn(pos)), []);

  return (
    <>
      {showToTop && (
        <ScrollBtn onClick={() => moveTo(0)}>
          <ImArrowUp2 />
        </ScrollBtn>
      )}
    </>
  );
};

export default ScrollTopBtn;
