import tw from 'twin.macro'

export const OSContainer = tw.div`
    flex
    flex-col
    justify-center
    items-center
    relative
    m-auto
    max-w-[1150px]
    px-4
    py-8
    md:px-8
    h-full
    w-full
    gap-y-8
`

export const CardWrapper = tw.div`
    h-[38rem]
    md:h-full
    p-4
    flex
    flex-wrap
    justify-center
    items-center
    gap-y-8
    overflow-scroll
    w-full
    grow
`

export const OSCard = tw.div`
    relative
    flex
    justify-center
    items-center
    flex-col
    h-48
    px-4
    w-full
    // w-1/2
    // sm:w-1/3
`
    
export const CardBody = tw.div`
    w-full
    h-full
    max-w-md
    flex
    flex-col
    justify-start
    items-center
    p-3
    border
    rounded-2xl
    shadow-lg
    border-emerald-300
    shadow-emerald-300
    gap-y-4
`

export const TitleWrap = tw.div`
    py-2
    flex
    justify-center
    items-center

`

export const CardTitle = tw.h2`
    text-[2rem]
    text-center
    font-medium
`

export const CardData = tw.div`
    flex
    justify-end
    items-start
    gap-x-1
    w-full
`

export const CardText = tw.p`
    text-center
    py-2
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