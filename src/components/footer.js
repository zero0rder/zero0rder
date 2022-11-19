import React from 'react'
import { FooterContainer } from './styled'
import { CopyrightOutlined } from '@ant-design/icons'

const Footer = () => {
    return (
      <FooterContainer>
        <span>Zero0rder</span>
        <span>All Rights Reserved <CopyrightOutlined /> {new Date().getFullYear()}</span>
      </FooterContainer>
    )
}

export default Footer