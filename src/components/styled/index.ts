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
    hover:text-emerald-300
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
    w-full
    flex-wrap
    justify-center
    items-center
    gap-y-8
    py-4
    flex
    overflow-scroll
`

export const CardMotion = tw(motion.div)`
    basis-[17.5rem]
`

export const OSCard = tw.div`
    w-full
    relative
    flex
    justify-center
    items-center
    flex-col
    h-56
    md:px-4
`
    
export const CardBody = tw.div`
    w-full
    h-full
    max-w-[17rem]
    flex
    flex-col
    justify-start
    items-center
    border
    rounded-full
    border-gray-300
    overflow-hidden
`

export const CardBottom = tw.div`
    relative
    flex
    flex-col
    items-center
    gap-y-1
    h-[58%]
    w-full
    text-lg
    p-2
`

export const CardImage = tw.div`
    w-full
    h-[42%]
    bg-no-repeat
    bg-cover
    bg-center
    border-b
    border-gray-300
`
export const TitleWrap = tw.div`
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
    absolute
    p-1
    text-lg
    bottom-3
    flex
    justify-center
    items-start
    gap-x-1
    w-full
`

export const CardText = tw.p`
    text-[0.75rem]
    [line-height: 1.2rem]
    text-center
    pb-2
    px-3
`