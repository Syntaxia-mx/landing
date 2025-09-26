import { motion } from "framer-motion";
import { Button } from "./Button";

export const Contact = () => {
    return (
        <section
            id="contact"
            className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-20"
        >
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-6 text-[#aa0000]"
            >
                Contáctanos
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-gray-400 mb-8 max-w-xl text-center"
            >
                ¿Listo para llevar tu proyecto de <strong>software a la medida</strong> al siguiente nivel?
                Contáctanos y construyamos juntos <strong>soluciones digitales, desarrollo web y aplicaciones a medida</strong> que impulsen tu negocio.
            </motion.p>

            <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
                className="w-full max-w-lg bg-zinc-900/50 p-8 rounded-xl border border-zinc-800 space-y-6"
            >
                <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Nombre completo
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="w-full p-3 rounded-lg bg-black border border-zinc-700 focus:border-[#aa0000] outline-none"
                        placeholder="Tu nombre"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Correo electrónico
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full p-3 rounded-lg bg-black border border-zinc-700 focus:border-[#aa0000] outline-none"
                        placeholder="Tu correo electrónico"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Mensaje o descripción de tu proyecto
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        className="w-full p-3 rounded-lg bg-black border border-zinc-700 focus:border-[#aa0000] outline-none resize-none"
                        placeholder="Cuéntanos tu idea o necesidades"
                    />
                </div>


                <div className="text-center">
                    <Button variant="primary" type="submit">
                        Enviar mensaje
                    </Button>
                </div>
            </motion.form>
        </section>
    );
};
