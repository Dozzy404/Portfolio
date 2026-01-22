import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
    return (
        <section 
            id="home" 
            className="h-screen flex items-center justify-center relative"
        >
            <RevealOnScroll>
            <div className="text-center z-10 px-4">
                <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-linear-to-r from-blue-500 to-cyan-400  bg-clip-text text-transparent leading-right">
                    Cześć, Nazywam się Dawid.
                </h1>

                <p
                    className="text-gray-400 text-xl mb-12 max-w-lg mx-auto"
                >
                    Jestem uczącym się programistą z doświadczeniem <br></br> w tworzeniu stron internetowych w WordPress.
                </p>

                <div className="flex justify-center space-x-4">
                    <a href="#projects" className="bg-blue-500 text-white py-4 px-8 text-lg roundend font-medium transition relative overflow-hidden 
                    hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
                        Zobacz projekty
                    </a>

                    <a 
                    href="#contact" 
                    className="
                    border border-blue-500/50 
                    text-blue-500 py-4 px-8 text-lg rounded font-medium 
                    transition-all duration-200
                    hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
                    >
                        Napisz do mnie!
                    </a>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
}