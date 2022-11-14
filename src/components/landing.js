import React from 'react'
import Dashboard from './dashboard'
import { LandingContainer } from './styled'
import OpenSource from './opensource'

const Landing = () => {
    return (
        <LandingContainer span={24}>
            <Dashboard/>
            <OpenSource isLanding={true}/>
        </LandingContainer>
    )
}

export default Landing