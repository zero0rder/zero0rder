import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import App from './app'
import Landing from './components/landing'
import OpenSource from './components/pages/opensource'
import Blog from './components/pages/blog'
import About from './components/pages/about'
import Email from './components/pages/email'
import './index.less'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
          <Route path='/' element={<App/>}>
            <Route index element={<Landing/>}/>
            <Route path='/opensource' element={<OpenSource/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/email' element={<Email/>}/>
          </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)