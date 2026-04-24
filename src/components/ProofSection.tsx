import { proofItems } from "../data/landingContent";

export const ProofSection = () => {
    return (
        <section id="resultados" className="relative overflow-hidden bg-black px-5 py-28">
            <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-700/20 blur-[120px]" />

            <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                    <span className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-zinc-300">
                        Por qué funciona
                    </span>

                    <h2 className="text-4xl font-black tracking-tight md:text-6xl">
                        No diseñamos para llenar espacio. Diseñamos para convencer.
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-zinc-400">
                        Una página moderna debe comunicar valor, confianza y claridad. Cada sección
                        debe acercar al cliente a tomar acción.
                    </p>
                </div>

                <div className="grid gap-5">
                    {proofItems.map((item) => {
                        const Icon = item.icon;

                        return (
                            <article
                                key={item.title}
                                className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl"
                            >
                                <div className="flex gap-5">
                                    <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-red-600/15">
                                        <Icon className="h-7 w-7 text-red-300" />
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-black">{item.title}</h3>
                                        <p className="mt-3 leading-7 text-zinc-400">{item.desc}</p>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};