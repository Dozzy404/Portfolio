import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from 'emailjs-com'

export const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY)
            .then((result) => {
                alert("Wiadomośc wysłana!");
                setFormData({name: "", email: "", message: ""})
            })
            .catch(() => alert("Oops! Coś poszło źle, proszę spróbój ponownie później."));
    };

    return (
        <section
            id="contact"
            className="min-h-9/12 flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="px-4 w-4xl">

                    {/* Nagłówek z gradientem, rozciągnięty na całą szerokość */}
                    <h2 className="text-4xl font-bold mb-12 text-center w-full">
                        <span className="bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                            Bądźmy w kontakcie.
                        </span>
                    </h2>

                    {/* Formularz */}
                    <form className="space-y-6 w-full" onSubmit={handleSubmit}>

                        <div className="relative">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-4 text-lg text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="Wprowadź swoje Imię."
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                            />
                        </div>

                        <div>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-4 text-lg text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="przykladowy_mail@gmail.com"
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                            />
                        </div>

                        <div>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={6}
                                className="resize-none w-full bg-white/5 border border-white/10 rounded px-4 py-4 text-lg text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="Wprowadź swoją wiadomość."
                                value={formData.message}
                                onChange={(e) => setFormData({...formData, message: e.target.value})}
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-4 px-6 text-lg rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                        >
                            Wyślij wiadomość
                        </button>

                    </form>
                </div>
            </RevealOnScroll>
        </section>
    );
}
