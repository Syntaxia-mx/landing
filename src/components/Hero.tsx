import { motion } from "framer-motion";
import { Button } from "./Button";
import { Instagram, Youtube, Twitter } from "lucide-react";
import { SiTiktok, SiWhatsapp } from "react-icons/si";

export const Hero = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            id="hero"
            className="h-screen flex flex-col items-center justify-center bg-black text-white text-center px-6"
        >
            <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold mb-4"
            >
                De la idea al <span className="text-[#aa0000]">código</span>,
                <br /> del código a la <span className="text-[#aa0000]">solución</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-lg md:text-2xl text-gray-400 mb-8 max-w-2xl"
            >
                Creamos software a la medida, herramientas para desarrolladores
                y contenido que impulsa la innovación.
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="flex flex-col items-center gap-4"
            >
                <div className="flex flex-col md:flex-row gap-4">
                    <Button variant="primary" onClick={() => scrollToSection("contact")}>
                        Hablemos
                    </Button>

                    <Button variant="outline" onClick={() => scrollToSection("tools")}>
                        Explora herramientas
                    </Button>
                </div>

                {/* Redes sociales debajo de los botones */}
                <motion.div
                    className="flex gap-6 mt-4 text-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                >
                    {/* Texto oculto para SEO */}
                    <span className="sr-only">Redes sociales de Syntaxia</span>

                    <a
                        href="https://wa.me/5659747942"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Contacta con Syntaxia por WhatsApp"
                        className="hover:text-green-500 transition-transform transform hover:scale-110"
                    >
                        <SiWhatsapp />
                    </a>
                    <a
                        href="https://www.tiktok.com/@syntaxiamx"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Sigue a Syntaxia en TikTok"
                        className="hover:text-pink-500 transition-transform transform hover:scale-110"
                    >
                        <SiTiktok />
                    </a>
                    <a
                        href="https://www.youtube.com/@syntaxiaMx"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Sigue a Syntaxia en YouTube"
                        className="hover:text-red-500 transition-transform transform hover:scale-110"
                    >
                        <Youtube />
                    </a>
                    <a
                        href="https://www.instagram.com/syntaxiamx/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Sigue a Syntaxia en Instagram"
                        className="hover:text-pink-400 transition-transform transform hover:scale-110"
                    >
                        <Instagram />
                    </a>
                    <a
                        href="https://x.com/SyntaxiaMx"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Sigue a Syntaxia en X"
                        className="hover:text-blue-400 transition-transform transform hover:scale-110"
                    >
                        <Twitter />
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
};
