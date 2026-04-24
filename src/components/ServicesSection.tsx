import { services } from "../data/landingContent";

export const ServicesSection = () => {
    return (
        <section id="servicios" className="relative bg-black px-5 py-28">
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto mb-16 max-w-3xl text-center">
                    <span className="mb-4 inline-flex rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-bold text-red-100">
                        Lo que podemos construir para ti
                    </span>

                    <h2 className="text-4xl font-black tracking-tight md:text-6xl">
                        Soluciones digitales que hacen que tu negocio se vea más grande.
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-zinc-400">
                        Desde una landing page moderna hasta un sistema completo para automatizar tu operación.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => {
                        const Icon = service.icon;

                        return (
                            <article
                                key={service.title}
                                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition hover:-translate-y-2 hover:border-red-500/50"
                            >
                                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-red-600/20 blur-3xl transition group-hover:scale-125" />

                                <div className="relative z-10">
                                    <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-black/40">
                                        <Icon className="h-7 w-7 text-red-300" />
                                    </div>

                                    <h3 className="text-2xl font-black">{service.title}</h3>

                                    <p className="mt-4 leading-7 text-zinc-400">{service.desc}</p>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};