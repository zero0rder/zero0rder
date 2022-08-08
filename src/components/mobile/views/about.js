import { useState } from 'react';
import { MobileAboutContainer } from '../styled';
import { initialAboutState } from './templates/aboutTemplates';

export const MobileAbout = () => {
    const [aboutRow, setAboutRow] = useState(initialAboutState);

    const handleRowStatus = e => {
        const { target } = e;
        const parentId = target.closest('li').id;

        setAboutRow(prev => {
           let newState = [];
           
           prev?.map(c => {
                c.title === parentId ? c.isActive = true : c.isActive = false;
                return newState.push({...c});
           });
        
           return newState;

        });
    }

    return (
        <MobileAboutContainer>
            <div>
                <ul>
                    {aboutRow?.map((c, i) => (
                        <li id={`${c.title}`} className={`${c.isActive ? 'active-row' : ''}`} key={i}>
                            <div className='about-row-container' onClick={(e) => handleRowStatus(e)}>
                                <span>{c.title}</span>
                                <span className="iconify" data-icon="ant-design:caret-up-filled"></span>
                                <span className="iconify" data-icon="ph:caret-down-light"></span>
                            </div>
                            { c.view }
                        </li>
                    ))}
                </ul>
            </div>
        </MobileAboutContainer>
    )
}