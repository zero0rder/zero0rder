import { useState, useEffect, useRef } from "react";
import {
  AppContainer,
  WorldMap,
  Canvas,
  DarkBkgd,
} from "./components/styled/app";
import Loading from "./components/loading/index";
import SpaceContainer from "./components/space";
import { ModalContext, ModalTypeContext } from "./contexts";
import Modal from "./components/modal";
import Navbar from "./components/layout/header/navbar";
import Footer from "./components/layout/footer";
import MainIcon from "./components/shared/icon";

const LOADING_TIME = 3500;

function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [modalType, setModalType] = useState<string | null>(null);
  const appRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    new SpaceContainer(appRef, canvasRef);
    setTimeout(() => {
      setIsLoading(() => false);
    }, LOADING_TIME);
  }, []);

  return (
    <ModalContext.Provider value={{ isModalOpen, setIsModalOpen }}>
      <ModalTypeContext.Provider value={{ modalType, setModalType }}>
        <AppContainer className="app">
          <Loading isLoading={isLoading} />
          <Navbar />
          <MainIcon />
          <WorldMap ref={appRef}>
            <Canvas ref={canvasRef} isModalOpen={isModalOpen} />
          </WorldMap>
          <DarkBkgd isModalOpen={isModalOpen} />
          <Footer />
          <Modal />
        </AppContainer>
      </ModalTypeContext.Provider>
    </ModalContext.Provider>
  );
}

export default App;
