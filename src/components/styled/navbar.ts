import tw from 'twin.macro'

export const Header = tw.header`
    h-16
    flex
    justify-between
    items-center
    py-4
    px-4
    md:px-8
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
    bg-[linear-gradient(#000, #000)]
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
    border-black
`

export const BurgerWrap = tw.span`
    inline
    text-3xl
    cursor-pointer
    w-[15%]
    sm:hidden
`

export const NavTitle = tw.span`
    font-medium
    text-[1.2rem]
`

export const SocialIcons = tw.div`
    flex
    justify-center
    items-center
    text-3xl
    gap-x-2
`

export const NavSliderHeader = tw.div`
    w-full
    flex
    justify-between
    items-center
    p-3
    text-3xl
    fixed
`
export const NavSliderLeftContent = tw.div`
    w-2/5
`

export const LeftNavBarContent = tw.div`
    hidden
    w-1/4
    sm:flex
    sm:w-[15%]
`