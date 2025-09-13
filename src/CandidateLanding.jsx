import { useEffect, useRef } from "react";
import {
  ArrowRight, ShieldAlert, Landmark, Building2, Hammer,
  Gavel, Lock, ArrowUpRight, Send, Info, Sprout
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import portrait from "./assets/cristiandaly.jfif";
import { ExternalLink } from "lucide-react";

// Paleta (profesional, fondo blanco) basada en los colores del PNL
const COLORS = {
  ink: "#1B191A",   // texto principal
  navy: "#182D56",  // titulares
  amber: "#FBA931", // acento
  gray: "#E5E5E5",
  white: "#FFFFFF",
};

export default function CandidateLanding() {
  const navRef = useRef(null);
  const heroRef = useRef(null);
  const gridRef = useRef(null);
  const bioRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const fadeIn = (root) => {
      const nodes = root?.querySelectorAll("[data-fade]");
      if (!nodes?.length) return;
      // Importante: mantenemos opacity:1 siempre
      gsap.fromTo(
        nodes,
        { y: 12, opacity: 1 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.out", stagger: 0.06 }
      );
    };

    fadeIn(navRef.current);
    fadeIn(heroRef.current);

    if (gridRef.current) {
      gsap.from(gridRef.current.querySelectorAll("[data-card]"), {
        scrollTrigger: { trigger: gridRef.current, start: "top 90%", once: true },
        y: 16,
        duration: 0.45,
        ease: "power2.out",
        stagger: 0.06,
      });
    }

    if (bioRef.current) {
      const img = bioRef.current.querySelector("img");
      if (img) {
        gsap.to(img, {
          scrollTrigger: { trigger: bioRef.current, start: "top 80%", scrub: true },
          yPercent: -6,
          scale: 1.02,
        });
      }
    }
  }, []);

  const proposals = [
    {
      id: 2,
      title: "Seguridad total: mega cárceles y expulsión de inmigrantes ilegales",
      bullets: [
        "Proyectos de ley para construir nuevas mega cárceles modernas y seguras.",
        "Endurecer la legislación migratoria para deportar de inmediato a inmigrantes ilegales.",
        "Priorizar la seguridad de las familias chilenas: sin orden no hay libertad.",
      ],
      icon: <ShieldAlert className="w-6 h-6" />,
    },
    {
      id: 3,
      title: "Legislación anti-burocracia para emprender",
      bullets: [
        "Simplificación radical de trámites para abrir empresas y proyectos.",
        "Silencio administrativo positivo: si el Estado no responde, se aprueba.",
        "La burocracia no puede frenar la innovación y el empleo.",
      ],
      icon: <Building2 className="w-6 h-6" />,
    },
    {
      id: 4,
      title: "Defensa del emprendimiento e inversión",
      bullets: [
        "Reforma ambiental con plazos ciertos para proyectos estratégicos.",
        "Ventanilla única con supervisión técnica, no ideológica.",
        "Chile necesita crecer y generar empleo.",
      ],
      icon: <Sprout className="w-6 h-6" />,
    },
    {
      id: 5,
      title: "Reducir ministerios y recortar gasto político",
      bullets: [
        "Bajar de 25 a 9 ministerios, fusionando carteras.",
        "Recorte de asesores, reparticiones innecesarias y privilegios.",
        "Menos Estado, menos despilfarro.",
      ],
      icon: <Hammer className="w-6 h-6" />,
    },
    {
      id: 6,
      title: "Tolerancia cero al delito: ventanas rotas y castigo real",
      bullets: [
        "Quien delinca pierde beneficios estatales y enfrenta sanciones efectivas.",
        "Penas más duras para reincidentes y segregación por peligrosidad.",
        "Recuperar la paz en las calles.",
      ],
      icon: <Lock className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[15px] leading-relaxed" style={{ color: COLORS.ink }}>
      {/* NAV */}
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3" data-fade>
            <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: COLORS.navy }}>
              <Landmark className="text-white" />
            </div>
            <span className="font-semibold tracking-wide" style={{ color: COLORS.navy }}>
              Cristián Daly — Diputado
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm" ref={navRef}>
            <a href="#propuesta1" className="hover:text-neutral-900" data-fade>Contribuciones</a>
            <a href="#propuestas" className="hover:text-neutral-900" data-fade>Programa</a>
            <a href="#bio" className="hover:text-neutral-900" data-fade>Biografía</a>
            <a
              href="#contacto"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-white"
              style={{ background: COLORS.navy }}
              data-fade
            >
              Súmate <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header ref={heroRef} className="bg-white">
        <div className="max-w-7xl mx-auto px-4 pt-14 pb-16 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight" style={{ color: COLORS.navy }} data-fade>
              Orden, libertad y crecimiento para Chile
            </h1>
            <p className="mt-4 text-neutral-600 text-lg md:text-xl max-w-2xl" data-fade>
              Soy <span className="font-semibold" style={{ color: COLORS.navy }}>Cristián Daly Dagorret</span>. Voy a luchar contra el Estado lento y abusivo, por un Chile seguro, que premie a los que emprenden y trabajan.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#propuesta1"
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-2xl font-medium text-white"
                style={{ background: COLORS.navy }}
                data-fade
              >
                Propuesta más urgente
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="#propuestas"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-neutral-300 hover:bg-neutral-50 transition"
                data-fade
              >
                Ver programa completo
                <Gavel className="w-5 h-5" />
              </a>
              <a
                href="https://shorturl.at/du0sy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl font-semibold text-white shadow-sm hover:opacity-90 transition"
                style={{ backgroundColor: "#D22630" }} // rojo tipo SERVEL
                data-fade
              >
                Donaciones
                <ExternalLink className="w-5 h-5" />
              </a>

            </div>
          </div>

          <div className="md:col-span-5 relative" data-fade>
            <div className="rounded-3xl overflow-hidden border border-neutral-200 bg-white shadow-sm">
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 text-neutral-700">
                  <Info className="w-4 h-4" /> Campaña ciudadana · Movimiento Chao Contribuciones
                </div>
                <h3 className="mt-4 text-2xl md:text-3xl font-bold" style={{ color: COLORS.navy }}>
                  ¡Elimina las contribuciones de tu vivienda!
                </h3>
                <p className="mt-2 text-neutral-700">
                  Mi compromiso es impulsar la derogación total del Impuesto Territorial. Las contribuciones son un impuesto injusto y expropiatorio para las familias que ya pagaron por su casa.
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="px-4 py-2 rounded-full text-sm font-semibold text-white" style={{ background: COLORS.amber }}>
                    Prioridad #1
                  </div>
                  <div className="px-4 py-2 rounded-full text-sm border border-neutral-300">Chao Contribuciones</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* PROPUESTA #1 */}
      <section id="propuesta1" className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <span className="uppercase tracking-widest text-xs" style={{ color: COLORS.navy }}>Propuesta central</span>
            <h2 className="mt-2 text-3xl md:text-5xl font-extrabold leading-tight" style={{ color: COLORS.navy }}>
              Eliminar el <span style={{ color: COLORS.amber }}>100% de las contribuciones</span>
            </h2>
            <p className="mt-4 text-neutral-700 text-lg">
              Impulsaré una ley para derogar definitivamente el Impuesto Territorial que afecta a todas las familias chilenas. Como fundador de <strong>Chao Contribuciones</strong>, mi pelea será incesante hasta lograrlo.
            </p>
            <ul className="mt-6 space-y-2 text-neutral-800">
              <li className="flex gap-3"><span className="mt-2 w-2 h-2 rounded-full" style={{ background: COLORS.amber }} /> Derogación total del Impuesto Territorial (contribuciones).</li>
              <li className="flex gap-3"><span className="mt-2 w-2 h-2 rounded-full" style={{ background: COLORS.amber }} /> Protección del patrimonio familiar: lo que ya pagaste por tu casa no se vuelve a pagar.</li>
              <li className="flex gap-3"><span className="mt-2 w-2 h-2 rounded-full" style={{ background: COLORS.amber }} /> Transparencia fiscal: municipios financiados sin castigar a los propietarios vulnerables.</li>
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#propuestas" className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-neutral-300 hover:bg-neutral-100 transition">
                Ver otras propuestas <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#contacto" className="group inline-flex items-center gap-2 px-5 py-3 rounded-2xl font-medium text-white" style={{ background: COLORS.navy }}>
                Súmate a Chao Contribuciones <Send className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden border border-neutral-200 bg-white shadow-sm">
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3" style={{ color: COLORS.amber }}>
                  <Gavel className="w-5 h-5" /> <span className="text-sm uppercase tracking-wider">Compromiso legislativo</span>
                </div>
                <ul className="mt-4 space-y-3 text-neutral-800">
                  <li className="flex gap-3"><span>•</span> Proyecto de ley para derogar el Impuesto Territorial.</li>
                  <li className="flex gap-3"><span>•</span> Defensa pública y jurídica del derecho de propiedad.</li>
                  <li className="flex gap-3"><span>•</span> Alivio inmediato al bolsillo de la clase media y adultos mayores.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OTRAS PROPUESTAS */}
      <section id="propuestas" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-extrabold" style={{ color: COLORS.navy }}>Programa</h2>
          <p className="mt-3 text-neutral-700 max-w-3xl">Un plan claro para recuperar el orden, liberar el emprendimiento y reducir el tamaño del Estado.</p>
          <div ref={gridRef} className="mt-10 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {proposals.map((p) => (
              <article key={p.id} data-card className="group relative rounded-2xl border border-neutral-200 overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-center gap-3" style={{ color: COLORS.navy }}>
                    {p.icon}
                    <span className="text-sm uppercase tracking-wider">Propuesta {p.id}</span>
                  </div>
                  <h3 className="mt-2 text-xl font-bold leading-snug" style={{ color: COLORS.navy }}>{p.title}</h3>
                  <ul className="mt-4 space-y-2 text-neutral-800">
                    {p.bullets.map((b, i) => (
                      <li key={i} className="flex gap-3"><span style={{ color: COLORS.amber }}>•</span><span>{b}</span></li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BIO */}
      <section id="bio" ref={bioRef} className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-12 gap-10 items-center">
          {/* Texto */}
          <div className="lg:col-span-5 order-last lg:order-first flex flex-col justify-center">
            <span className="uppercase tracking-widest text-xs" style={{ color: COLORS.navy }}>Biografía</span>
            <h2 className="mt-2 text-3xl md:text-5xl font-extrabold" style={{ color: COLORS.navy }}>Cristián Daly Dagorret</h2>
            <p className="mt-4 text-neutral-700 text-lg">
              Soy Cristián Daly Dagorret, periodista de profesión y apasionado por el servicio público. Durante 8 años fui concejal en Lo Barnechea, lo que me permitió conocer desde dentro cómo funciona el Estado, sus virtudes pero también sus enormes falencias. Esa experiencia me dio la convicción de que Chile necesita un cambio profundo y valiente.
            </p>
            <p className="mt-4 text-neutral-700">
              Soy deportista, disfruto de los cerros en bicicleta y corriendo, porque creo en la disciplina y la perseverancia como formas de vida. Junto a mi señora formamos una familia con nuestra hija y esperamos a una segunda que llegará poco después de la elección. Ellas son mi motor y la razón principal de esta lucha.
            </p>
            <p className="mt-4 text-neutral-700">
              Como diputado quiero llevar la voz de quienes están cansados de un Estado lento, abusivo y capturado por la ideología. Creo en un Estado pequeño, eficiente y barato, que esté realmente al servicio de las personas. Mi compromiso es luchar con fuerza en la batalla cultural contra el wokismo, y al mismo tiempo impulsar políticas que brinden seguridad a las familias, porque sin orden y tranquilidad no hay libertad ni futuro.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 max-w-md">
              <div className="rounded-xl border border-neutral-200 p-4 bg-white">
                <span className="text-2xl font-bold" style={{ color: COLORS.navy }}>8</span>
                <p className="text-sm text-neutral-600">años de experiencia municipal</p>
              </div>
              <div className="rounded-xl border border-neutral-200 p-4 bg-white">
                <span className="text-2xl font-bold" style={{ color: COLORS.navy }}>1</span>
                <p className="text-sm text-neutral-600">compromiso: Estado al servicio</p>
              </div>
            </div>
          </div>

          {/* Imagen */}
          <div className="lg:col-span-7">
            <div
              className="relative rounded-[2rem] overflow-hidden border border-neutral-200 shadow-sm
                         aspect-[3/4] sm:aspect-[4/5] md:aspect-[4/3] xl:aspect-[16/10] max-h-[560px] mx-auto"
            >
              <img
                src={portrait}
                alt="Retrato del candidato"
                className="w-full h-full object-cover"
                style={{ objectPosition: "center 15%" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold" style={{ color: COLORS.navy }}>¿Te sumas?</h2>
            <p className="mt-3 text-neutral-700 max-w-xl">
              Inscríbete para ser apoderado, voluntario o simplemente mantenerte informado del avance legislativo y actividades de campaña.
            </p>
          </div>
          <form className="bg-white rounded-2xl p-6 border border-neutral-200 grid grid-cols-1 gap-4 shadow-sm">
            <input className="px-4 py-3 rounded-xl bg-white border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#182D56]/30" placeholder="Nombre" />
            <input type="email" className="px-4 py-3 rounded-xl bg-white border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#182D56]/30" placeholder="Email" />
            <input className="px-4 py-3 rounded-xl bg-white border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#182D56]/30" placeholder="Comuna" />
            <button type="button" className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl font-semibold text-white" style={{ background: COLORS.navy }}>
              Enviar interés <ArrowUpRight className="w-5 h-5" />
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-neutral-200 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-4 items-center justify-between text-sm text-neutral-600">
          <div className="flex items-center gap-3">
            <Landmark className="w-4 h-4" /> Partido Nacional Libertario · Identidad azul/ámbar
          </div>
          <div className="flex items-center gap-4">
            <a className="hover:text-neutral-900" href="#propuesta1">Contribuciones</a>
            <a className="hover:text-neutral-900" href="#propuestas">Programa</a>
            <a className="hover:text-neutral-900" href="#bio">Biografía</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
