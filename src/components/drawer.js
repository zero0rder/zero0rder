import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDateTimeHook } from '../hooks/useDateTime'
import { HeaderDrawer, DrawerMenu } from './styled'
import { HomeOutlined, 
    BranchesOutlined, 
    CommentOutlined,
    ReadOutlined,
    AppstoreOutlined,
    UserOutlined,
    FolderOpenOutlined,
    LinkedinOutlined,
    TwitterOutlined ,
    MailOutlined } from '@ant-design/icons'

const menuItems = [
    getItem('Home', '/', <HomeOutlined />),
    getItem('About', 'about', <UserOutlined />),
    getItem('Archives', 'archives', <FolderOpenOutlined />),
    getItem('Services', 'services', <AppstoreOutlined />, [getItem('Misc', 'misc')]),
    getItem('Blog', 'blog', <ReadOutlined />),
    getItem('Contact', 'contact', <CommentOutlined />, [getItem('Email', 'email', <MailOutlined />), 
    getItem(<a href='https://www.linkedin.com/feed/' target='_blank' rel='noopener noreferrer'>LinkedIn</a>, null, <LinkedinOutlined />),
    getItem(<a href='https://twitter.com/zero0rder' target='_blank' rel='noopener noreferrer'>Twitter</a>, null, <TwitterOutlined />)]),
    getItem(<a href='https://github.com/zero0rder/zero0rder' target='_blank' rel='noopener noreferrer'>Contribute</a>, null, <BranchesOutlined />),
]

const Drawer = ({ isOpen, setOpen, viewports }) => {
    const onClose = () => setOpen(false)
    const navigate = useNavigate()
    const datetime = useDateTimeHook()
    const handleClick = (url) => {
        if(!url.startsWith('tmp')){ navigate(url) }
        onClose()
    }
    
    return (
        <HeaderDrawer
            placement='left' 
            onClose={onClose} 
            open={isOpen} 
            width={viewports.xl || viewports.xxl  ? '20%' 
            : viewports.md || viewports.lg ? '35%' 
            : viewports.xs || viewports.sm ? '70%' 
            : '50%'}
            title={datetime}>
            <DrawerMenu 
            mode='inline'
            items={menuItems}
            onClick={e => handleClick(e.key)}/>
        </HeaderDrawer>
    )
}

export default Drawer

function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    }
}