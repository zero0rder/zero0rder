import tw from 'twin.macro'

export const AboutContainer = tw.div`
    flex
    flex-col
    justify-center
    pt-24
    pb-10
    md:px-8
    gap-8
    h-full
`

export const AboutMe = tw.section`
    flex
    italic
    justify-center
    items-center
    font-mono
    border-b
    pb-4
`

export const AboutText = tw.p`
    w-full
    text-[1rem]
    md:w-3/4
    p-2
    text-center
    font-normal
`

export const AboutCards = tw.div`
    flex
    gap-4
    sm:gap-8
    flex-wrap
    justify-center
    items-center
    overflow-auto
    pb-4
`

export const AboutAnchors = tw.a`
    underline
    text-sky-400
`

export const CardContainer = tw.div`
    flex
    flex-col
    w-full
    basis-60
    border
    min-h-[13rem]
    p-3
    gap-y-4
    rounded-2xl
`

export const CardTitle = tw.h3`
    underline
    font-medium
    text-xl
    text-center
`

export const CardList = tw.ul`
    flex
    justify-center
    items-center
    flex-wrap
    gap-3
`

export const CardItem = tw.li`
    flex
    flex-col
    text-2xl
    w-1/4
`
export const CardItemTitle = tw.span`
    text-[.75rem]
    font-medium
    truncate
`