import React from 'react'
import { Outlet } from 'react-router-dom'
import { Grid } from 'antd'
import { AppContainer } from './styled'
import Header from './components/header'
import Footer from './components/footer'
const { useBreakpoint } = Grid

const App = () => {
  const screens = useBreakpoint()
  return (
      <AppContainer>
        <Header viewports={screens}/>
        <Outlet context={screens}/>
        <Footer/>
      </AppContainer>
    )
}

export default App