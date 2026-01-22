export const Projects = () => {
    return (
        <section 
            id="projects"
            className="min-h-screen flex items-center justify-center py-20"
        >
            {/*  */}
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"> Featured Projects </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">

                        <h3 className="text-xl font-bold mb-2">Company Website</h3>
                        <p className="text-gray-400 mb-4">
                            Scalable company website, made for big building 
                            industry co. build with idea of flexibility, 
                            modern layout, fun ui effects and transparency 
                            of content.
                        </p>
                        <div>
                            {["Wordpress", "PHP", "MySql"].map((tech,key) => (
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-start items-center gap-4">
                            <a 
                                href="https://www.gipsman.eu/" 
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                            > 
                                View Project ➔ 
                            </a>
                            <a href="https://www.gipsman.eu/"><img className="size-5 content-start my-4 hover:-translate-y-0.5 transition-all" src="/src/assets/gipsman_logo.png" alt="gipsman_logo" /></a>
                            <a href="https://www.gipsman.eu/"><img className="size-5 content-start my-4 hover:-translate-y-0.5 transition-all" src="/src/assets/github_logo.svg" alt="github_logo" /></a>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    );
}