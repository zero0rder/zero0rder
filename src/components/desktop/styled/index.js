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
                    fill: #DADAD3;
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