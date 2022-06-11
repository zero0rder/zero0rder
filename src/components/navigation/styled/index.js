import styled from "styled-components";

export const MainHeader = styled.header`
    display: flex;
    justify-content: space-between;
    background-color: #3E9E9E;
    border-bottom: 2px solid #000;
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

    &.right-nav-list li:last-child {
        line-height: 1.1rem;
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
        top: 2.3rem;
        color: #000;
        border: 2px solid #000;
        background-color: #FFE54C;
        box-shadow: -0.6rem 0.6rem 0 rgb(29 30 28 / 26%);
        transition: all 0.3s;
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
    
    &:hover {
        background-color: #3E9E9E;
        color: #fff;
    }
`;

export const SvgIcon = styled.span`
    position: relative;

    svg {
        width: 1.2rem;
        height: 1.2rem;
        transition: transform 0.3s;

        &:hover {
            transform: scale(1.25);
        }

        path {
            fill: #D15A5A;
        }

        &[data-icon="icon-park:mail"] {
            path:nth-child(2){
                stroke: #000;
            }
        }

    }
    
    .extended-searchbar {
        position: absolute;
        top: -0.5rem;
        right: 0rem;
        width: 13rem;
        z-index: 2;
        transform: translateY(3.5rem);
        transition: transform .3s;

        input {
            width: 100%;
            border-radius: 1.5rem;
            padding-left: 1.35rem;
            border-color: #000;
            outline: none;
        }

        svg {
            position: absolute;
            left: 0.065rem;
            top: 0.065rem;
            transform: scale(1.2);
        }
    }

`;