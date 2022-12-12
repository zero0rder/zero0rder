import tw from 'twin.macro'

export const Header = tw.header`
    flex
    justify-between
    items-center
    py-1
    px-2
    sticky
    top-0
    z-50
    bg-purple-600
`

export const ImageWrap = tw.span`
    w-10
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
    text-3xl
    cursor-pointer
`

export const NavTitle = tw.span`
    font-medium
    text-[1.2rem]
`