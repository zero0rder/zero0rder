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
    w-8/12
    p-2
`

export const AboutCards = tw.div`
    flex
    gap-12
    flex-wrap
    justify-center
    items-center
    grow
    overflow-auto
`

export const AboutAnchors = tw.a`
    underline
    text-emerald-300
`

export const CardContainer = tw.div`
    w-full
    sm:w-1/2
    md:w-1/4
    border
    min-h-[15rem]
    max-w-[17rem]
    p-4
    rounded-2xl
    shadow-lg
    border-emerald-300
    shadow-emerald-300
`

export const CardTitle = tw.h3`
    underline
    font-medium
    mb-2
    text-xl
    text-emerald-300
`

export const CardList = tw.ul`
    flex
    flex-wrap
    gap-[0.25rem_0.75rem]
`

export const CardItem = tw.li`

`