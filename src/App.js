import React from 'react'
import { Outlet } from 'react-router-dom'
import { AppContainer } from './styled'
import Header from './components/header'
import Footer from './components/footer'

const App = () => {
  return (
      <AppContainer>
        <Header/>
        <Outlet/>
        <Footer/>
      </AppContainer>
    )
}

export default App