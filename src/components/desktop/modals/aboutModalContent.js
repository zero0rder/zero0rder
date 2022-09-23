import { Link, Outlet } from 'react-router-dom'
import { DesktopModalAboutBody } from '../styled'

const AboutModalContent = () => {
    const setActiveTab = (e) => {
        e.preventDefault()
        
        const nav = document.getElementsByClassName('about-modal-nav')[0]
        nav.firstChild.childNodes.forEach((cn) => cn.classList.remove('active-tab'))
            
        const target = e.target.closest('li')
        target.classList.add('active-tab')
    }

    return (
        <DesktopModalAboutBody>
            <div>
                <div className='about-modal-nav'>
                    <ul>
                        <li onClick={(e) => setActiveTab(e)} className='active-tab'><Link to='intro'>Intro</Link></li>
                        <li onClick={(e) => setActiveTab(e)} ><Link to='skills'>Skills</Link></li>
                        <li onClick={(e) => setActiveTab(e)} ><Link to='history'>History</Link></li>
                        <li onClick={(e) => setActiveTab(e)} ><Link to='work'>Work</Link></li>
                    </ul>
                </div>
                <div className='about-modal-content'>
                    <Outlet/>
                </div>
            </div>
        </DesktopModalAboutBody>
    )
}

export default AboutModalContent