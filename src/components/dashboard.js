import React from 'react'
import { Image, Card } from 'antd'
import { DashContainer, DashImage, DashText, DashName, DashTitle, DashSocialWrapper } from './styled'
import { LinkedinOutlined, TwitterOutlined, GithubOutlined } from '@ant-design/icons'

const Dashboard = () => {
    return (
        <DashContainer>
            <Card>
                <DashImage span={8}>
                    <Image width={225} height={225} src='https://avatars.githubusercontent.com/u/11478868?v=4' alt='me'/>
                </DashImage>
                <DashText span={16}>
                    <DashName>Dwight Smith</DashName>
                    <DashTitle level={3}>Fullstack Engineer</DashTitle>
                    <DashSocialWrapper>
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