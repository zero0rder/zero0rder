import styled from 'styled-components';

export const DesktopContainer = styled.section``;

export const DesktopItem = styled.div`
    position: absolute;
    right: 0;
    padding-right: 1rem;
    transition: transform 0.3s;

    &.about-avatar {
        top: 7rem;
        height: 6.25rem;
        
        .about-inner-wrap {
            position: relative;
            border-radius: 3.125rem;
            border: 1px solid;
            overflow: hidden;
            height: inherit;
            
            img {
                width: 6.25rem;
                cursor: pointer;
            }

            span {
                position: absolute;
                left: 6.5rem;
                width: 100%;
                height: 100%;
                background-color: blue;
            }
        }
    }
    
    &.projects-folder {
        top: 15rem;

        svg {
            width: 6rem;
            height: 6rem;
            cursor: pointer;
    
            path {
                fill: #D15A5A;
            }
        }
        
    }

    &:hover {
        transform: scale(1.2);
    }

`;

export const DesktopModal = styled.section`
    box-sizing: border-box;
    position: absolute;
    box-shadow: -0.6rem 0.6rem 0 rgb(29 30 28 / 26%);
    z-index: 1;

    &.about-modal {
        height: 22rem;
        width: 38rem;
        background-color: #DADAD3;
        right: 9rem;
        top: 5rem;
    }

    &.projects-modal {
        width: 30rem;
        height: 28rem;
        left: 6rem;
        top: 8rem;
    }

    &.active-modal {
        z-index: 2;
    }

`;

export const DesktopModalHeader = styled.header`
    box-sizing: border-box;
    margin: 0;
    padding: 0.5rem 5rem 0.5rem 6rem;;
    width: 100%;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 1px;
    text-align: center;
    background-color: #DADAD3;
    border: 2px solid #1d1e1c;
    z-index: 1;

`;

export const DesktopModalCloseButton = styled.button`
    position: absolute;
    width: 2rem;
    height: 2rem;
    padding: 0.3rem;
    border: 2px solid black;
    background-color: #C1C1BF;
    cursor: pointer;
    top: 0;
    border-bottom: 0;

    > svg {
        width: 100%;
        height: 100%;
    }
`;

export const DesktopRepos = styled.section`
    border: 2px solid #1d1e1c;
    height: 25.8rem;
    border-top: 0;
    background-color: white;
    overflow-y: scroll;
    overflow-x: hidden;

    > ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        list-style: none;
        padding: 0;

        li {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 25%;

            img {
                width: 9rem;
            }

            span {
                font-size: 0.75rem;
                font-weight: 600;
            }
        }
    }

    &::-webkit-scrollbar {
        width: 1rem;
        background-color: #DADAD3;
    }

    &::-webkit-scrollbar-thumb {
        border: 2px solid #1D1D1B;
        border-right: none;
        background-color: #C1C1BF;
    }

    &::-webkit-scrollbar-track {
        border: 2px solid #1D1D1B;
        border-top: none;
        border-right: none;
    }
`;

export const DesktopModalAboutBody = styled.section`
    height: 19.75rem;
    border: 2px solid #1d1e1c;
    border-top: none;

`;