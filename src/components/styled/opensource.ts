import tw from 'twin.macro'
import { motion } from 'framer-motion'

export const OSContainer = tw.div`
    flex
    flex-col
    justify-center
    items-center
    relative
    m-auto
    max-w-[1150px]
    py-8
    h-full
    w-full
    gap-y-8
`

export const CardWrapper = tw.div`
    flex-wrap
    justify-center
    items-center
    gap-y-8
    p-4
    flex
    overflow-scroll
    w-full
    grow
`

export const CardMotion = tw(motion.div)`
    basis-[23.25rem]
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
export const SeeMoreLessWrapper = tw.div`
    m-6
    text-center
    md:hidden
    
`
export const SeeMoreLessButton = tw.button`
    p-3.5
    text-[1.25rem]
    border
    rounded-2xl
    font-medium
    outline-none
`