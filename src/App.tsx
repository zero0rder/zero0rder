import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/header/navbar";
import Footer from "./components/layout/footer";
import Resume from "./components/shared/resume";
import { ResumeContext } from "./contexts";
import { AppContainer, ContentWrap } from "./components/styled/app";

function App() {
  const [isResume, setIsResume] = useState<boolean>(false);
  return (
    <AppContainer className="app">
      <ResumeContext.Provider value={{ isResume, setIsResume }}>
        <Navbar />
        <ContentWrap style={{ height: `${window.innerHeight - 104}px` }}>
          <Outlet />
        </ContentWrap>
        <Footer />
        <Resume />
      </ResumeContext.Provider>
    </AppContainer>
  );
}

export default App;
