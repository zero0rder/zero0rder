import styled from 'styled-components';
import { Col, Card, Row, Result } from 'antd'


export const AboutContainer = styled(Col)`
    padding: 0 2rem;
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

    div.ant-divider {
        height: 34rem;
    }
`;

export const TimelineWrapper = styled.div`
    width: 49%;

    h1.ant-typography {
        text-align: center;
        margin-bottom: 2rem;
    }
`;

export const AboutMeta = styled.div`
    width: 49%;
    min-height: 35rem;
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
    height: 100%;
    padding: 2rem 3rem;
`;

export const EmailContainer = styled(Col)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: inherit;
    padding: 0 2rem;

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
    }
`;