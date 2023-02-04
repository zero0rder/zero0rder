import tw from 'twin.macro'

export const CarouselWrap = tw.div`
    relative
    border-b
    pb-8
    // md:pb-8
    grow
    border-gray-300
`

export const CardWrap = tw.div` //row
    
`

export const CardUL = tw.ul` //container
    flex
    justify-center
    items-center
    gap-x-4
    // relative
    // h-24
    h-auto
    // overflow-hidden
    flex-nowrap
`

export const CardContent = tw.li`
    w-1/2
    flex
    flex-col
    // border
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
    text-[0.75rem]
    [line-height: 1.2rem]
    h-32
`