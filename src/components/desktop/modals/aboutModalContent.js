import { useFetch } from '../../../hooks/useFetch'
import { DesktopModalAboutBody } from './styled'

const AboutModalContent = () => {
    const info = useFetch(process.env.REACT_APP_URI)
    if(!info) return <iconify-icon icon="eos-icons:bubble-loading"></iconify-icon>

    return (
        <DesktopModalAboutBody>
            <div className='avatar-wrap'>
                <img alt='about' src={info.avatar_url}/>
            </div>
            <section>
                <h3>{ info.name }</h3>
                <span className='bio-text'>{ info.bio }</span>
                <span className='bio-locale'>{ info.location }</span>
            </section>
        </DesktopModalAboutBody>
    )
}

export default AboutModalContent