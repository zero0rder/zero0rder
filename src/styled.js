import styled from 'styled-components';

export const AppContainer = styled.div``;

export const ContentSection = styled.section`
    height: 100vh;
    background-image: linear-gradient(to ${ props => props.mobile ? 'right' : 'left' } top, #dadad3, #b2bcb0, #84a097, #578487, #32667a, #25546f, #1e4262, #1c3053, #142849, #0c203e, #051835, #000f2b);
`;