import tw from 'twin.macro'
import { motion } from "framer-motion";

export const HeroContainer = tw(motion.div)`
    relative
    max-w-[1150px]
    m-auto
    flex
    flex-col
    justify-center
    items-center
    px-6
    h-[inherit]
    overflow-auto
    md:flex-row
    sm:px-16
    md:px-8
`

export const ArrowWrap = tw.div`
    absolute
    text-2xl
    bottom-20
    left-1/2
`

export const HeroName = tw.h1`
    text-[6.75rem]
    [line-height: 7rem]
    text-center
    tracking-[0.25rem]
    font-extrabold 
    text-transparent
    bg-clip-text 
    bg-black
    // hover:bg-gradient-to-r from-black to-emerald-400
    md:text-left
    md:text-[7rem]
    md:[line-height: 8rem]
    lg:text-[9rem]
    lg:[line-height: 10rem]   
`

export const LeftSection = tw.div`
    hidden
    justify-center
    items-center
    h-full
    w-full
    md:flex
    md:w-[55%]
    lg:w-3/5
`

export const LeftContent = tw.div`
    h-[inherit]
    flex
    flex-col
    justify-center
    md:pr-8
`

export const RightSection = tw.div`
    w-full
    md:w-[45%]
    lg:w-2/5
`

// Right Panel Box
export const RightPanel = tw.div`
    flex
    flex-col
    gap-y-6
    p-6
    rounded-2xl
    shadow-2xl
    border
    border-gray-300
    shadow-gray-300
    bg-white
`

export const RightPanelTop = tw.div`
    flex
    flex-col
    gap-y-4
    md:flex-row
`

export const RightPanelText = tw.p`
    flex
    items-center
    text-center
    text-sm
    grow
`

export const RightPanelBottom = tw.div`
    flex
    justify-center
    items-center
    gap-x-2
    text-2xl
`

export const RightPanelMediaContainer = tw.section`
    relative
    border-b
    grow
    border-gray-300
`

export const RightPanelCarouselWrap = tw.div`
    flex
    justify-center
    items-center
    gap-x-4
    h-56
    flex-nowrap
    p-4
    overflow-hidden
`

export const ImageContainer = tw.div`
    flex
    items-center
    justify-center
    md:justify-end
    md:pr-6
    md:border-r
    border-gray-300
`

export const ImageWrap = tw.span`
    w-[6.5rem]
    h-[6.5rem]
    rounded-full
    overflow-hidden
    border
    border-black
    sm:w-[8.5rem]
    sm:h-[8.5rem]
    md:w-[6.5rem]
    md:h-[6.5rem]
`
export const HeroMeta = tw.div`
    flex
    items-center
    justify-center
    flex-col
    gap-y-2
    grow
    md:pl-6
    italic
`

export const MobileName = tw.span`
  font-bold
  text-4xl
  pb-2
  underline
  tracking-[0.12rem]
  text-center
  sm:text-5xl
  sm:pb-4
  md:hidden
`

export const AnchorWrap = tw.a`
    cursor-pointer
    hover:text-gray-300
`

export const InfoList = tw.ul`
    hidden
    md:block
    text-[1.25rem]
    md:text-[1.75rem]
    leading-10
    my-8
`

export const InfoListItem = tw.li`
    italic
    justify-center
    md:justify-start
    drop-shadow-2xl
`