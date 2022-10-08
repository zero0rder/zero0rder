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
        top: 2.33rem;
        color: #fff;
        border: 1px solid #DADAD3;
        box-shadow: -0.4rem 0.4rem 0 rgb(29 30 28 / 26%);
        transition: all 0.3s;
        border-bottom-right-radius: 0.25rem;
        border-bottom-left-radius: 0.25rem;
        z-index: 3;
        box-shadow: inset 0 0 300px rgb(255 255 255 / 50%);
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

    svg {
        width: 1.2rem;
        height: 1.2rem;
        transition: transform 0.3s;

        &:hover {
            transform: scale(1.25);
        }

        path {
            fill: #DADAD3;
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