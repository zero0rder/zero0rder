import { useFetch } from '../../../hooks/useFetch'
import { MobileProjectContainer } from '../styled'

export const MobileProjects = () => {
    const repos = useFetch(`${process.env.REACT_APP_URI}/repos?sort=updated&per_page=10&page=1`)
    if(!repos) return <iconify-icon icon="eos-icons:bubble-loading"></iconify-icon>

    return (
        <MobileProjectContainer>
            <div className='proj-items-wrap'>
                { repos.map((e) => (
                        <div key={e.id}>
                            <a href={e.homepage ?? e.html_url} target='_blank' rel='noopener noreferrer'>
                                <span>{e.name}</span>
                            </a>
                        </div>
                    ))
                }
            </div>
        </MobileProjectContainer>
    )
}