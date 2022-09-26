import { useState, useEffect } from 'react'
import { fetchInfo } from '../../../utils/http/api'
import { MobileAboutContainer } from '../styled'

export const MobileAbout = () => {
    const [info, setInfo] = useState()

    useEffect(() => {
        const controller = new AbortController()
        const getInfo = fetchInfo(process.env.REACT_APP_URI, controller.signal)
        const unPkg = (async () => {
            const res = await getInfo
            setInfo(() => res)
        })

        unPkg()
        return () => controller?.abort()
        
    }, [])

    if(!info) return 'Loading...'

    return (
        <MobileAboutContainer>
            <div className='bio-socials'>
                <div>
                    <span>
                        <span className="iconify" data-icon="foundation:social-github"></span>
                    </span>
                    <span>
                        <span className="iconify" data-icon="typcn:social-twitter"></span>
                    </span>
                    <span>
                        <span className="iconify" data-icon="foundation:social-linkedin"></span>
                    </span>
                </div>
            </div>
            <div className='avatar-wrap'>
                <img alt='about' src={info.avatar_url}/>
            </div>
            <section className='bio-top'>
                <h3>{ info.name }</h3>
                <span className='bio-text'>{ info.bio }</span>
                <span>{ info.location }</span>
            </section>
            <section className='bio-bottom'>
                <p>Full stack engineer focused on building reusable, efficient and scalable next generation platforms. Five years of working experience in application development and testing.</p>
                <span>Public Repositories: { info.public_repos }</span>
            </section>
        </MobileAboutContainer>
    )
}