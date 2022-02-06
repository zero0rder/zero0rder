import Projects from "./projects";

const LandingPage = () => {

    return (
        <>
            <section className="my-2 border-b border-b-slate-400">
                <div className="flex">
                    <span className="intro-img-wrapper p-2">
                        <img className="rounded-full border border-black" src="https://avatars.githubusercontent.com/u/11478868?v=4" />
                    </span>
                    <div className="intro-text-wrapper flex flex-col justify-center ml-2">
                        <div className="text-2xl text-black font-semibold">Dwight Smith</div>
                        <div className="text-gray-500 font-medium">Software Developer</div>
                    </div>
                </div>
            </section>
            <Projects />
        </>
    )
}


export default LandingPage;