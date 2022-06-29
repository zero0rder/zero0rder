import { DockContainer, DockContentWrap } from './styled/index'

export const Dock = () => {

    return (
        <DockContainer>
            <DockContentWrap>
                <span>
                    <span className="iconify" data-icon="foundation:social-github"></span>
                </span>
                <span>
                    <span className="iconify" data-icon="typcn:social-twitter"></span>
                </span>
                <span>
                    <span className="iconify" data-icon="foundation:social-linkedin"></span>
                </span>
                <span>
                    <span className="iconify" data-icon="foundation:social-stack-overflow"></span>
                </span>
            </DockContentWrap>
        </DockContainer>
    )
}