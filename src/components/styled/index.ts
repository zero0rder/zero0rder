import tw from 'twin.macro'

export const Overlay = tw.div`
fixed
block
w-full
h-full
top-0
left-0
right-0
bottom-0
bg-[rgba(0,0,0,0.5)]
cursor-pointer
z-50
`

export const ScrollBtn = tw.div`
  fixed
  rounded-full
  bottom-32
  right-11
  h-12
  w-12
  flex
  items-center
  justify-center
  text-3xl
  border-2
  text-violet-800
  border-violet-800
  bg-emerald-300
  cursor-pointer
  shadow-xl
`