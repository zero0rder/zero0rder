import tw from 'twin.macro'

export const HeroContainer = tw.div`
    relative
    max-w-[1150px]
    m-auto
    flex
    flex-col
    sm:flex-row
    justify-start
    sm:justify-center
    items-center
    px-4
    md:px-8
`

export const ArrowWrap = tw.div`
    absolute
    text-2xl
    bottom-20
    left-1/2
    text-emerald-300
`

export const HeroName = tw.h1`
    text-6xl
    sm:text-8xl
    lg:text-9xl
    text-center
    sm:text-left
    tracking-[0.25rem]
`

export const LeftSection = tw.div`
    w-full
    pt-12
    sm:w-[55%]
    md:w-3/5
    p-6
    md:p-8
`

export const LeftContent = tw.div``

export const RightSection = tw.div`
    sm:w-[45%]
    md:w-2/5
    pt-0
    p-6
    md:p-8
`

export const RightPanel = tw.div`
    flex
    flex-col
    gap-4
    sm:gap-8
    border
    border-emerald-300
    text-2xl
    p-5
    md:p-8
    rounded-2xl
    shadow-2xl
    shadow-emerald-300
`

export const RightPanelButton = tw.button`
    w-full
    p-3
    sm:p-4
    rounded-2xl
    font-medium
    border
    bg-gray-200
    text-violet-800
    hover:bg-gradient-to-br from-violet-800 to-fuchsia-700
    hover:text-emerald-300
    hover:border-emerald-300
    text-[1.25rem]
    md:text-2xl
`

export const InfoList = tw.ul`
    text-[1.25rem]
    md:text-[1.75rem]
    leading-10
    my-8
`

export const InfoListItem = tw.li`
    italic
    justify-center
    sm:justify-start
`