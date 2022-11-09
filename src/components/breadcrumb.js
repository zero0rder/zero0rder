import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import { HomeOutlined } from '@ant-design/icons'
import { Breadcrumb } from 'antd'

const BreadCrumb = () => {
    const location = useLocation()
    const pathNames = location.pathname.split('/').filter(i => i)
    const extraBreadcrumbItems = pathNames.map((_, index) => {
        const url = `/${pathNames.slice(0, index + 1).join('/')}`
        return (
          <Breadcrumb.Item key={url}>
            <Link to={url}>{ pathNames }</Link>
          </Breadcrumb.Item>
        )
    })
    const breadcrumbItems = [
        <Breadcrumb.Item key='home'>
            <Link to='/'>
                <HomeOutlined/>
            </Link>
        </Breadcrumb.Item>,
    ].concat(extraBreadcrumbItems)
    
    return (
        <Breadcrumb>{ breadcrumbItems }</Breadcrumb> 
    )
}

export default BreadCrumb