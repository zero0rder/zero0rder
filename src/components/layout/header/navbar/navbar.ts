import tw from 'twin.macro'
import { motion } from 'framer-motion'

export const Header = tw.header`
    absolute
    right-0
    text-gray-200
    z-10
    flex
    justify-between
    items-center
    pt-6
    px-4
    md:px-8
`
export const NavBackground = tw(motion.div)`
    flex
    justify-center
    items-center
    absolute
    top-24
    h-24
    w-36
    border-l-2
    border-emerald-300
    backdrop-blur-sm 
    bg-white/10
`

export const NavList = tw(motion.ul)`
    flex
    flex-col
    justify-center
    gap-y-[0.2rem]
    pl-2
    absolute
    w-full
    h-full
    text-xl
`

export const TabsList = tw.ul`
    hidden
    sm:flex
    justify-center
    items-center
    gap-x-[0.65rem]
    font-medium 
    text-lg
    font-mono
`
export const TabsListItem = tw.li`
    pb-[0.15rem]
    bg-[linear-gradient(#6ee7b7, #6ee7b7)]
    bg-[length:0%_0.1rem]
    [background-position-y: 100%]
    [background-position-x: 0%]
    bg-no-repeat
    transition-[background-size_0.2s_ease-in-out]
    [transition-duration: 0.2s]
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