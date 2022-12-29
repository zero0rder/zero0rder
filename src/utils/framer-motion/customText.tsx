import React from 'react'
import { motion } from 'framer-motion'
import { textContainer, textVariant2 } from './motion'

interface TypingtextProps {
    title: string;
}

export const TypingText: React.FC<TypingtextProps> = ({ title }) => (
    <motion.p
        variants={textContainer}
        initial='hidden'
        whileInView='show'>
        {title.split('').map((letter, index) => (
            <motion.span key={index} variants={textVariant2}>
                {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
        ))}
    </motion.p>
)

export const TitleText: React.FC<TypingtextProps> = ({ title }) => (
    <motion.h2
      variants={textVariant2}
      initial="hidden"
      whileInView="show">
      {title}
    </motion.h2>
)