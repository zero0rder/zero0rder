import { useEffect, useState } from 'react'
import { fetchRepos } from '../../../utils/http/api'
import { MobileProjectContainer } from '../styled'

export const MobileProjects = () => {
    const [repos, setRepos] = useState(null)
    useEffect(() => {
        const controller = new AbortController()
        const getRepos = fetchRepos(`${process.env.REACT_APP_URI}/repos?sort=updated&per_page=10&page=1`, controller.signal)
        const unPkg = (async () => {
            const res = await getRepos
            setRepos(() => res)
        })

        unPkg()
        return () => controller?.abort()
        
    }, [])

    if(!repos) return 'Loading...'

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