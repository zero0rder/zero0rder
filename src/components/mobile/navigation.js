import { MobileNavContainer, MobileNavUl, MobileNavLi } from "./styled";
import { Link } from 'react-router-dom';

export const MobileNav = () => {

    return (
    
        <MobileNavContainer>
            <MobileNavUl>
                <MobileNavLi><Link to='overview'><span className="iconify" data-icon="icon-park:layers"></span></Link></MobileNavLi>
                <MobileNavLi><Link to='projects'><span className="iconify" data-icon="icon-park:folder-open"></span></Link></MobileNavLi>
                <MobileNavLi><Link to='about'><span className="iconify" data-icon="icon-park:avatar"></span></Link></MobileNavLi>
                <MobileNavLi><Link to='email'><span className="iconify" data-icon="icon-park:mail"></span></Link></MobileNavLi>
                <MobileNavLi><Link to=''><span className="iconify" data-icon="icon-park:setting-two"></span></Link></MobileNavLi>
            </MobileNavUl>
        </MobileNavContainer>
        
    )

}