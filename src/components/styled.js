import styled from 'styled-components';
import { Row, Col, Typography, Layout, Drawer, Menu } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
const { Title } = Typography
const { Header, Footer } = Layout

export const LandingContainer = styled(Col)`
    display: flex;
    flex-direction: column;
    gap: 35px;
    padding-top: 1.75rem;
`;

export const DashContainer = styled(Row)`
    height: 260px;
    justify-content: center;

    > div.ant-card {
        width: 100%;
        margin: 0 2.3rem;

        > .ant-card-body {
            display: flex;
            flex-flow: row wrap;
            height: 100%;
        }
    }
`;

export const DashImage = styled(Col)`
    display: flex;
    justify-content: start;
    align-items: center;

    div.ant-image {
        margin: 1rem;
    }

    .ant-image-img, 
    .ant-image-mask  {
        border-radius: 50%;
    }
`;

export const DashText = styled(Col)`
    display: flex;
    flex-direction: column;
    justify-content: start;
`;

export const DashName = styled(Title)`
    &.ant-typography {
        font-size: 5rem;
        margin: 0.5rem 0;
        text-transform: uppercase;
        letter-spacing: 2px;
        line-height: 1;
    }
`;

export const DashTitle = styled(Title)`
    &.ant-typography {
        font-size: 2.5rem;
        margin: 0 !important;
        letter-spacing: 1px;
    }
`;

export const DashSocialWrapper = styled.div`
    display: flex;
    margin-top: 2rem;
    font-size: 2.75rem;
    gap: 2rem;
`;

export const MainHeader = styled(Header)`
    height: 3rem;
    width: 100%;
    text-align: right;
    background: none;
    padding: 0 2rem;
`;

export const BurgerIcon = styled(MenuOutlined)`
    font-size: 1.2rem;
    cursor: pointer;
`;

export const HeaderDrawer = styled(Drawer)`
    .ant-drawer-header-title {
        justify-content: end;

        button.ant-drawer-close {
            order: 2;
            margin: 0;
            padding-right: 0;
        }

        > div.ant-drawer-title {
            text-align: center;
            font-size: 0.75rem;
        }
    }
`;

export const DrawerMenu = styled(Menu)`
    .ant-menu-item, 
    .ant-menu-inline .ant-menu-item,
    div.ant-menu-submenu-title {
        height: 3rem !important;
    }
    
`;

export const ArchivesContainer = styled(Row)`
    margin-left: 0 !important;
    margin-right: 0 !important;
    margin-top: 1rem;
    padding: 0 2rem;

    div.ant-card-extra {
        font-size: 0.65rem;
        margin-left: 0;

        span:last-child {
            margin-left: 0.25rem;
        }   
    }
`;

export const CardBodyContainer = styled.div`
    height: 7.5rem;

    > section, div {
        text-align: center;
    }

    > div {
        padding-top: 0.5rem;
    }

    > section h1.ant-typography {
        margin-bottom: 0.25rem;
    }
`;

export const FooterContainer = styled(Footer)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 125px;
    margin-top: 2rem;
`;