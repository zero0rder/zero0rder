import tw from 'twin.macro'

export const HeroContainer = tw.div`
    relative
    max-w-[1150px]
    m-auto
    flex
    flex-col
    md:flex-row
    justify-start
    sm:justify-center
    items-center
    px-4
    md:px-8
    h-[inherit]
    overflow-auto
`

export const ArrowWrap = tw.div`
    absolute
    text-2xl
    bottom-20
    left-1/2
    text-emerald-300
`

export const HeroName = tw.h1`
    text-[4rem]
    [line-height: 5rem]
    text-center
    // sm:text-8xl
    // lg:text-9xl
    md:text-left
    tracking-[0.25rem]
    font-extrabold 
    text-transparent
    bg-clip-text 
    bg-gradient-to-r from-emerald-300 to-gray-900
    lg:text-9xl 
    lg:[line-height: 9rem]
    
`

export const LeftSection = tw.div`
    w-full
    pt-12
    // sm:w-[55%]
    p-6
    md:w-3/5
    md:p-2
    lg:p-8
`

export const LeftContent = tw.div``

export const RightSection = tw.div`
    p-6
    md:w-2/5
    md:p-2
    lg:p-8
`

export const RightPanel = tw.div`
    h-[28rem]
    flex
    flex-col
    gap-4
    sm:gap-8
    p-5
    md:p-8
    rounded-2xl
    shadow-2xl
    border
    border-emerald-300
    shadow-emerald-300
`

export const RightPanelTop = tw.div`
    flex
    justify-center
    items-center
    border-b
    pb-8
    gap-x-1
    text-2xl
`

export const RightPanelBottom = tw.div`
    flex
    justify-center
    items-center
    gap-x-1
    text-2xl
    grow
`

export const AnchorWrap = tw.a`
    cursor-pointer
    hover:text-emerald-300
`

export const RightPanelText = tw.p`
    text-sm
    border-b
    pb-8
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
    md:justify-start
`