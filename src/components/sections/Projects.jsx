import { RevealOnScroll } from "../RevealOnScroll";
import gipsman_logo from "/src/assets/gipsman_logo.png";
import github_logo from "/src/assets/github_logo.svg";

export const Projects = () => {
    return (
        /* kontener sekcji */
        <section 
            id="projects"
            className="min-h-9/12 flex items-center justify-center py-20"
        >
            <RevealOnScroll>

            {/* glowny kontener */}
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12 bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"> Wyróżnione Projekty </h2>

                {/* kontener logiki kolumn/grida itp. */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/*GIPSMAN*/}
                    <div className="p-8 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">

                        <h3 className="text-2xl font-bold mb-4">Strona dla Gipsman sp. z o. o.</h3>
                        <p className="text-gray-400 mb-6 text-lg">
                            Strona gipsman.eu prezentuje ofertę firmy specjalizującej 
                            się w kompleksowych usługach budowlanych, wykończeniowych, 
                            energetycznych oraz systemach HVAC 
                            (ogrzewanie, wentylacja, klimatyzacja).
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Wordpress", "PHP", "MySql"].map((tech,key) => (
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-2 px-4 rounded-full text-base hover:bg-blue-500/20
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
                                Zobacz projekt ➔ 
                            </a>
                            <a href="https://www.gipsman.eu/"><img className="size-7 content-start my-4 hover:-translate-y-0.5 transition-all" src={gipsman_logo} alt="gipsman_logo" /></a>
                            <a href="https://www.gipsman.eu/"><img className="size-7 content-start my-4 hover:-translate-y-0.5 transition-all" src={github_logo} alt="github_logo" /></a>
                        </div>
                    </div>

                    {/*EPJPROJEKT*/}
                    <div className="p-8 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">

                        <h3 className="text-2xl font-bold mb-4">Strona dla Gipsman sp. z o. o.</h3>
                        <p className="text-gray-400 mb-6 text-lg">
                            Strona gipsman.eu prezentuje ofertę firmy specjalizującej 
                            się w kompleksowych usługach budowlanych, wykończeniowych, 
                            energetycznych oraz systemach HVAC 
                            (ogrzewanie, wentylacja, klimatyzacja).
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Wordpress", "PHP", "MySql"].map((tech,key) => (
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-2 px-4 rounded-full text-base hover:bg-blue-500/20
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
                                Zobacz projekt ➔ 
                            </a>
                            <a href="https://www.gipsman.eu/"><img className="size-7 content-start my-4 hover:-translate-y-0.5 transition-all" src={gipsman_logo} alt="gipsman_logo" /></a>
                            <a href="https://www.gipsman.eu/"><img className="size-7 content-start my-4 hover:-translate-y-0.5 transition-all" src={github_logo} alt="github_logo" /></a>
                        </div>
                    </div>

                    {/*WMKREALESTATE*/}
                    <div className="p-8 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">

                        <h3 className="text-2xl font-bold mb-4">Strona dla Gipsman sp. z o. o.</h3>
                        <p className="text-gray-400 mb-6 text-lg">
                            Strona gipsman.eu prezentuje ofertę firmy specjalizującej 
                            się w kompleksowych usługach budowlanych, wykończeniowych, 
                            energetycznych oraz systemach HVAC 
                            (ogrzewanie, wentylacja, klimatyzacja).
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Wordpress", "PHP", "MySql"].map((tech,key) => (
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-2 px-4 rounded-full text-base hover:bg-blue-500/20
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
                                Zobacz projekt ➔ 
                            </a>
                            <a href="https://www.gipsman.eu/"><img className="size-7 content-start my-4 hover:-translate-y-0.5 transition-all" src={gipsman_logo} alt="gipsman_logo" /></a>
                            <a href="https://www.gipsman.eu/"><img className="size-7 content-start my-4 hover:-translate-y-0.5 transition-all" src={github_logo} alt="github_logo" /></a>
                        </div>
                    </div>

                    {/*OSIEDLE POD DEBEM*/}
                    <div className="p-8 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">

                        <h3 className="text-2xl font-bold mb-4">Strona dla Gipsman sp. z o. o.</h3>
                        <p className="text-gray-400 mb-6 text-lg">
                            Strona gipsman.eu prezentuje ofertę firmy specjalizującej 
                            się w kompleksowych usługach budowlanych, wykończeniowych, 
                            energetycznych oraz systemach HVAC 
                            (ogrzewanie, wentylacja, klimatyzacja).
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Wordpress", "PHP", "MySql"].map((tech,key) => (
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-2 px-4 rounded-full text-base hover:bg-blue-500/20
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
                                Zobacz projekt ➔ 
                            </a>
                            <a href="https://www.gipsman.eu/"><img className="size-7 content-start my-4 hover:-translate-y-0.5 transition-all" src={gipsman_logo} alt="gipsman_logo" /></a>
                            <a href="https://www.gipsman.eu/"><img className="size-7 content-start my-4 hover:-translate-y-0.5 transition-all" src={github_logo} alt="github_logo" /></a>
                        </div>
                    </div>

                </div>

            </div>
            </RevealOnScroll>
        </section>
    );
}