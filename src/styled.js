import styled from 'styled-components';

export const AppContainer = styled.div``;

export const ContentSection = styled.section`
    height: 100vh;
    background-color: ${ props => props.mobile ? '#DADAD3' : '#3E9E9E' };
`;