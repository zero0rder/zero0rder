//import { useState, useEffect } from 'react';
//import axios from "axios";
//import { repoUrl } from '../services/repos';
//const repoIds = ['420233228', '313418879'];
//const [ data, setData ] = useState(null);
// useEffect(() => {
//     axios.get(repoUrl)
//         .then(res => setData(res.data))
//         .catch(err => console.log('error fetching repos => ', err));
// }, []);

const Projects = () => {
    
    return (
        <section className="catalog-wrapper px-3">
            <ul className="cards flex flex-col gap-3">
                <li className="border border-black p-3 rounded-lg shadow-lg">
                    <article className="flex flex-col space-y-2">
                        <span className="font-semibold">Crypto Desktop</span>
                        <p className="text-sm text-slate-500">A realtime web application displaying the latest cryptocurrency and exchanges information.</p>
                        <div className="techstack-tags text-xs flex space-x-3">
                            <span>
                                <span className="tag-emblem rounded-full"></span>
                                ReactJS
                            </span>
                            <span>
                                <span className="tag-emblem rounded-full"></span>
                                Redux
                            </span>
                            <span>
                                <span className="tag-emblem rounded-full"></span>
                                RapidApi
                            </span>
                        </div>
                    </article>
                </li>
                <li className="border border-black p-3 rounded-lg shadow-lg">
                    <article className="flex flex-col space-y-2">
                        <span className="font-semibold">Reservation App</span>
                        <p className="text-sm text-slate-500">A realtime web application displaying the latest cryptocurrency and exchanges information.</p>
                        <div className="techstack-tags text-xs flex space-x-3">
                            <span>
                                <span className="tag-emblem rounded-full"></span>
                                ReactJS
                            </span>
                            <span>
                                <span className="tag-emblem rounded-full"></span>
                                Redux
                            </span>
                            <span>
                                <span className="tag-emblem rounded-full"></span>
                                RapidApi
                            </span>
                        </div>
                    </article>
                </li>
            </ul>
        </section>
    )
}

export default Projects;