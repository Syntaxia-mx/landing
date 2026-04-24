import type { FormEvent } from "react";
import { ArrowRight, Mail, MessageSquare, User } from "lucide-react";

export const ContactSection = () => {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.currentTarget;
        const data = new FormData(form);

        const name = String(data.get("name") || "");
        const email = String(data.get("email") || "");
        const type = String(data.get("type") || "");
        const message = String(data.get("message") || "");

        const text = `
Hola Syntaxia, quiero cotizar un proyecto.

Nombre: ${name}
Correo: ${email}
Tipo de proyecto: ${type}

Mensaje:
${message}
`.trim();

        window.open(
            `https://wa.me/525659747942?text=${encodeURIComponent(text)}`,
            "_blank",
            "noopener,noreferrer"
        );

        form.reset();
    };

    return (
        <section id="contacto" className="relative bg-black px-5 py-28">
            <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
                <div>
                    <span className="mb-4 inline-flex rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-bold text-red-100">
                        Construyamos tu próxima experiencia digital
                    </span>

                    <h2 className="text-4xl font-black tracking-tight md:text-6xl">
                        Cuéntanos qué quieres crear.
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-zinc-400">
                        Te ayudamos a aterrizar tu idea, definir una solución y construir una
                        presencia digital que realmente se vea profesional.
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl md:p-8"
                >
                    <div className="grid gap-5">
                        <div>
                            <label className="mb-2 block text-sm font-bold">Nombre</label>
                            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/50 px-4 py-3">
                                <User className="h-5 w-5 text-zinc-500" />
                                <input
                                    name="name"
                                    required
                                    placeholder="Tu nombre"
                                    className="w-full bg-transparent outline-none placeholder:text-zinc-600"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-bold">Correo</label>
                            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/50 px-4 py-3">
                                <Mail className="h-5 w-5 text-zinc-500" />
                                <input
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="tu-correo@empresa.com"
                                    className="w-full bg-transparent outline-none placeholder:text-zinc-600"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-bold">Tipo de proyecto</label>
                            <select
                                name="type"
                                required
                                className="w-full rounded-2xl border border-white/10 bg-black/70 px-4 py-3 outline-none"
                            >
                                <option value="">Selecciona una opción</option>
                                <option value="Landing page">Landing page</option>
                                <option value="Software a la medida">Software a la medida</option>
                                <option value="E-commerce">E-commerce</option>
                                <option value="Dashboard o sistema interno">Dashboard o sistema interno</option>
                                <option value="No estoy seguro">No estoy seguro</option>
                            </select>
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-bold">Mensaje</label>
                            <div className="flex gap-3 rounded-2xl border border-white/10 bg-black/50 px-4 py-3">
                                <MessageSquare className="mt-1 h-5 w-5 shrink-0 text-zinc-500" />
                                <textarea
                                    name="message"
                                    required
                                    rows={5}
                                    placeholder="Cuéntanos tu idea..."
                                    className="w-full resize-none bg-transparent outline-none placeholder:text-zinc-600"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#aa0000] px-6 py-4 font-black text-white shadow-[0_0_35px_rgba(170,0,0,0.45)] transition hover:bg-red-700"
                        >
                            Enviar por WhatsApp
                            <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};