import { useState, useRef, useEffect } from "react";
import { Outlet } from "react-router-dom";
// import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Resume from "./components/resume";
import {
  ResumeContext,
  ContactWrapperContext,
  OSWrapperContext,
} from "./contexts";
import { AppContainer, ContentWrap } from "./components/styled/app";

function App() {
  const [isResume, setIsResume] = useState<boolean>(false);
  const [osElem, setOSElem] = useState<HTMLDivElement | null>(null);
  const [contactElem, setContactElem] = useState<HTMLDivElement | null>(null);
  // const { scrollYProgress } = useScroll();
  // const scaleX = useSpring(scrollYProgress, {
  //   stiffness: 300,
  //   damping: 30,
  //   restDelta: 0.001,
  // });

  const osRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (osRef.current) setOSElem(() => osRef.current);

    if (contactRef.current) setContactElem(() => contactRef.current);
  }, [osRef.current, contactRef.current]);

  return (
    <AppContainer className="app">
      {/* <motion.div className="progress-bar" style={{ scaleX }} /> */}
      <ResumeContext.Provider value={{ isResume, setIsResume }}>
        <ContactWrapperContext.Provider value={{ element: contactElem }}>
          <OSWrapperContext.Provider value={{ element: osElem }}>
            <Navbar />
            <ContentWrap style={{ height: `${window.innerHeight - 104}px` }}>
              <Outlet />
            </ContentWrap>
            <Footer />
            <Resume />
          </OSWrapperContext.Provider>
        </ContactWrapperContext.Provider>
      </ResumeContext.Provider>
    </AppContainer>
  );
}

export default App;
