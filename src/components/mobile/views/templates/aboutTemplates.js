import { ProfessionalWork } from '../../../../utils/repos/repoData';

const introTemplate = (
    <section className='intro-template'>
        <table>
            <tbody>
                <tr>
                    <td>Location:</td>
                    <td>NYC, USA</td>
                </tr>
                <tr>
                    <td>Profession:</td>
                    <td>Software Developer</td>
                </tr>
                <tr>
                    <td>Experience:</td>
                    <td>4.5 Years</td>
                </tr>
            </tbody>
        </table>
    </section>
);

const skillsTemplate = (<section>skill body</section>);

const historyTemplate = (
    <section className='history-template'>
        <h1>Classified <span className="iconify" data-icon="noto:warning"></span></h1>
    </section>
);

const workTemplate = (
    <section className='work-template'>
         <ul>
            { ProfessionalWork?.map((j, i) => (
                <li key={i}>
                    <span>{j.company}</span>
                    <span>{j.location}</span>
                    <span>{j.position}</span>
                    <span>{`${j.start} - ${j.end ?? 'Present'}`}</span>
                </li>
            ))}
           </ul>
    </section>
);


export const initialAboutState = [
    { title: 'intro', view: introTemplate, isActive: true },
    { title: 'skills', view: skillsTemplate, isActive: false },
    { title: 'history', view: historyTemplate, isActive: false },
    { title: 'work', view: workTemplate, isActive: false }
];