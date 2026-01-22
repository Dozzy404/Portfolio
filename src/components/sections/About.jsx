import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

    const frontendSkills = [
        "React", 
        "Angular",
        "CSS",
        "HTML",
        "JavaScript",
    ];

    const backendSkills = [
        "SQL", 
        "Python",
    ];

    return ( 
        <section 
            id="about"
            className="min-h-9/12 flex items-center justify-center py-20"
        >    
            <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">

                <h2 className="text-4xl font-bold mb-12 bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent  text-center">
                    About Me
                </h2>

                <div className="rounded-xl p-10 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-8 text-lg">
                        Jestem uczniem trzeciej klasy technikum na profilu 
                        technik programista. Aktywnie rozwijam swoje 
                        umiejętności w zakresie programowania oraz tworzenia 
                        aplikacji i stron internetowych. Pracuję z językami/frameworkami 
                        takimi jak:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div className="rounded-xl p-8 hover:-translate-y-1 transition-all">
                            <h3 className="text-2xl font-bold mb-6">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key) => (
                                    <span 
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-2 px-4 rounded-full text-base hover:bg-blue-500/20
                                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl p-8 hover:-translate-y-1 transition-all">
                            <h3 className="text-2xl font-bold mb-6">Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, key) => (
                                    <span 
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-2 px-4 rounded-full text-base hover:bg-blue-500/20
                                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>

                    <p className="text-gray-300 mb-8 text-lg">
                        Posiadam praktyczne doświadczenie w tworzeniu stron 
                        internetowych w WordPressie – projektowałem 
                        i wdrażałem strony od strony graficznej i funkcjonalnej 
                        dla klientów. Stale poszerzam swoją wiedzę, 
                        łącząc naukę w technikum z samodzielnym rozwojem 
                        oraz realizacją własnych projektów.
                    </p>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                    
                    <div className="p-8 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-2xl font-bold mb-6">
                            Eductaion 
                        </h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-3 text-lg">
                            <li>
                                <strong>B.S. in Computer Science</strong><br></br> - XYZ University (2027-2030)
                            </li>
                            <li>
                                Relevant Coursework: Data Structures, Web Development, Cloud Computing.
                            </li>
                        </ul>
                    </div>

                    <div className="p-8 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-2xl font-bold mb-6">
                            Work Experience
                        </h3>

                        <div className="space-y-4 text-gray-300 text-lg">
                            
                            <div>
                                <h4 className="font-semibold text-lg">Software Engineer at ABC Corp <br></br> (2020 - Present)</h4>
                                <p>Developed and maintained microservices for cloud-based
                                    applications.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg">Intern at DEF Startups (2019)</h4>
                                <p>
                                    Assisted in building front-end components and integration REST APIs
                                </p>
                            </div>

                        </div>

    

                    </div>

                </div>

            </div>

            </RevealOnScroll>
        </section>
    );
}