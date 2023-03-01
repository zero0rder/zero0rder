import tw, { css, styled } from 'twin.macro'
import { keyframes } from 'styled-components'

export const LoadingWrapper = styled.div(({ isLoading }: {isLoading: boolean}) => [
    ` 
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #000;
        z-index: 9999;
        transition: all 2s;
        opacity: 0;
        visibility: hidden;
    `,
    isLoading && tw`opacity-[1] visible`, 

]);

export const LoadingText = tw.div`
  text-5xl
  md:text-7xl
  font-medium
`;

const BlurTextKeyframe = keyframes`
  0% {filter: blur(0px);}
	100% {filter: blur(4px);}
`

const createTextAnimation = () => {
    let styles = []
    for (let i = 0; i < 9; i++) {
      styles.push(css`
        &:nth-child(${i + 1}) {
          filter: blur(0px);
          animation: ${BlurTextKeyframe} 1.5s ${i / 5}s infinite linear alternate;
        }
      `)
    }
    return styles
}

export const LoadingChar = styled.span(() => [
    `
        display: inline-block;
        margin: 0 5px;
        color: #fff;
        font-family: 'Libre Barcode 39 Text', 'Rubik Glitch', monospace, 'Quattrocento Sans', sans-serif;
    `,
    css`
        ${createTextAnimation()}
    `
])