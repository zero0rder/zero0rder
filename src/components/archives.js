import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { ArchivesContainer, CardBodyContainer } from './styled'
import { Card, Col, Typography, Tag, Spin } from 'antd'
import { EditOutlined, EllipsisOutlined, LinkOutlined, GlobalOutlined } from '@ant-design/icons'
import { tagColors } from '../utils/repos'
const {Title, Paragraph} = Typography

const Archives = () => {
    const repos = useFetch(`${process.env.REACT_APP_URI}/repos?sort=updated&per_page=10&page=1`)
    if(!repos) return <Spin className='app-spinner' size='large'/>

    return (
        <ArchivesContainer gutter={[10, 12]}>
            { repos.map((r, i) => (
                <Col key={i} span={8}>
                    <Card
                    extra={<CardHeader/>}
                    actions={footerTabs}>
                    <CardBody repo={r}/>
                    </Card>
                </Col>
            ))}
        </ArchivesContainer>
    )
}

export default Archives

const footerTabs = [
    <LinkOutlined key='link'/>,
    <EditOutlined key='contribute'/>,
    <EllipsisOutlined key='more'/>
]

const CardHeader = () => {
    return (
        <>
            <GlobalOutlined/>
            <span>v1.2.5</span>
        </>
    )
}


const CardBody = ({ repo }) => {
    return (
        <CardBodyContainer>
            <section>
                <Title>{ repo.name }</Title>
                <Paragraph italic>{ repo.description }</Paragraph>
            </section>
            <div>
                { repo?.topics.map((tag, i) => <Tag key={i} color={tagColors[randomInt(0,tagColors.length-1)]}>{ tag }</Tag>) }
            </div>
        </CardBodyContainer>
    )
}

function randomInt(min, max){
    return (min + ~~(Math.random() * (max - min + 1)))
}