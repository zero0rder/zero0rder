import React from 'react'
import { useOutletContext } from 'react-router-dom'
import { Image, Card } from 'antd'
import { DashContainer, DashImage, DashText, DashName, DashTitle, DashSocialWrapper } from './styled'
import { LinkedinOutlined, TwitterOutlined, GithubOutlined } from '@ant-design/icons'

const Dashboard = () => {
    const screens = useOutletContext()
    return (
        <DashContainer vpmd={`${screens.md}`}>
            <Card>
                <DashImage vplg={`${screens.lg}`} xs={24} sm={24} md={8}>
                    <Image width={screens.md ? 225 : 220} src='https://avatars.githubusercontent.com/u/11478868?v=4' alt='me'/>
                </DashImage>
                <DashText vplg={`${screens.lg}`} xs={24} sm={24} md={16}>
                    <DashName vplg={`${screens.lg}`} vpmd={`${screens.md}`}>Dwight Smith</DashName>
                    <DashTitle vpmd={`${screens.md}`} level={3}>Fullstack Engineer</DashTitle>
                    <DashSocialWrapper vpmd={`${screens.md}`}>
                        <GithubOutlined />
                        <LinkedinOutlined />
                        <TwitterOutlined />
                    </DashSocialWrapper>
                </DashText>
            </Card>
        </DashContainer>
    )
}

export default Dashboard