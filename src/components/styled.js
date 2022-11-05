import styled from 'styled-components';
import { Row, Col, Typography, Layout, Drawer, Menu } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
const { Title } = Typography
const { Header } = Layout

export const DashContainer = styled(Row)`
    height: 350px;
`;

export const DashImage = styled(Col)`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const DashText = styled(Col)`
    display: flex;
    flex-direction: column;
    justify-content: start;
`;

export const DashName = styled(Title)`
    &.ant-typography {
        font-size: 4rem;
        margin-bottom: 0;
        margin-top: 1.2rem;
        text-transform: uppercase;
        width: 50%;
    }
`;

export const DashTitle = styled(Title)`
    &.ant-typography {
        font-size: 2.5rem;
        margin: 0 !important;
    }
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
            margin: 0;
        }
    }
`;

export const DrawerMenu = styled(Menu)``;

export const ArchivesContainer = styled(Row)`
    margin: 0 !important;
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

