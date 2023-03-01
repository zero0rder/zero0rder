import tw from 'twin.macro'
import { motion } from 'framer-motion'

export const ListText = tw.span`
  font-medium
  text-gray-200
  font-mono
`

export const ListItem = tw(motion.li)`
  cursor-pointer
`

