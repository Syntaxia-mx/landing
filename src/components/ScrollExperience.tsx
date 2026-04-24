import { useEffect, useRef, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import laptopStage01 from "../assets/landing/laptop-stage-01.png";
import laptopStage02 from "../assets/landing/laptop-stage-02.png";
import laptopStage03 from "../assets/landing/laptop-stage-03.png";
import uiFloating from "../assets/landing/ui-floating.png";

const checks = [
    "Diseño premium",
    "Experiencia moderna",
    "Enfoque en conversión",
    "Desarrollo a la medida",
];

export const ScrollExperience = () => {
    const sectionRef = useRef<HTMLElement | null>(null);
    const [activeStage, setActiveStage] = useState("1");

    useEffect(() => {
        const section = sectionRef.current;

        if (!section) return;

        let animationFrame = 0;

        const updateActiveStage = () => {
            cancelAnimationFrame(animationFrame);

            animationFrame = requestAnimationFrame(() => {
                const steps = Array.from(section.querySelectorAll<HTMLElement>(".story-step"));

                if (!steps.length) return;

                const viewportCenter = window.innerHeight / 2;

                let closestStep = steps[0];
                let closestDistance = Number.POSITIVE_INFINITY;

                steps.forEach((step) => {
                    const rect = step.getBoundingClientRect();
                    const stepCenter = rect.top + rect.height / 2;
                    const distance = Math.abs(stepCenter - viewportCenter);

                    if (distance < closestDistance) {
                        closestDistance = distance;
                        closestStep = step;
                    }
                });

                const nextStage = closestStep.dataset.stage || "1";

                setActiveStage((currentStage) => {
                    return currentStage === nextStage ? currentStage : nextStage;
                });
            });
        };

        updateActiveStage();

        window.addEventListener("scroll", updateActiveStage, { passive: true });
        window.addEventListener("resize", updateActiveStage);

        return () => {
            cancelAnimationFrame(animationFrame);
            window.removeEventListener("scroll", updateActiveStage);
            window.removeEventListener("resize", updateActiveStage);
        };
    }, []);

    const scrollToContact = () => {
        document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="inicio"
            ref={sectionRef}
            className={`scroll-story-section stage-active-${activeStage}`}
        >
            <div className="story-sticky">
                <img
                    src={laptopStage01}
                    alt="Laptop con diseño web premium de Syntaxia"
                    className={`visual-stage stage-bg-01 ${activeStage === "1" ? "is-active" : ""}`}
                />

                <img
                    src={laptopStage02}
                    alt="Laptop con componentes web saliendo de la pantalla"
                    className={`visual-stage stage-bg-02 ${activeStage === "2" ? "is-active" : ""}`}
                />

                <img
                    src={laptopStage03}
                    alt="Laptop con paneles y métricas de crecimiento"
                    className={`visual-stage stage-bg-03 ${activeStage === "3" ? "is-active" : ""}`}
                />

                <img
                    src={uiFloating}
                    alt="Paneles flotantes de ventas, rendimiento y conversión"
                    className={`visual-stage stage-bg-floating ${activeStage === "4" ? "is-active" : ""}`}
                />

                <div className="story-overlay" />
                <div className="story-grid" />
            </div>

            <div className="story-content">
                <article className="story-step story-left step-01" data-stage="1">
                    <div className="story-card">
                        <span className="story-pill">Primera impresión premium</span>

                        <h1>Tu página debe vender desde el primer segundo.</h1>

                        <p>
                            Creamos experiencias digitales modernas que hacen que tu marca se vea
                            profesional, confiable y lista para crecer.
                        </p>

                        <button onClick={scrollToContact} className="story-primary-button">
                            Quiero una página así
                            <ArrowRight className="h-5 w-5" />
                        </button>
                    </div>
                </article>

                <article className="story-step story-right step-02" data-stage="2">
                    <div className="story-card">
                        <span className="story-pill">Diseño con intención</span>

                        <h2>Nada plano. Nada genérico. Todo debe comunicar valor.</h2>

                        <p>
                            Tu cliente no solo entra a una web: entra a una experiencia que debe
                            hacerlo confiar, interesarse y tomar acción.
                        </p>
                    </div>
                </article>

                <article className="story-step story-left step-03" data-stage="3">
                    <div className="story-card">
                        <span className="story-pill">Movimiento y profundidad</span>

                        <h2>La presentación de tu marca también puede impresionar.</h2>

                        <p>
                            Creamos experiencias visuales que hacen que tu sitio no solo se vea profesional,
                            sino que también conecte, sorprenda y deje una impresión memorable en cada visitante.
                        </p>
                    </div>
                </article>

                <article className="story-step story-right step-04" data-stage="4">
                    <div className="story-card">
                        <span className="story-pill">Resultados visibles</span>

                        <h2>Mostramos crecimiento, métricas y confianza.</h2>

                        <p>
                            Paneles, gráficas y visuales de conversión ayudan a comunicar que tu
                            negocio no solo se ve moderno: también está preparado para vender más.
                        </p>
                    </div>
                </article>

                <article className="story-step story-center step-05" data-stage="4">
                    <div className="story-card story-final-card">
                        <span className="story-pill">Syntaxia MX</span>

                        <h2>Convertimos ideas en resultados digitales.</h2>

                        <p>
                            Hagamos que tu negocio se vea moderno, confiable y preparado para
                            convencer a tus clientes desde tu presentación.
                        </p>

                        <div className="story-checks">
                            {checks.map((item) => (
                                <div key={item} className="story-check">
                                    <CheckCircle2 className="h-5 w-5" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="story-actions">
                            <button onClick={scrollToContact} className="story-primary-button">
                                Cotizar mi proyecto
                                <ArrowRight className="h-5 w-5" />
                            </button>

                            <a
                                href="https://wa.me/525659747942"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="story-secondary-button"
                            >
                                WhatsApp
                            </a>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
};