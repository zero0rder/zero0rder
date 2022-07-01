import styled from 'styled-components';

export const MobileView = styled.section`
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const MobileNavContainer = styled.div`
    position: absolute;
    bottom: 1rem;
    width: 100%;
    z-index: 3;
`;

export const MobileHeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    border-bottom: 2px solid #000;
    background-color: #3E9E9E;
`;

export const MobileAvatar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3.125rem;
    border: 1px solid #000;
    overflow: hidden;

    img {
        width: 2.5rem;
    }
`;

export const MobileNavUl = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0 1rem;
    list-style: none;
    background-color: #3E9E9E;
    border-radius: 5px;
    border: 2px solid #000;
`;

export const MobileNavLi = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25%;
    padding: 0.5rem;
    font-size: 1.5rem;

    > a {
        height: 1.5rem;
    }

    &:nth-child(1){
        svg g path:first-child {
            fill: #D15A5A;
        }
    }

    &:nth-child(2){
        svg g path {
            &:first-child {
                fill: #fff;
            }

            &:last-child {
                fill: #D15A5A;
            }
        }
    }

    &:nth-child(3) {
        svg path {
            fill: #D15A5A;
        }
    }

    &:nth-child(4) {
        svg g path {
            &:first-child {
                fill: #D15A5A;
            }

            &:nth-child(2) {
                stroke: #000;
            }
        }
    } 

    &:nth-child(5) {
        svg g path {
            &:first-child {
                fill: #D15A5A;
            }

            &:last-child {
                fill: #D15A5A;
                stroke: #000;
            }
        }
    } 
`;

export const MobileOverviewContainer = styled.section`
    height: 82%;
    width: 100%;

    .swiper {
        width: 100%;
        height: 100%;

        .swiper-slide {
            text-align: center;

            img {
                display: block;
                object-fit: cover;
                height: inherit;
                width: inherit;
            }
        }

        .swiper-pagination-bullet-active {
            height: 2rem;
            border-radius: 0.75rem;
            background: #D15A5A;
            transition: height 0.3s;
        }
    }
`;

export const SlideCard = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: inherit;

    .slide-body {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 50%;
        width: 100%;

        > span {
            font-weight: 800;
            font-size: 1.5rem;
        }

        > div {
            margin-top: 1rem;

            a {
                text-decoration: none;

                > span {
                    color: #fff;
                    background-color: #3E9E9E;
                    padding: 0.75rem 2rem;
                    border-radius: 5px;
                    border: 2px solid #000;
                    font-weight: 600;
                    font-size: 0.85rem;
                }
            }
        }
    }
`;

export const SlideBanner = styled.div`
    height: 40%;
    width: 100%;
    background-image: url(${props => props.source});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

export const MobileProjectContainer = styled.section`
    height: 82%;
    overflow-y: scroll;
    overflow-x: hidden;
    background-color: #fff;

    h2 {
        text-align: center;
    }

    > .proj-items-wrap {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: flex-start;
        padding: 0.75rem;

        div {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 47.2%;
            height: 10rem;
            cursor: pointer;
            border: 1px solid #000;
            background-color: #f3f3f3;
            border-radius: 0.32rem;

            span {
                &:first-child {
                    font-size: 2rem;

                    svg {
                        path, circle {
                            stroke-width: 2px;
                        }
                    }
                }

                &:last-child {
                    font-size: 0.85rem;
                    padding-top: 0.25rem;
                    font-weight: 600;
                }
            }
        }
    }
    
`;

export const MobileAboutContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    height: 82%;

    svg {
        margin-left: 0.25rem;
    }
`;

export const MobileEmailContainer = styled.section`
    h2 {
        text-align: center;
    }

    form {
        padding: 0 0.75rem;

        label {
            display: flex;
            justify-content: space-between;
            align-items: center;

            input,
            textarea {
                border: 0.02rem solid #c3c3c3;
                width: 100%;
                outline: none;
            }

            input {
                height: 2.75rem;
                margin-bottom: 0.5rem;
                padding: 0 0.5rem;
            }

            textarea {
                height: 14rem;
                padding: 0.5rem;
            }
        }

        .submit-container {
            margin-top: 0.5rem;

            > input {
                padding: 0.75rem 2.75rem;
            }
        }
    }

`;

export const MobileSwipeDown = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    bottom: 4rem;
    line-height: 0.4rem;
    color: grey;

    span:first-child {
        letter-spacing: 0.2rem;
        font-size: 0.85rem;
    }

    span:last-child {
        font-size: 1.5rem;
    }
`;