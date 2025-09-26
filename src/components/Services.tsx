import { motion } from "framer-motion";

const services = [
    { title: "Landing Pages", desc: "Sitios modernos, rápidos y optimizados para captar clientes." },
    { title: "APIs e Integraciones", desc: "Automatizamos y conectamos tus procesos de negocio." },
    { title: "E-commerce", desc: "Tiendas en línea escalables y seguras para tu negocio." },
    { title: "Software a medida", desc: "Soluciones personalizadas para tus necesidades únicas." },
    { title: "Branding & Diseño UI/UX", desc: "Creamos experiencias visuales atractivas y funcionales." },
    { title: "Optimización SEO", desc: "Haz que tu negocio aparezca en los primeros resultados de Google." },
    { title: "Aplicaciones Móviles", desc: "Apps nativas e híbridas con gran rendimiento." },
    { title: "Mantenimiento y Soporte", desc: "Te acompañamos para que tu proyecto siempre esté online y actualizado." },
];

export const Services = () => {
    return (
        <section
            id="services"
            className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-20"
        >
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-6 text-[#aa0000] text-center"
            >
                Nuestros Servicios de Desarrollo de Software
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-gray-400 mb-12 max-w-3xl text-center text-lg leading-relaxed"
            >
                En un mundo digital que no se detiene, ofrecemos{" "}
                <span className="font-bold text-white">calidad, velocidad y soluciones a tu medida</span>.
                No solo construimos proyectos,{" "}
                <span className="font-bold text-white">construimos ventajas competitivas</span> para tu marca,
                incluyendo desarrollo web, software a medida, APIs e integraciones eficientes.
            </motion.p>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl" role="list">
                {services.map((s, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 hover:border-[#aa0000] transition-colors cursor-pointer shadow-lg"
                        role="listitem"
                    >
                        <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                        <p className="text-gray-400">{s.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>

    );
};
