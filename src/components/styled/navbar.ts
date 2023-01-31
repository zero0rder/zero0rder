import tw from 'twin.macro'

export const Header = tw.header`
    h-16
    flex
    justify-between
    items-center
    py-4
    px-2
    top-0
    z-50
    bg-gray-900
`

export const TabsList = tw.ul`
    hidden
    sm:flex
    w-[70%]
    justify-center
    items-center
    gap-x-5 
    font-medium 
    text-[1.2rem]
`
export const TabsListItem = tw.li`
    bg-[linear-gradient(#6ee7b7, #6ee7b7)]
    bg-[length:0%_0.1rem]
    [background-position-y: 100%]
    [background-position-x: 0%]
    bg-no-repeat
    transition-[background-size_0.2s_ease-in-out]
    [transition-duration: 0.2s]
    pb-1
    cursor-pointer
    active:bg-[length:100%_0.1rem]
    focus:bg-[length:100%_0.1rem]
    hover:bg-[length:100%_0.1rem]
`

export const ParallaxWrap = tw.div`
    flex
    w-1/4
    sm:w-[15%]
`

export const Parallax = tw.div`
    m-0
    flex
    flex-nowrap
    [letter-spacing: -0.06rem]
    [line-height: 0.8rem]
    whitespace-nowrap
    overflow-hidden
`

export const ParallaxItem = tw.span`
    block
    mr-3
`

export const ImageContainer = tw.div`
    flex
    w-[15%]
    justify-end
`

export const ImageWrap = tw.span`
    w-8
    h-auto
    rounded-full
    overflow-hidden
    border
    border-gray-200
`

export const Image = tw.img`
    w-full
`

export const BurgerWrap = tw.span`
    inline
    text-3xl
    cursor-pointer
    z-[52]
    w-[15%]
    sm:hidden
`

export const NavTitle = tw.span`
    font-medium
    text-[1.2rem]
`