import React, { useState, PropsWithChildren } from "react";
import { wrap } from "@popmotion/popcorn";
import {
  CarouselWrap,
  CardWrap,
  MotionBox,
  CardContent,
  CardBody,
  LeftArrow,
  RightArrow,
} from "./shared";

interface CarouselProps {
  content: { title: string; src: string; id: number }[];
  children?: PropsWithChildren;
}

const directionOffset = 800;

const variants = {
  enter: (direction: number) => ({
    x: direction < 0 ? -directionOffset : directionOffset,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? -directionOffset : directionOffset,
    opacity: 0,
  }),
};

const swipeConfidenceThreshold = 100;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const Carousel: React.FC<CarouselProps> = ({ content }) => {
  const [[page, direction], setPage] = useState([0, 0]);
  // const [activeBullet, setActiveBullet] = useState(0);
  const i = wrap(0, content.length, page);
  const paginate = (newDirection: number) => {
    if (page + newDirection < content.length && page + newDirection >= 0) {
      setPage([page + newDirection, 0]);
      // setActiveBullet(page + newDirection);
    } else if (page + newDirection === content.length) {
      setPage([0, 0]);
      // setActiveBullet(0);
    } else if (page + newDirection === -1) {
      setPage([content.length - 1, 0]);
      // setActiveBullet(content.length - 1);
    }
  };

  return (
    <>
      <LeftArrow onClick={() => paginate(-1)} />
      <CarouselWrap initial={false} mode="wait" custom={direction}>
        <CardWrap>
          <MotionBox
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: {
                type: "spring",
                stiffness: 800,
                damping: 100,
                duration: 0.2,
              },
              opacity: { duration: 0.6 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < swipeConfidenceThreshold) {
                paginate(-1);
              } else if (swipe > -swipeConfidenceThreshold) {
                paginate(1);
              }
            }}
          >
            <CardContent>
              <CardBody
                style={{ backgroundImage: `url(${content[i].src})` }}
              ></CardBody>
            </CardContent>
          </MotionBox>
        </CardWrap>
      </CarouselWrap>
      <RightArrow onClick={() => paginate(1)} />
    </>
  );
};

export default Carousel;
