import logo from "../assets/logos/syntaxia-logo.png";
import { navItems } from "../data/landingContent";

export const Navbar = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <button onClick={() => scrollTo("inicio")} className="flex items-center">
          <img
            src={logo}
            alt="Syntaxia"
            className="h-9 w-auto md:h-11"
          />
        </button>

        <ul className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 text-sm text-zinc-300 md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollTo(item.id)}
                className="rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/525659747942"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-[#aa0000] px-5 py-2.5 text-sm font-bold text-white shadow-[0_0_35px_rgba(170,0,0,0.45)] transition hover:bg-red-700"
        >
          Cotizar
        </a>
      </nav>
    </header>
  );
};