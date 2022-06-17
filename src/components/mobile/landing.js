import { Outlet } from "react-router-dom";
import { MobileView } from './styled';
import { MobileHeader } from './header';
import { MobileNav } from './navigation';

export const MobileLanding = () => {

    return (
        <MobileView className="mobile-section">
            <MobileHeader />
            <Outlet />
            <MobileNav />
        </MobileView>
    )

}