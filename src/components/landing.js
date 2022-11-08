import React from 'react'
import Dashboard from './dashboard'
import { LandingContainer } from './styled'
import Archives from './archives'

const Landing = () => {
    return (
        <LandingContainer span={24}>
            <Dashboard/>
            <Archives isLanding={true}/>
        </LandingContainer>
    )
}

export default Landing