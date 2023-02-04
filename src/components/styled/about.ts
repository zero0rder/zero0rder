import tw from 'twin.macro'

export const AboutContainer = tw.div`
    flex
    flex-col
    p-6
    gap-8
    h-full
`

export const AboutMe = tw.section`
    flex
    italic
    gap-x-8
    justify-center
    items-center
    grow
`

export const AboutText = tw.p`
    w-full
    md:w-8/12
    p-2
`

export const AboutCards = tw.div`
    flex
    gap-4
    sm:gap-12
    flex-wrap
    justify-center
    items-center
    grow
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
    sm:w-1/2
    md:w-1/4
    border
    min-h-[15rem]
    md:max-w-[17rem]
    p-3
    gap-y-4
    rounded-2xl
    shadow-lg
    border-gray-300
    shadow-gray-300
    bg-white
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