import React from 'react'
import Dashboard from './feature/dashboard'
import OpenSource from './pages/opensource'
import { LandingContainer } from './styled'

const Landing = () => {
    return (
        <LandingContainer span={24}>
            <Dashboard/>
            <OpenSource isLanding={true}/>
        </LandingContainer>
    )
}

export default Landing