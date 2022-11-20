import styled from 'styled-components'
import { Layout } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
const { Header, Footer } = Layout

export const FooterContainer = styled(Footer)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 115px;
    margin-top: 2rem;
    font-weight: 900;
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