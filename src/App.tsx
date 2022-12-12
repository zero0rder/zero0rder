import { useState, useRef, useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/navbar'
import Hero from './components/hero'
import OpenSource from './components/opensource'
import Contact from './components/contact'
import Footer from './components/footer'
import Resume from './components/resume'
import { ResumeContext, ContactWrapperContext, OSWrapperContext } from './contexts'
import { AppContainer, ContentWrap } from './components/styled/app'
import ScrollTopBtn from './components/scrollTopBtn'

function App() {
  const [isResume, setIsResume] = useState<boolean>(false)
  const [osElem, setOSElem] = useState<HTMLDivElement | null>(null)
  const [contactElem, setContactElem] = useState<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 30,
    restDelta: 0.001
  })
  
  const osRef = useRef<HTMLDivElement | null>(null)
  const contactRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if(osRef.current)
      setOSElem(() => osRef.current)

    if(contactRef.current)
      setContactElem(() => contactRef.current)

  },[osRef.current, contactRef.current])

  return (
    <AppContainer className='app'>
      <motion.div className='progress-bar' style={{ scaleX }}/>
      <ResumeContext.Provider value={{isResume, setIsResume}}>
        <ContactWrapperContext.Provider value={{element: contactElem}}>
          <OSWrapperContext.Provider value={{element: osElem}}>
            <Navbar/>
            <ContentWrap>
              <Hero/>
              <OpenSource ref={osRef}/>
              <Contact ref={contactRef}/>
            </ContentWrap>
            <Footer/>
            <Resume/>
          </OSWrapperContext.Provider>
        </ContactWrapperContext.Provider>
      </ResumeContext.Provider>
      <ScrollTopBtn/>
    </AppContainer>
  )
}

export default App