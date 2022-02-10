import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import LandingPage from './components/pages/landingPage';
import Projects from './components/pages/projects';
import AboutPage from './components/pages/about';
import ContactPage from './components/pages/contact';
import reportWebVitals from './reportWebVitals';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<App/>}>
            <Route index element={<LandingPage />} />
            <Route path='projects' element={<Projects />} />
            <Route path='about' element={<AboutPage />} />
            <Route path='contact' element={<ContactPage />} />
          </Route>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
