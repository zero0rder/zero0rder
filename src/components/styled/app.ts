import tw, {css, styled} from 'twin.macro'

export const AppContainer = tw.div`
  h-full
  w-full
  relative
  overflow-hidden
`

export const WorldMap = tw.div`
  relative
  w-full
  h-full
  overflow-hidden
`

export const Canvas = styled.div(({isModalOpen}:{isModalOpen: boolean}) => [
  ` 
    position: absolute;
    background-image: radial-gradient(#182b34, #2d1d34);
  `,
  isModalOpen && css`
    :before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100vh;
      backdrop-filter: blur(5px);
    }
  `
])

export const DarkBkgd = styled.div(({isModalOpen}:{isModalOpen: boolean}) => [
  `
    z-index: 0;
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    transition: opacity 2s;
  `,
  isModalOpen && css`
    background: rgba(40, 33, 52, 0.6); //TODO : DRY news list bg
    width: 100%;
    height: 100%;
    opacity: 1;
    transition: opacity 2s;
  `
])