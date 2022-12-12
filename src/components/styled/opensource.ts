import tw from 'twin.macro'

export const OSContainer = tw.div`
    relative
    m-auto
    max-w-[1150px]
    px-4
    py-8
    md:px-8
`

export const CardWrapper = tw.div`
    h-[38rem]
    md:h-full
    p-4
    flex
    flex-wrap
    justify-center
    items-center
    gap-y-6
    overflow-hidden
    w-full
    text-violet-800
`

export const OSCard = tw.div`
    relative
    flex
    justify-center
    items-center
    flex-col
    w-full
    h-48
    px-4
`
    
export const CardBody = tw.div`
    w-full
    h-full
    max-w-md
    flex
    flex-col
    justify-center
    items-center
    p-3
    rounded-2xl
    border
    bg-gray-200
`

export const TitleWrap = tw.div`
    py-2
    min-h-[4.35rem]
    sm:min-h-[5rem]
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
    text-[1.25rem]
    flex
    justify-center
    items-center
    gap-3
    w-full
    px-2
`

export const SectionTitle = tw.h2`
    my-10
    text-4xl
    font-medium
    text-center
    underline
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