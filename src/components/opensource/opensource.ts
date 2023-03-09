import tw from 'twin.macro'

export const OSContainer = tw.div`
    h-full
    w-full
    flex
    flex-col
    justify-center
    items-center
    relative
    m-auto
    max-w-[1150px]
    pt-24
    md:px-8
    gap-y-8
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

export const CardMotion = tw.div`
    basis-[17.5rem]
`

export const OSCard = tw.div`
    w-full
    relative
    flex
    justify-center
    items-center
    flex-col
    h-80
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
    p-3
    border
    rounded-3xl
    border-gray-300
    overflow-hidden
    backdrop-blur-sm 
    bg-white/10
`

export const CardImage = tw.div`
    w-full
    grow
    bg-no-repeat
    bg-cover
    bg-center
    rounded-3xl
`

export const CardBottom = tw.div`
    flex
    flex-col
    w-full
    text-lg
    py-2
`

export const TitleWrap = tw.div`
    w-full
    flex
`

export const CardTitle = tw.h2`
    text-3xl
    font-medium
`

export const CardData = tw.div`
    w-full
    py-1
    text-sm
    flex
    justify-between
`

export const CardText = tw.p``

export const CardIcons = tw.p`
    flex
    items-center
    gap-x-1
`