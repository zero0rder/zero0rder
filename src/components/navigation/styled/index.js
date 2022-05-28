import styled from "styled-components";

export const MainHeader = styled.header`
    display: flex;
    justify-content: space-between;
    background-color: #3E9E9E;
    border-bottom: 2px solid #000;
    color: #fff;
`;

export const NavList = styled.ul`
    display: flex;
    padding: 0.5rem 1.5rem;
    margin: 0.5rem;
    list-style: none;

    &.right-nav-list li:last-child {
        line-height: 1.1rem;
    }
`;

export const NavListItem = styled.li`
    padding: 0 0.35rem;
    font-size: 0.75rem;
    font-weight: bold;
    cursor: pointer;

    > span:hover {
        text-shadow: 0 0 0.25rem #51D8FF;
    }

    &:hover {
        > div {
            opacity: 1;
            z-index: 1;
        }
    }

    > div {
        position: absolute;
        top: 3.2rem;
        height: auto;
        width: 9rem;
        background-color: #2DA0ED;
        transition: all 0.3s;
        opacity: -1;
        z-index: -1;
    }
`;

export const NestedNavList = styled.ul`
    list-style: none;
    padding: 0;
`;

export const NestedListItem = styled.li`
    padding: 0.25rem;
    cursor: pointer;
    
    &:hover {
        background-color: orange;
    }
`;

export const SvgIcon = styled.span`
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

`;