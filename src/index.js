import React from 'react'
import ReactDOM from 'react-dom'
import { MemoryRouter, Routes, Route } from "react-router-dom"
import App from './App'
import { MobileOverview } from './components/mobile/views/overview'
import { MobileProjects } from './components/mobile/views/projects'
import { MobileAbout } from './components/mobile/views/about'
import { MobileEmail } from './components/mobile/views/email'
import reportWebVitals from './reportWebVitals'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <MemoryRouter initialEntries={['/overview']}>
      <Routes>
          <Route path='/' element={<App/>}>
            <Route path='overview' element={<MobileOverview />} />
            <Route path='projects' element={<MobileProjects />} />
            <Route path='about' element={<MobileAbout />} />
            <Route path='email' element={<MobileEmail />} />
          </Route>
      </Routes>
    </MemoryRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
