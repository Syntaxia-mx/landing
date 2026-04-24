import logo from "../assets/logos/syntaxia-logo.png";
import { Instagram, Twitter, Youtube } from "lucide-react";
import { SiTiktok, SiWhatsapp } from "react-icons/si";

export const Footer = () => {
    return (
        <footer className="border-t border-white/10 bg-black px-5 py-10">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
                <img src={logo} alt="Syntaxia" className="h-10 w-auto" />

                <div className="flex items-center gap-4 text-xl text-zinc-400">
                    <a href="https://wa.me/525659747942" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
                        <SiWhatsapp />
                    </a>
                    <a href="https://www.tiktok.com/@syntaxiamx" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
                        <SiTiktok />
                    </a>
                    <a href="https://www.youtube.com/@syntaxiaMx" target="_blank" rel="noopener noreferrer" className="hover:text-red-400">
                        <Youtube />
                    </a>
                    <a href="https://www.instagram.com/syntaxiamx/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-300">
                        <Instagram />
                    </a>
                    <a href="https://x.com/SyntaxiaMx" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400">
                        <Twitter />
                    </a>
                </div>

                <p className="text-sm text-zinc-500">
                    © {new Date().getFullYear()} Syntaxia MX. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
};