import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter, Routes, Route } from "react-router-dom";
import App from './App';
import { MobileOverview } from './components/mobile/views/overview';
import { MobileProjects } from './components/mobile/views/projects';
import { MobileAbout } from './components/mobile/views/about';
import { MobileEmail } from './components/mobile/views/email';
import AboutIntro from '../src/components/desktop/modals/pages/intro';
import AboutHistory from '../src/components/desktop/modals/pages/history';
import AboutSkill from '../src/components/desktop/modals/pages/skill';
import AboutWork from '../src/components/desktop/modals/pages/work';
import reportWebVitals from './reportWebVitals';
import './index.css';

export const viewportQuery = window.matchMedia('(max-width: 448px)');
export const isMobileViewport = viewportQuery.matches;

const mobileRoutes = (
  <>
    <Route path='overview' element={<MobileOverview />} />
    <Route path='projects' element={<MobileProjects />} />
    <Route path='about' element={<MobileAbout />} />
    <Route path='email' element={<MobileEmail />} />
  </>
);

const desktopRoutes = (
  <> 
      <Route path='intro' element={<AboutIntro />} />
      <Route path='history' element={<AboutHistory />} />
      <Route path='skills' element={<AboutSkill />} />
      <Route path='work' element={<AboutWork />} />
  </>
);

ReactDOM.render(
  <React.StrictMode>
    <MemoryRouter initialEntries={[isMobileViewport ? '/overview': '/intro']}>
      <Routes>
          <Route path='/' element={<App/>}>
            { isMobileViewport ? mobileRoutes : desktopRoutes }
          </Route>
      </Routes>
    </MemoryRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
