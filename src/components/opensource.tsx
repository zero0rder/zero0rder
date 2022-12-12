import React, { useRef, forwardRef } from 'react'
import { motion } from 'framer-motion'
import { useFetch } from '../hooks/useFetch'
import { FiLink } from 'react-icons/fi'
import { AiFillGithub } from 'react-icons/ai'
import { fadeIn } from '../utils/framer-motion/motion'
import { OSContainer, 
SectionTitle, 
CardWrapper, 
OSCard, 
CardBody, 
TitleWrap, 
CardTitle, 
CardText, 
CardData,
SeeMoreLessWrapper,
SeeMoreLessButton } from './styled/opensource'

interface OpenSourceProps {
    ref: React.Ref<HTMLDivElement | null>;
}

interface RepositoryProps {
    id: number;
    name: string;
    description: string;
    html_url: string;
    homepage: string;
}

//todo: fix type error
// @ts-ignore 
const OpenSource: React.FC<OpenSourceProps> = forwardRef(({}, ref: React.Ref<HTMLDivElement>) => {
    const repos = useFetch<RepositoryProps[]>(`${import.meta.env.VITE_REPO_URL}/repos?sort=updated&per_page=10&page=1`)
    const wrapperRef = useRef<HTMLDivElement | null>(null)
    const buttonRef = useRef<HTMLButtonElement | null>(null)
    const handleSeeMoreLess = () => {
        const wrapElem = wrapperRef.current,
        btnElem = buttonRef.current

        if(wrapElem !== null){
            wrapElem.classList.toggle('see-more')

            if(btnElem !== null){
                if(wrapElem.classList.contains('see-more')){
                    btnElem.innerText = 'see less'
                } else {
                    btnElem.innerText = 'see more'
                }
            }
        }
    }

    return (
        <OSContainer ref={ref}>
            <SectionTitle>Open Source</SectionTitle>
            <CardWrapper ref={wrapperRef} className='card-wrapper'>
                { repos && repos.map((r, i) => (
                    <motion.div 
                        variants={fadeIn('right', 'spring', i * 0.20, 0.65)}
                        initial='hidden'
                        whileInView='show'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        key={r.id}
                        className='motion-div'>
                        <OSCard>
                            <CardBody>
                                <TitleWrap>
                                    <CardTitle>{r.name.toLowerCase()}</CardTitle>
                                </TitleWrap>
                                <CardText>{r.description}</CardText>
                                <CardData>
                                    <span>
                                        <a href={r.html_url} target='_blank' rel='noopener noreferrer'>
                                            <AiFillGithub style={{ display: 'inline'}}/>
                                        </a>
                                    </span>
                                    <span>
                                        <a href={r.homepage ?? ''} target='_blank' rel='noopener noreferrer'>
                                            <FiLink/>
                                        </a>
                                    </span>
                                </CardData>
                            </CardBody>
                        </OSCard>
                    </motion.div>
                ))}
            </CardWrapper>
            <SeeMoreLessWrapper className='read-more-less'><SeeMoreLessButton ref={buttonRef} onClick={() => handleSeeMoreLess()}>see more</SeeMoreLessButton></SeeMoreLessWrapper>
        </OSContainer>
    )
})

export default OpenSource