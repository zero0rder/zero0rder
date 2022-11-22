import React from 'react'
import { useOutletContext } from 'react-router-dom'
import { AboutContainer, 
AboutSocialWrapper,
AboutDetailsCard, 
TimelineWrapper, 
DetailsContent, 
AboutMeta, 
AboutMetaCol, 
AboutMetaWrapper,
ExpName,
ExpTitle,
ExpDate,
ExpDesc,
TimelineTitle } from './styled'
import { LinkedinOutlined, TwitterOutlined, GithubOutlined, EnvironmentOutlined, LaptopOutlined, RiseOutlined, HistoryOutlined } from '@ant-design/icons'
import { Divider, Timeline, Typography } from 'antd'
const { Text } = Typography

const About = () => {
    const screens = useOutletContext()
    return (
       <AboutContainer vpmd={`${screens.md}`} span={24}>
            <AboutSocialWrapper>
                <a href='https://github.com/zero0rder/zero0rder'><GithubOutlined /></a>
                <a href='https://www.linkedin.com/in/elismth'><LinkedinOutlined /></a>
                <a href='https://twitter.com/zero0rder'><TwitterOutlined /></a>
            </AboutSocialWrapper>
            <Divider/>
            <AboutDetailsCard>
                <DetailsContent vpmd={`${screens.md}`}>
                    <AboutMeta vpmd={`${screens.md}`}>
                        <AboutMetaWrapper>
                            <AboutMetaCol span={12}>
                                <LaptopOutlined />
                                <Text>Software Engineer</Text>
                            </AboutMetaCol>
                            <AboutMetaCol span={12}>
                                <EnvironmentOutlined />
                                <Text>New York, NY</Text>
                            </AboutMetaCol>
                            <AboutMetaCol span={12}>
                                <RiseOutlined />
                                <Text>Experience: 5 Years</Text>
                            </AboutMetaCol>
                        </AboutMetaWrapper>
                    </AboutMeta>
                    <Divider type={screens.md ? 'vertical' : 'horizontal'}/>
                    <TimelineWrapper vpmd={`${screens.md}`}>
                        <TimelineTitle>Experience</TimelineTitle>
                        <Timeline mode='alternate'>
                            <Timeline.Item dot={<HistoryOutlined style={{ background: 'transparent' }}/>}>
                                <ExpName>Gogotech</ExpName>
                                <br/>
                                <ExpTitle>Software Developer</ExpTitle>
                                <br/>
                                <ExpDate>2017 - 2022</ExpDate>
                                <ExpDesc>
                                    Launched core features for high traffic website using React.js, TypeScript and other front-end technologies 
                                    while providing code reviews, QA testing and deployment support across transnational teams
                                </ExpDesc>
                            </Timeline.Item>
                            <Timeline.Item dot={<HistoryOutlined style={{ background: 'transparent' }}/>}>
                                <ExpName>Focus Camera</ExpName>
                                <br/>
                                <ExpTitle>Ecommerce Manager</ExpTitle>
                                <br/>
                                <ExpDate>2015 - 2017</ExpDate>
                                <ExpDesc>
                                    Produced and managed online content for various e-commerce platforms by providing HTML and CSS support. Collaborating 
                                    closely with software developers and designers to deliver quality experiences for end users
                                </ExpDesc>
                            </Timeline.Item>
                        </Timeline>
                    </TimelineWrapper>
                </DetailsContent>
            </AboutDetailsCard>
       </AboutContainer>
    )
}

export default About