import tw from 'twin.macro'
import { motion } from 'framer-motion'

export const Overlay = tw.div`
fixed
block
w-full
h-full
top-0
left-0
right-0
bottom-0
bg-[rgba(0,0,0,0.5)]
cursor-pointer
z-50
`

export const ScrollBtn = tw.div`
  fixed
  rounded-full
  bottom-32
  right-11
  h-12
  w-12
  flex
  items-center
  justify-center
  text-3xl
  border-2
`

export const GlobalSectionTitle = tw.h2`
    text-[2.5rem]
    font-medium
    text-center
`

export const GlobalIconAnchors = tw.a`
    hover:text-gray-300
`

export const GlobalImage = tw.img`
    w-full
`

export const GlobalParallaxWrap = tw.div`
    w-full
`

export const GlobalParallax = tw.div`
    m-0
    flex
    flex-nowrap
    [letter-spacing: -0.06rem]
    [line-height: 0.8rem]
    whitespace-nowrap
    overflow-hidden
`

export const GlobalParallaxItem = tw.span`
    block
    mr-2
`

/**
 *  Card Elements
 * 
 */

export const CardWrapper = tw.div`
    flex-wrap
    justify-center
    items-center
    gap-y-8
    py-4
    flex
    overflow-scroll
    w-full
    grow
`

export const CardMotion = tw(motion.div)`
    basis-[22.5rem]
`

export const OSCard = tw.div`
    relative
    flex
    justify-center
    items-center
    flex-col
    h-64
    md:px-4
    w-full
`
    
export const CardBody = tw.div`
    w-full
    h-full
    max-w-md
    flex
    flex-col
    justify-start
    items-center
    border
    rounded-2xl
    shadow-lg
    border-gray-300
    shadow-gray-300
    overflow-hidden
    bg-white
`

export const CardBottom = tw.div`
    flex
    flex-col
    items-center
    gap-y-2
    h-[63%]
    w-full
`

export const CardImage = tw.div`
    w-full
    h-[37%]
    bg-no-repeat
    bg-cover
    bg-center
    border-b
    border-gray-300
`
export const TitleWrap = tw.div`
    px-3
    flex
    justify-center
    items-center

`

export const CardTitle = tw.h2`
    text-3xl
    text-center
    font-medium
`

export const CardData = tw.div`
    flex
    justify-end
    items-start
    gap-x-1
    w-full
    p-3
`

export const CardText = tw.p`
    text-sm
    text-center
    pb-2
    px-3
`