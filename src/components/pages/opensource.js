import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useOutletContext } from 'react-router-dom'
import { OpenSourceContainer, CardBodyContainer } from './styled'
import { Card, Col, Typography, Tag, Spin, Badge } from 'antd'
import { EditOutlined, EllipsisOutlined, LinkOutlined } from '@ant-design/icons'
import { tagDict } from '../../utils/repos'
const {Title, Paragraph} = Typography

const OpenSource = ({ isLanding }) => {
    const repos = useFetch(`${process.env.REACT_APP_URI}/repos?sort=updated${ isLanding ? '&per_page=12&page=1' : '' }`)
    const screens = useOutletContext()
    if(!repos) return <Spin className='app-spinner' size='large'/>
    
    return (
        <OpenSourceContainer vpmd={`${screens.md}`} gutter={[{ md: 14 }, 16]} landing={`${isLanding}`}>
            { repos.map((r, i) => (
                <Col key={i} xs={24} sm={24} md={12} lg={8}>
                    <Card
                    extra={<CardHeader site={r.homepage}/>}
                    actions={[
                            <a href={r.homepage ?? r.html_url} target='_blank' rel='noopener noreferrer'><LinkOutlined key='link'/></a>,
                            <a href={r.html_url} target='_blank' rel='noopener noreferrer'><EditOutlined key='contribute'/></a>,
                            <EllipsisOutlined key='more'/>
                        ]}>
                    <CardBody repo={r}/>
                    </Card>
                </Col>
            ))}
        </OpenSourceContainer>
    )
}

export default OpenSource

const CardHeader = ({ site }) => (
    <>
        { site 
        ? <Badge status='processing' color='green' /> 
        : <Badge status='processing' color='red' /> }
        <span>{ site ? 'live' : 'offline' }</span>
    </>
)

const CardBody = ({ repo }) => (
    <CardBodyContainer>
        <section>
            <Title>{ repo.name }</Title>
            <Paragraph italic>{ repo.description }</Paragraph>
        </section>
        <div>
            { repo?.topics.map((tag, i) => <Tag key={i} color={tagDict.get(tag) ?? 'green'}>{ tag }</Tag>) }
        </div>
    </CardBodyContainer>
)