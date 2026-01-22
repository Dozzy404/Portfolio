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
        "C#"
    ];

    const GeneralSkills = [
        "C++", 
    ];

    return ( 
        <section 
            id="about"
            className="min-h-9/12 flex items-center justify-center py-20"
        >    
            <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">

                <h2 className="text-4xl font-bold mb-12 bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent  text-center">
                    O mnie
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

                        <div className="rounded-xl p-8 hover:-translate-y-1 transition-all">
                            <h3 className="text-2xl font-bold mb-6">General</h3>
                            <div className="flex flex-wrap gap-2">
                                {GeneralSkills.map((tech, key) => (
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
                            Edukacja
                        </h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-3 text-lg">
                            <li>
                                <strong>Technik Programista</strong><br></br><a href="https://zsme.tarnow.pl" className="text-blue-500">Zespół Szkół Mechaniczno Elektrycznych</a> <br></br>(2023 - do teraz)
                            </li>
                            <li>
                                <a href="https://www.udemy.com/course/wordpress-website-tutorial/" className="text-blue-500">Kurs obsługi Wordpress</a> (Udemy)
                            </li>
                            <li>
                                Kurs obsługi Drona <br></br>(AST Auto Spa & Detailing Tarnów)
                            </li>
                        </ul>
                    </div>

                    <div className="p-8 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-2xl font-bold mb-6">
                            Doświadczenie zawodowe
                        </h3>

                        <div className="space-y-4 text-gray-300 text-lg">
                            
                            <div>
                                <h4 className="font-semibold text-lg">Młodszy specjalist ds. IT WMK INVESTMENT GROUP <br></br> (2026 - do teraz)</h4>
                                <p>Wspierałem codzienne funkcjonowanie infrastruktury IT w firmie, zajmując się
                                    diagnostyką problemów technicznych oraz wsparciem użytkowników.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg">3D Sfera  (2025 - do teraz)</h4>
                                <p>
                                    Projektowanie i tworzenie stron w Wordpress dla klientów, w mojej własnej agencji marketingu internetowego <a href="https://3dsfera.com/" className="text-blue-500">3D Sfera</a>
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