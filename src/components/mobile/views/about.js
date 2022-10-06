import { useFetch } from '../../../hooks/useFetch'
import { MobileAboutContainer } from '../styled'

export const MobileAbout = () => {
    const info = useFetch(process.env.REACT_APP_URI)
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
                <p>Full stack engineer focused on building reusable and efficient next generation software. Five years of working experience in application development.</p>
                <span>Public Repositories: { info.public_repos }</span>
            </section>
        </MobileAboutContainer>
    )
}