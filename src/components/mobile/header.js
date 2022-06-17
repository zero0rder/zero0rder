import { MobileHeaderContainer, MobileAvatar } from "./styled";

export const MobileHeader  = () => {

    return (
        <MobileHeaderContainer>
            <div></div>
            <MobileAvatar>
                <img alt='about' src='https://avatars.githubusercontent.com/u/11478868?v=4'/>
            </MobileAvatar>
        </MobileHeaderContainer>
    );
}