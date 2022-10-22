import styled from 'styled-components';

export const DesktopContainer = styled.section`
    [icon='eos-icons:bubble-loading']{
        font-size: 5rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        color: #DADAD3;
    }
`;

export const DesktopItem = styled.div`
    position: absolute;
    right: 0;
    padding-right: 1.5rem;
    transition: transform 0.3s;
    font-size: 5rem;
    cursor: pointer;

    > div {
        font-size: 0.75rem;
        color: #fff;
        text-align: center;
        margin-top: -1rem;
        font-weight: bold;
    }

    &.about-avatar {
        top: 2rem;
    }
    
    &.projects-folder {
        top: 9rem;
    }

    &:hover {
        transform: scale(1.1);
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