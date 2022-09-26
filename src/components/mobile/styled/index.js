import styled from 'styled-components';

export const MobileView = styled.section`
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const MobileHeaderContainer = styled.header`
    display: flex;
    justify-content: center;
    min-height: 2.5rem;
    align-items: center;
    padding: 0.5rem;
    border-bottom: 2px solid #000;

    > span {
        font-weight: bold;
        font-size: 1.25rem;
        text-transform: Capitalize;
    }

`;

export const MobileNavContainer = styled.div`
    position: absolute;
    bottom: 1.75rem;
    width: 100%;
    z-index: 3;
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
    font-size: 1.75rem;

    > a {
        display: flex;
        align-items: center;
        height: 1.75rem;
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
            font-size: 1.95rem;
        }

        > p {
            font-size: 1.15rem;
            margin-bottom: 1.5rem;
            margin-top: 0.75rem;
        }

        > div {
            &.open-app-btn {
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
                        font-size: 0.95rem;
                    }
                }
            }

            &:last-child {
                margin-top: 2rem;

                a {
                    margin-top: 2rem;
                    color: #000;
                    font-weight: 600;
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

    &:after {
        position: absolute;
        content: '';
        width: 100%;
        height: 2rem;
        background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0, #fff 100%);
        bottom: 4rem;
    }

    h2 {
        text-align: center;
        font-size: 1.75rem;
        text-decoration: underline;
    }

    > .proj-items-wrap {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: flex-start;
        padding: 0.75rem;

        div {
            height: 10rem;
            width: 47.2%;
            cursor: pointer;
            border: 1px solid #000;
            background-color: #f3f3f3;
            border-radius: 0.32rem;
            
            a {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 100%;
                text-decoration: none;

                span {
                    font-size: 0.9rem;
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
    flex-direction: column;
    font-weight: 700;
    height: 82%;

    .bio-socials {
        width: 100%;
        height: 3rem;
        padding: 1rem;

        > div {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 70%;
            margin: auto;

            > span {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 33%;
                height: 100%;
                font-size: 2rem;
            }
        }
    }

    .avatar-wrap {
        position: relative;
        height: 10.5rem;
        border: 3px solid;
        border-radius: 50%;
        overflow: hidden;
        margin-top: 2rem;
        
        img {
            width: 10.5rem;
            height: 10.5rem;
            cursor: pointer;
        }
    }
    
    .bio-top {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 1.25rem; 

        h3 {
            font-size: 2.5rem;
            margin: 1rem 0;
        }

        .bio-text {
            margin-bottom: 0.25rem;
        }
    }

    .bio-bottom {
        margin: 1.5rem 0;
        text-align: center;
        padding: 0 0.75rem;
        font-weight: 500;
    }
`;

export const MobileEmailContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 82%;

    form {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;

        .label-container {
            height: 90%;
            padding: 1.5rem 0.75rem;
        }

        label {
            display: flex;
            justify-content: space-between;
            align-items: center;

            &:last-child {
                height: 75%;
            }

            input,
            textarea {
                border: 0.075rem solid #c3c3c3;
                width: 100%;
                outline: none;
                border-radius: 5px;
            }

            input {
                height: 3.5rem;
                margin-bottom: 0.5rem;
                padding: 0 0.5rem;
                font-size: 1rem;
            }

            textarea {
                height: 100%;
                margin-top: 1.5rem;
                padding: 0.5rem;
                font-size: 1rem;
                resize: none;
            }
        }

        .submit-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 10%;

            > input {
                height: 3rem;
                padding: 0.85rem 3rem;
                font-size: 0.95rem;
                font-weight: 600;
                color: #fff;
                background-color: #3E9E9E;
                border-radius: 5px;
                border: 2px solid #000;
            }
        }
    }

`;