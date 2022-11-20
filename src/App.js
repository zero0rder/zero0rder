import React from 'react'
import { Outlet } from 'react-router-dom'
import { Grid, BackTop } from 'antd'
import { AppContainer } from './styled'
import Header from './components/layout/header'
import Footer from './components/layout/footer'
const { useBreakpoint } = Grid

const App = () => {
  const screens = useBreakpoint()
  return (
      <AppContainer>
        <Header viewports={screens}/>
        <Outlet context={screens}/>
        <Footer/>
        <BackTop duration={650}/>
      </AppContainer>
    )
}

export default App