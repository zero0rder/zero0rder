import { DesktopModalCloseButton } from '../styled'

const DesktopModalCloseBtn = ({ close }) => {
    return (
        <DesktopModalCloseButton onClick={() => close()}>
            <span className="iconify" data-icon="icon-park:close" data-width="256" data-height="256"></span>
        </DesktopModalCloseButton>
    )
}

export default DesktopModalCloseBtn