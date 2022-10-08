import styled from 'styled-components';

export const DesktopModal = styled.section`
box-sizing: border-box;
position: absolute;
box-shadow: -0.6rem 0.6rem 0 rgb(29 30 28 / 26%);

&.about-modal {
    height: 22rem;
    width: 38rem;
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

&.projects-modal {
   z-index: ${props => props.order};
}

&.about-modal {
    z-index: ${props => props.order};
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
    box-shadow: inset 0 0 300px rgb(255 255 255 / 50%);
    border: 1px solid #DADAD3;
    z-index: 1;
    cursor: move;
    border-top-right-radius: 0.32rem;
    border-top-left-radius: 0.32rem;
    text-transform: capitalize;
    color: #fff;
`;

export const DesktopModalCloseButton = styled.button`
    position: absolute;
    width: 1.95rem;
    height: 1.95rem;
    padding: 0.3rem;
    border: 1px solid #DADAD3;
    cursor: pointer;
    top: 0;
    border-bottom: 0;
    border-top-left-radius: 0.32rem;

    &:hover {
        background-color: #D15A5A;

        g {
            stroke: #fff;
        }
    }

    > svg {
        width: 100%;
        height: 100%;
    }
`;

export const DesktopRepos = styled.section`
    border: 1px solid #DADAD3;
    height: 25.8rem;
    border-top: 0;
    overflow-y: scroll;
    overflow-x: hidden;
    border-bottom-right-radius: 0.32rem;
    border-bottom-left-radius: 0.32rem;
    box-shadow: inset 0 0 0 300px rgb(255 255 255 / 50%);

    > ul {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 1.4rem;
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
            border: 1px solid #DADAD3;
            background-color: #000F2B;
            border-radius: 0.32rem;
            color: #fff;

            &:hover {
                background-color: #DADAD3;

                span {
                    color: #000;
                }

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
        width: 0.25rem;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #DADAD3;
        border-radius: 5px;
    }

    // &::-webkit-scrollbar-track {}
`;

export const DesktopModalAboutBody = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 19.95rem;
    border: 1px solid #DADAD3;
    border-top: none;
    border-bottom-right-radius: 0.32rem;
    border-bottom-left-radius: 0.32rem;
    color: #fff;
    background-color: #000F2B;

    > div {
        position: relative;
        height: 8.5rem;
        border: 1px solid;
        border-radius: 50%;
        overflow: hidden;

        img {
            width: 8.5rem;
            height: 8.5rem;
        }
    }

    > section {
        text-align: center;

        h3 {
            margin: 0.5rem;
            font-size: 1.5rem;
        }

        .bio-text {
            font-style: italic;
        }

        .bio-locale {
            display: block;
            padding-top: 0.5rem;
        }
    }
`;

export const DesktopProjectCard = styled.section`
    position: absolute;
    width: 25rem;
    height: auto;
    left: 13rem;
    top: 14rem;
    z-index: ${props => props.order};
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
        border: 1px solid #DADAD3;
        z-index: 1;
        cursor: move;
        border-top-right-radius: 0.32rem;
        border-top-left-radius: 0.32rem;
        color: #fff;
        box-shadow: inset 0 0 300px rgb(255 255 255 / 50%);
    }


    button {
        position: absolute;
        width: 1.55rem;
        height: 1.55rem;
        padding: 0.3rem;
        border: 1px solid #DADAD3;
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
        border: 1px solid #DADAD3;
        height: 15rem;
        text-align: center;
        border-top: 0;
        overflow-y: scroll;
        overflow-x: hidden;
        border-bottom-right-radius: 0.32rem;
        border-bottom-left-radius: 0.32rem;
        box-shadow: inset 0 0 300px rgb(255 255 255 / 50%);

        > img {
            width: 65%;
            height: 8rem;
            display: block;
            margin: auto;
            margin-bottom: 0.5rem;
            border: 1px solid #DADAD3;
            border-top: none;
            border-bottom-right-radius: 5px;
            border-bottom-left-radius: 5px;
        }

        > span {
            font-weight: 800;
            font-size: 1.25rem;
            color: #fff;
        }

        > p {
            margin: 0.25rem 0.5rem 1rem;
            font-size: 0.85rem;
            color: #fff;
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
                    background-color: #000F2B;
                    color: #fff;
                    border-radius: 5px;
                    border: 1px solid #DADAD3;
                    font-weight: 600;
                    font-size: 0.7rem;
                    cursor: pointer;

                    &:hover {
                        background-color: #DADAD3;
                        color: #000;
                    }
                }
            }
        }
    }

`;