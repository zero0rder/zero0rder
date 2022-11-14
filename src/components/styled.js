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
    max-width: 1175px;
`;

export const DashContainer = styled(Row)`
    min-height: 260px;
    justify-content: center;

    > div.ant-card {
        width: 100%;
        margin: ${props => props.vpmd === 'false' ? '0 1rem' : '0 2.3rem'};
        
        > .ant-card-body {
            display: flex;
            flex-flow: row wrap;
            height: 100%;
        }
    }
`;

export const DashImage = styled(Col)`
    display: flex;
    justify-content: ${props => props.vplg === 'true' ? 'start' : 'center'};
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
    justify-content: ${props => props.vplg === 'true' ? 'start' : 'center'};
    ${props => props.vplg === 'true' ? '' : 'align-items: center'};

`;

export const DashName = styled(Title)`
    &.ant-typography {
        font-size: ${props => props.vplg === 'true' ? '5rem' : props.vpmd === 'true' ? '3.75rem' : '2.75rem'};
        margin: ${props => props.vpmd === 'false' ? '1rem 0 0.5rem' : '0.5rem 0' };
        text-transform: uppercase;
        line-height: 1;
    }
`;

export const DashTitle = styled(Title)`
    &.ant-typography {
        font-size: ${props => props.vpmd === 'false' ? '2rem' : '2.5rem'};
        margin: 0 !important;
        letter-spacing: 1px;
        font-style: italic;
    }
`;

export const DashSocialWrapper = styled.div`
    display: flex;
    margin-top: 1rem;
    font-size: 2.75rem;
    gap: 2rem;
    ${props => props.vpmd === 'false' ? 'margin: 1.5rem 0' : ''};
`;

export const MainHeader = styled(Header)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 3rem;
    width: 100%;
    background: none;
    padding: ${props => props.mobile === 'true' ? '0 1rem' : '0 2rem'};

    nav.ant-breadcrumb {
        display: inline-block;
    }
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

export const OpenSourceContainer = styled(Row)`
    margin-left: 0 !important;
    margin-right: 0 !important;
    margin-top: ${props => props.vpmd === 'false' && props.landing === 'true' ? '0' : '1rem'};
    padding: ${props => props.vpmd === 'false' ? '0 1rem' : '0 2rem'};

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
    font-weight: 900;
`;