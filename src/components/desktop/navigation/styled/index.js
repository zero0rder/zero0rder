import styled from "styled-components";

export const MainHeader = styled.header`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #DADAD3;
    color: #fff;
    overflow: hidden;
`;

export const NavList = styled.ul`
    display: flex;
    margin: 0;
    list-style: none;

    &:first-child {
        padding-left: 1.5rem;
    }

    &:last-child {
        padding-right: 1.5rem;
    }

    &.right-nav-list li {

        &:first-child {
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 0.25rem;
            
            > span {
                font-size: 1.25rem;
                padding-bottom: 0.2rem;
                transition: transform 0.3s;
    
                &:hover {
                    transform: scale(1.1)
                }
            }
        }

        &:last-child {
            cursor: none;
        }
    }
`;

export const NavListItem = styled.li`
    padding: 0.5rem 0.35rem;
    font-size: 0.75rem;
    font-weight: bold;
    cursor: pointer;

    > span:hover {
        text-shadow: 0 0 0.25rem #51D8FF;
    }

    > div {
        position: absolute;
        display: none;
        width: 9rem;
        height: auto;
        top: 1.95rem;
        color: #fff;
        border: 1px solid #DADAD3;
        box-shadow: -0.4rem 0.4rem 0 rgb(29 30 28 / 26%);
        transition: all 0.3s;
        border-bottom-right-radius: 0.25rem;
        border-bottom-left-radius: 0.25rem;
        z-index: 3;
        box-shadow: inset 0 0 300px rgb(255 255 255 / 50%);
        border-top: none;
    }
    
    &:hover {
        > div {
            display: block;
        }
    }
    
`;

export const NestedNavList = styled.ul`
    padding: 0;
    list-style: none;
`;

export const NestedListItem = styled.li`
    padding: 0.25rem;
    cursor: pointer;

    &:last-child {
        border-bottom-right-radius: 0.2rem;
        border-bottom-left-radius: 0.2rem;
    }
    
    &:hover {
        background-color: #000F2B;
    }
`;

export const SvgIcon = styled.span`
    position: relative;
`;