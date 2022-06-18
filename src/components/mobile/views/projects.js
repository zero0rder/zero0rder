import { MobileProjectContainer } from '../styled';
import { repos } from './../../../utils/repos/repoData';

export const MobileProjects = () => {

    return (
        <MobileProjectContainer>
            <h2>Projects</h2>
            <div className='proj-items-wrap'>
                {
                    repos.map((e, i) => (
                        <div key={i}>
                            <img alt='project' src=''/>
                            <span>{e.name}</span>
                        </div>
                    ))
                }
            </div>
        </MobileProjectContainer>
    )
}