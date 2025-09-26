import type { MouseEvent } from "react";
import logo from "../assets/logos/syntaxia.png";

export const Navbar = () => {
    const scrollToSection = (id: string, e?: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
        e?.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav
            className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-zinc-800"
            role="navigation"
            aria-label="Menú principal"
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                {/* Logo con scroll al inicio y efecto hover */}
                <button
                    onClick={() => scrollToSection("hero")}
                    aria-label="Ir al inicio"
                    className="flex items-center focus:outline-none transition-transform transform hover:scale-110"
                >
                    <img src={logo} alt="Logo de Syntaxia" className="h-10 md:h-12 object-contain" />
                </button>

                <ul className="hidden md:flex gap-6 text-gray-300">
                    <li>
                        <a
                            href="#hero"
                            onClick={(e) => scrollToSection("hero", e)}
                            className="hover:text-[#aa0000] transition-colors"
                            aria-label="Ir a inicio"
                        >
                            Inicio
                        </a>
                    </li>
                    <li>
                        <a
                            href="#services"
                            onClick={(e) => scrollToSection("services", e)}
                            className="hover:text-[#aa0000] transition-colors"
                            aria-label="Ir a servicios"
                        >
                            Servicios
                        </a>
                    </li>
                    <li>
                        <a
                            href="#tools"
                            onClick={(e) => scrollToSection("tools", e)}
                            className="hover:text-[#aa0000] transition-colors"
                            aria-label="Ir a herramientas"
                        >
                            Herramientas
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            onClick={(e) => scrollToSection("contact", e)}
                            className="hover:text-[#aa0000] transition-colors"
                            aria-label="Ir a contacto"
                        >
                            Contacto
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
