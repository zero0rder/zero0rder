import styled from 'styled-components'
import { Row, Col, Typography, Drawer, Menu } from 'antd'
const { Title } = Typography

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

export const HeaderDrawer = styled(Drawer)`
    .ant-drawer-header-title {

        button.ant-drawer-close {
            margin: 0;
            padding: 0;
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