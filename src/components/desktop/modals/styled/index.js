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
    height: 25.9rem;
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
            width: 30.3%;
            height: 8rem;
            cursor: pointer;
            border: 1px solid #DADAD3;
            background-color: #000F2B;
            border-radius: 0.32rem;
            color: #fff;
            background-repeat: no-repeat;
            background-size: cover;
            
            span {
                font-weight: 600;
                background-color: rgba(0,0,0,0.5);
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                opacity: 1;
                transition: 0.5 ease;

                &:hover {
                    opacity: 0;
                }
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
        box-shadow: inset 0 0 300px rgb(255 255 255 / 85%);

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

export const ModalOverlay = styled.div`
    position: fixed;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    z-index: 5;
    cursor: pointer;
`;

export const EmailModalContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 55%;
    border-radius: 5px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;
    transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    max-width: 650px;
`;

export const EmailContentSection = styled.section`
    height: 100%;
    width: 100%;
`;

export const EmailModalHeader = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 0.25rem;
    border-radius: 5px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border: 1px solid #DADAD3;
    border-bottom: none;
    color: #fff;
    box-shadow: inset 0 0 300px rgb(255 255 255 / 50%);

    > span {
        padding: 0.25rem 0.5rem;
        font-weight: 600;
        font-size: 0.85rem;
    }

    > div {
        padding: 0.25rem 0.5rem;

        > span {
            cursor: pointer;
        }

        svg {
            path, g {
                stroke: #fff;
                stroke-width: 5;
            }
        }
    }

    .minimize-email {
        margin-right: 0.5rem;
    }

`;

export const EmailForm = styled.form`
    padding: 0 0.75rem;
    border: 1px solid #DADAD3;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    background-color: #fff;

    > label {
        display: flex;
        justify-content: space-between;
        align-items: center;

        input {
            height: 1.75rem;
            border-bottom: 0.02rem solid #c3c3c3 !important;
            padding: 0.25rem 0;
        }

        textarea {
            height: 12rem;
            padding: 0.5rem 0;
            font-family: inherit;
        }

        input, textarea {
            border: none;
            width: 100%;
            outline: none;
        }
    }

    textarea {
        resize: none;
    }

`;

export const EmailSubmitContainer = styled.div`
    text-align: center;
    padding: 10px 0;

    > input {
        padding: 0.5rem 1.5rem;
        font-weight: 600;
        color: #fff;
        border: 0.02rem solid #DADAD3;
        border-radius: 0.25rem;
        background-color: #000F2B;
        cursor: pointer;

        &:hover {
            background-color: #DADAD3;
            border-color: #DADAD3;
            color: #000F2B;
        }
    }
`;

export const EmailSent = styled.section`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 5;
    background-color: #fff;
    border-radius: 5px;
    width: 13rem;
    height: 7rem;
    text-align: center;
    color: green;

    > h2 {
        margin-bottom: 0.75rem;
    }

    [icon='bi:check-circle'] {
        font-size: 2rem;
    }
`;