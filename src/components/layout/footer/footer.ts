import tw from 'twin.macro'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

export const FooterWrap = tw.footer`
    absolute
    w-full
    bottom-0
    h-10
    flex
    justify-end
    items-center
    py-2
    px-4
    md:px-8
`

export const SocialWrap = tw.div`
    flex
    justify-center
    items-center
    gap-1
    font-medium
    text-gray-200
    text-xl
    z-10
`

export const AnchorWrap = tw.a`
    cursor-pointer
    hover:text-emerald-300
`

export const LinkedInIcon = tw(AiFillLinkedin)``
export const GithubIcon = tw(AiFillGithub)``
