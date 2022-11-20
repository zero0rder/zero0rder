import styled from 'styled-components';
import { Col, Card, Row, Result, Typography } from 'antd'
const { Title, Paragraph, Text } = Typography

export const AboutContainer = styled(Col)`
    padding: ${props => props.vpmd === 'false' ? '0 1rem' : '0 2rem'};
`;

export const AboutSocialWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.75rem;
    gap: 2rem;
`;

export const AboutDetailsCard = styled(Card)`
    max-width: 975px;
    margin: auto;
`;

export const DetailsContent = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    ${props => props.vpmd === 'false' ? 'flex-direction: column' : 'height: 38rem'};

    div.ant-divider {
        height: inherit;
    }
`;

export const TimelineWrapper = styled.div`
    width: ${props => props.vpmd === 'false' ? '100%' : '49%'};
    ${props => props.vpmd === 'true' ? 'padding-top: 1.5rem' : ''};
    height: 100%;

    div.ant-timeline-item-head {
        background: transparent;
    }
`;

export const TimelineTitle = styled(Title)`
    &.ant-typography {
        text-align: center;
        margin-bottom: 2rem;
    }
`;

export const ExpName = styled(Text)`
    font-size: 1rem;
    font-weight: 700;
`;

export const ExpTitle = styled(Text)`
    font-style: italic;
    font-weight: 600;
`;

export const ExpDate = styled(Text)`
    font-size: 0.7rem;
    font-weight: 500;
`;

export const ExpDesc = styled(Paragraph)`
    font-size: 0.7rem;
    line-height: 15px;
    margin-top: 0.5rem;
`;

export const AboutMeta = styled.div`
    width: ${props => props.vpmd === 'false' ? '100%' : '49%'};
    height: inherit;
`;

export const AboutMetaWrapper = styled(Row)``;

export const AboutMetaCol = styled(Col)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 10rem;

    > span {
        &:first-child {
            font-size: 3rem;
        }

        &:last-child {
            font-size: 1rem;
            padding-top: 0.5rem;
        }
    }
`;

export const Result404 = styled(Result)`
    width: 100%;
    padding: 2rem 3rem;
`;

export const EmailContainer = styled(Col)`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${props => props.vpmd === 'false' ? '0 1rem' : '2rem'};

    > div.ant-card {
        width: 100%;
        max-width: 825px;
    }

    form {
        textarea.ant-input {
            resize: none;
        }

        div.ant-form-item:last-child {
            text-align: center;
        }

        button.ant-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: auto;
            padding: 1rem 2rem;
            font-weight: 700;
        }
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