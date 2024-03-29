import tw from 'twin.macro'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'

export const IconWrap = tw.div`
    absolute
    text-gray-200
    text-center
    z-10
    left-8
    top-8
`
export const Icon = tw.p`
    text-5xl
    font-['Barriecito']
`

export const IconText = tw.span`
    font-mono
    text-sm
`

/**
 *  Carousel
 */
export const CarouselWrap = tw(AnimatePresence)`
    relative
    border-b
    pb-8
    grow
    border-gray-300
`

export const CardWrap = tw.div`
    flex
    justify-center
    items-center
    gap-x-4
    w-full
    h-full
    flex-nowrap
    overflow-hidden
`

export const MotionBox = tw(motion.div)`
    w-full
    h-full
`

export const CardContent = tw.div`
    flex
    justify-center
    items-center
    h-full
    flex-col
    flex-wrap
    text-center
    p-1
    overflow-hidden
`
export const CardTitle = tw.span`
    border-b
    text-[0.95rem]
    font-medium
`

export const CardBody = tw.span`
    h-full
    w-full
    bg-contain
    bg-center
    bg-no-repeat
    text-[0.75rem]
    [line-height: 1.2rem]
`

export const LeftArrow = tw(FaChevronLeft)`
    absolute
    text-sm
    left-0
    cursor-pointer
`
export const RightArrow = tw(FaChevronRight)`
    absolute
    text-sm
    right-0
    cursor-pointer
`

/**
 *  Resume
 */
export const DocWrapper = tw.div`
    h-full
    max-w-[515px]
    flex
    m-auto
    px-4
`