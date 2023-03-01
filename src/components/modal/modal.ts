import tw, { styled } from 'twin.macro'
import { AiFillCloseCircle } from 'react-icons/ai'

export const ModalContainer = styled.div(({ isModalOpen }: {isModalOpen: boolean}) => [
    ` 
        z-index: -1;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 3rem;
        width: 100%;
        color: #f1f5f9;
        height: 100%;
        padding: 20px;
        top: 0;
        border-radius: 10px;
        opacity: 0;
        font-weight: bold;
        transition: 0.6s opacity ease-out;
        overflow: scroll;
        ::-webkit-scrollbar {
            width: 0;
            height: 0;
        }
    `,
    isModalOpen && tw`z-[2] opacity-100`, 
]);

export const ModalOverlay = styled.div(({ isModalOpen }: {isModalOpen: boolean}) => [
    ` 
        position: absolute;
        height: 100vh;
        width: 100vw;
        z-index: 2;
        opacity: 1;
        transition: 3s;
    `,
    !isModalOpen && tw`h-0 w-0 opacity-0 [transition: 1s]`, 
]);

export const CloseOverlayWrap = styled.div(({ isModalOpen }: {isModalOpen: boolean}) => [
    `
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        left: 2rem;
        top: 7rem;
        cursor: pointer;
        z-index: 20;
        opacity: 1;
        transition: 3s;
        --tw-text-opacity: 1;
        color: rgb(185 28 28 / var(--tw-text-opacity));

    `,
    !isModalOpen && tw`opacity-0 z-[-1] [transition: 1s]`
]);

export const CloseOverlayText = tw.span`
    block
    text-lg
    font-mono
`

export const CloseOverlay = tw(AiFillCloseCircle)`
    text-4xl
`