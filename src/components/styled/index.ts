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