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
            border: 2px solid;
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

    &.projects-folder, 
    &.clear-desktop {
        svg {
            width: 6rem;
            height: 6rem;
            cursor: pointer;

            g {
                stroke-width: 2px;

                path {
                    fill: #FFE54C;
                    stroke: #000;
                }
            }
        }
    }
    
    &.projects-folder {
        top: 15rem;
    }

    &.clear-desktop {
        top: 23rem;

        svg path:last-child {
            fill: #fff;
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
        border-radius: 0.32rem;
    }

    &.projects-modal {
        width: 38rem;
        height: 28rem;
        left: 35rem;
        top: 5rem;
        border-radius: 0.32rem;
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
    cursor: move;
    border-top-right-radius: 0.32rem;
    border-top-left-radius: 0.32rem;
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
    border-top-left-radius: 0.32rem;

    > svg {
        width: 100%;
        height: 100%;
    }
`;

export const DesktopRepos = styled.section`
    border: 2px solid #1d1e1c;
    height: 25.8rem;
    border-top: 0;
    background-color: #DADAD3;
    overflow-y: scroll;
    overflow-x: hidden;
    border-bottom-right-radius: 0.32rem;
    border-bottom-left-radius: 0.32rem;

    > ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;
        gap: 1rem;
        list-style: none;
        padding: 1rem;
        margin: 0;

        li {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 30.3%;
            height: 8rem;
            cursor: pointer;
            border: 1px solid #000;
            background-color: #fff;
            border-radius: 0.32rem;

            &:hover {
                background-color: #f3f3f3;
            }
            
            > div {
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 3rem;

                svg {
                    path, circle {
                        stroke-width: 2px;
                    }
                   
                    &[data-icon='icon-park:bitcoin'] g,
                    &[data-icon='icon-park:bitcoin'] circle,
                    &[data-icon='icon-park:handle-x'] circle, 
                    &[data-icon='icon-park:plan'] path:first-child,
                    &[data-icon='icon-park:planet'] path:first-child,
                    &[data-icon='icon-park:database-code'] path:nth-child(2),
                    &[data-icon='icon-park:database-code'] path:nth-child(5) {
                        fill: #D15A5A;
                    }
                }
            }
            
            span {
                font-size: 0.75rem;
                font-weight: 600;
                padding-top: 1rem;
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
    display: flex;
    justify-content: center;
    align-items: center;
    height: 19.75rem;
    border: 2px solid #1d1e1c;
    border-top: none;
    background-color: #fff;
    border-bottom-right-radius: 0.32rem;
    border-bottom-left-radius: 0.32rem;


    p {
        margin: 0;
        font-weight: 700;
    }

    svg path {
        fill: #D15A5A;
    }

`;

export const DockContainer = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 4rem;
    bottom: 3rem;
    z-index: 3;
`;

export const DockContentWrap = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: inherit;
    width: 30rem;
    border-radius: 0.32rem;
    overflow: hidden;
    background: inherit;
    box-shadow: -0.4rem 0.4rem 0 rgb(29 30 28 / 26%);

    > span {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20%;
        height: 100%;
        font-size: 2rem;

        > svg {
            cursor: pointer;
            transition: transform 0.3s;

            &:hover {
                transform: scale(1.25);
            }

            &[data-icon="typcn:social-twitter"]:hover path {
                fill: #1DA1F2;
            }
            
            &[data-icon="foundation:social-linkedin"]:hover path {
                fill: #0e76a8;
            }
            
            &[data-icon="foundation:social-stack-overflow"]:hover {
                path {
                    &:first-child {
                        fill: #DADAD3;
                    }

                    &:last-child {
                        fill: orange;
                    }
                }
            }
        }
    }
    
    &:before {
        content: "";
        position: absolute;
        z-index: -1;
        top: 0; 
        right: 0; 
        bottom: 0; 
        left: 0;
        background: inherit;
        box-shadow: inset 0 0 300px rgba(255,255,255,.5);
        filter: blur(10px);
        margin: -20px;
    }
`;

export const DesktopProjectCard = styled.section`
    position: absolute;
    width: 25rem;
    height: auto;
    left: 13rem;
    top: 14rem;
    z-index: 3;
    box-shadow: -0.6rem 0.6rem 0 rgb(29 30 28 / 26%);
    border-radius: 0.32rem;


    header {
        box-sizing: border-box;
        margin: 0;
        padding: 0.25rem 5rem 0.5rem 6rem;
        width: 100%;
        font-size: 0.65rem;
        font-weight: 600;
        letter-spacing: 1px;
        text-align: center;
        background-color: #DADAD3;
        border: 2px solid #1d1e1c;
        z-index: 1;
        cursor: move;
        border-top-right-radius: 0.32rem;
        border-top-left-radius: 0.32rem;
    }


    button {
        position: absolute;
        width: 1.64rem;
        height: 1.64rem;
        padding: 0.3rem;
        border: 2px solid black;
        background-color: #C1C1BF;
        cursor: pointer;
        top: 0;
        border-bottom: 0;
        border-top-left-radius: 0.32rem;

        > svg {
            width: 100%;
            height: 100%;
        }
    }

    > section {
        border: 2px solid #1d1e1c;
        height: 15rem;
        text-align: center;
        border-top: 0;
        background-color: #fff;
        overflow-y: scroll;
        overflow-x: hidden;
        border-bottom-right-radius: 0.32rem;
        border-bottom-left-radius: 0.32rem;

        > img {
            width: 65%;
            height: 8rem;
            display: block;
            margin: auto;
            margin-bottom: 0.5rem;
            border: 2px solid #000;
            border-top: none;
            border-bottom-right-radius: 5px;
            border-bottom-left-radius: 5px;
        }

        > span {
            font-weight: 800;
            font-size: 1.25rem;
        }

        > p {
            margin: 0.25rem 0.5rem 1rem;
            font-size: 0.85rem;
        }

        section {
            display: flex;
            justify-content: space-evenly;
            width: 75%;
            margin: auto;

            a {
                text-decoration: none;
            }

            .open-app-btn, div:last-child  {
                span {
                    padding: 0.5rem 2rem;
                    background-color: #FFE54C;
                    color: #000;
                    border-radius: 5px;
                    border: 2px solid #000;
                    font-weight: 600;
                    font-size: 0.7rem;
                    cursor: pointer;

                    &:hover {
                        background-color: #D15A5A;
                        color: #fff;
                    }
                }
            }
        }
    }

`;