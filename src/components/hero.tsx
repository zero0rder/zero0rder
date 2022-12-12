import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { ImArrowDown2 } from 'react-icons/im'
import { RxCaretRight } from 'react-icons/rx'
import { staggerContainer, textVariant } from '../utils/framer-motion/motion'
import { useScrollTo } from '../hooks/useScrollTo'
import { ResumeContext, ContactWrapperContext, OSWrapperContext } from '../contexts'
import { HeroContainer, 
LeftSection, 
LeftContent, 
HeroName, 
InfoList, 
InfoListItem, 
ArrowWrap, 
RightSection, 
RightPanel, 
RightPanelButton } from './styled/hero'

interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}) => {
    const scales = {hover: { scale: 1.05}, tap: {scale: 0.95}}
    const { setIsResume } = useContext(ResumeContext)
    const { element: contactElem } = useContext(ContactWrapperContext)
    const { element: osElem } = useContext(OSWrapperContext)
    const { moveTo } = useScrollTo()

    return (
        <motion.div
            variants={staggerContainer()}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.25 }}>
            <HeroContainer style={{ height: `${window.innerHeight}px` }}>
                <LeftSection>
                    <LeftContent>
                        <motion.div
                            variants={textVariant(0.6)}>
                            <HeroName>Dwight Smith.</HeroName>
                        </motion.div>
                        <motion.div
                            variants={textVariant(0.75)}
                            className='infolist-div'>
                                <InfoList>
                                    <InfoListItem>
                                        <RxCaretRight/>
                                        Software Engineer
                                    </InfoListItem>
                                    <InfoListItem>
                                        <RxCaretRight/>
                                        Open Source Contributor
                                    </InfoListItem>
                                    <InfoListItem>
                                        <RxCaretRight/>
                                        New York, NY
                                    </InfoListItem>
                                </InfoList>
                        </motion.div>
                    </LeftContent>
                </LeftSection>
                <motion.div
                    variants={textVariant(0.75, 0)}>
                    <ArrowWrap className='arrow'>
                        <ImArrowDown2/>  
                    </ArrowWrap>
                </motion.div>
                <RightSection>
                    <RightPanel>
                        <motion.div
                            whileHover={scales.hover}
                            whileTap={scales.tap}>
                            <RightPanelButton onClick={() => setIsResume(true)}>Resume</RightPanelButton>    
                        </motion.div>
                        <motion.div
                             whileHover={scales.hover}
                             whileTap={scales.tap}>
                            <RightPanelButton onClick={() => moveTo(osElem?.offsetTop ?? 0)}>Open Source</RightPanelButton>    
                        </motion.div>
                        <motion.div
                             whileHover={scales.hover}
                             whileTap={scales.tap}>
                            <RightPanelButton onClick={() => moveTo(contactElem?.offsetTop ?? 0)}>Contact</RightPanelButton>    
                        </motion.div>
                    </RightPanel>
                </RightSection>
            </HeroContainer>
        </motion.div>
    )
}

export default Hero