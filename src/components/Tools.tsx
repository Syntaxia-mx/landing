import { motion } from "framer-motion";

const tools = [
    {
        title: "Syntaxia Tools",
        desc: "¡Haz tu vida como desarrollador más fácil con Syntaxia Tools! 🚀\nConvierte texto y archivos entre Base64, Hex y Bytes, genera claves seguras con SHA, embellece JSON y XML, crea QR y mucho más. Todo en un solo lugar, rápido y sin complicaciones. 💻🔒",
        link: "https://syntaxia.mx/",
    },
    {
        title: "Lazy Notes",
        desc: "Tu asistente personal en forma de chat. Guarda información pendiente 📌, agenda tareas 🗓️, pon recordatorios ⏰ y organiza tus ideas 💡 de manera divertida y fácil. Todo con la interfaz amigable de un chat para que gestionar tu día sea más entretenido.",
        link: "/LazyNotes",
    }
];

export const Tools = () => {
    return (
        <section
            id="tools"
            className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-20"
        >
            {/* Título principal */}
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-4 text-[#aa0000] text-center"
            >
                Herramientas para Desarrolladores
            </motion.h2>

            {/* Descripción poderosa */}
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-gray-400 max-w-3xl text-center mb-12 text-lg leading-relaxed"
            >
                En Syntaxia creamos utilidades diseñadas para que los desarrolladores sean más
                productivos. Desde conversores y generadores de contraseñas hasta snippets
                inteligentes, nuestras herramientas te ayudan a optimizar tu trabajo y a
                enfocarte en lo que realmente importa: construir soluciones de calidad.
            </motion.p>

            {/* Tarjetas de herramientas */}
            <div className="grid gap-6 md:grid-cols-2 max-w-4xl" role="list">
                {tools.map((t, i) => (
                    <motion.a
                        key={i}
                        href={t.link}
                        aria-label={`Explora ${t.title}: ${t.desc}`}
                        role="listitem"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.15, duration: 0.3, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 hover:border-[#aa0000] transition-colors cursor-pointer text-center shadow-lg"
                    >
                        <h3 className="text-lg font-semibold mb-2">{t.title}</h3>
                        <p className="text-gray-400 text-sm">{t.desc}</p>
                    </motion.a>
                ))}
            </div>

        </section>
    );
};
