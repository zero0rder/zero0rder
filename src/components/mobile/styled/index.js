import styled from 'styled-components';

export const MobileView = styled.section`
    width: 100%;
    height: 100%;
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
`;

export const MobileAvatar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3.125rem;
    border: 2px solid #000;
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
    width: inherit;
    height: inherit;

    .swiper {
        width: inherit;
        height: inherit;

        .swiper-slide {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            background: #fff;

            img {
                display: block;
                object-fit: cover;
                height: inherit;
                width: inherit;
            }
        }
    }
`;

export const MobileProjectContainer = styled.section`

`;