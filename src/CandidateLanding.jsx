import { useEffect, useRef, useState } from "react";
import {
  ArrowRight, ShieldAlert, Building2, Hammer,
  Gavel, Lock, ArrowUpRight, Send, Info, Sprout,
  Instagram, Twitter, ExternalLink, FileDown
} from "lucide-react";
import TikTokIcon from "./TikTokIcon";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import portrait from "./assets/cristiandaly.jfif";
import { setMeta } from "./seo/setMeta";

// 👇 nuevo: fondo animado como componente
import HeroBackground from "./components/HeroBackground";
import ContactSection from "./components/ContactSection";

// Paleta (profesional, fondo blanco) basada en los colores del PNL
const COLORS = {
  ink: "#1B191A",
  navy: "#182D56",
  amber: "#FBA931",
  gray: "#E5E5E5",
  white: "#FFFFFF",
};

// Ícono X (custom)
function XIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M18.244 2H21l-6.27 7.165L22 22h-6.963l-4.52-6.68L5.3 22H2l6.72-7.7L2 2h7.037l4.17 6.213L18.244 2Zm-2.58 18h1.77L8.475 4h-1.87l9.06 16Z" />
    </svg>
  );
}


export default function CandidateLanding() {
  const navRef = useRef(null);
  const heroRef = useRef(null);
  const gridRef = useRef(null);
  const bioRef = useRef(null);
  const socialRef = useRef(null);

  const [openProposal, setOpenProposal] = useState(null);
  const toggleProposal = (id) => setOpenProposal((cur) => (cur === id ? null : id));

  useEffect(() => {


    setMeta({
      title: "Cristián Daly — Diputado | Orden, libertad y crecimiento",
      description:
        "Conoce el programa de Cristián Daly: seguridad, anti-burocracia, reducir el gasto político y eliminar el 100% de las contribuciones.",
      canonical: "https://cristiandaly.cl/",
      image: "https://cristiandaly.cl/og/daly-cover.jpg",
    });


    gsap.registerPlugin(ScrollTrigger);





    const fadeIn = (root) => {
      const nodes = root?.querySelectorAll("[data-fade]");
      if (!nodes?.length) return;
      gsap.fromTo(
        nodes,
        { y: 12, opacity: 1 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.out", stagger: 0.06 }
      );
    };

    fadeIn(navRef.current);
    fadeIn(heroRef.current);
    fadeIn(socialRef.current);

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
      const container = bioRef.current.querySelector(".bio-img-container");
      gsap.to(container, {
        scrollTrigger: { trigger: bioRef.current, start: "top 80%", scrub: true },
        yPercent: -6,
        scale: 1.02,
      });
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
      details:
        "Impulsaremos estándares de aislamiento por peligrosidad, bloqueo efectivo de señal, control biométrico, talleres obligatorios de reinserción y coordinación con Fiscalía para cortar las cadenas de mando al interior.",
      pdf: "/propuestas/p2.pdf",
      url: "/propuestas/2",
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
      details:
        "Plazos máximos por tipología de permiso, plataforma única con trazabilidad pública y responsabilidad administrativa por incumplimiento de plazos.",
      pdf: "/propuestas/p3.pdf",
      url: "/propuestas/3",
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
      details:
        "Modernizamos el SEIA para proyectos estratégicos con evaluaciones técnicas independientes, participación temprana y certezas jurídicas.",
      pdf: "/propuestas/p4.pdf",
      url: "/propuestas/4",
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
      details:
        "Plan de racionalización con metas de ahorro plurianuales auditables por Contraloría y publicación de todos los gastos en formato abierto.",
      pdf: "/propuestas/p5.pdf",
      url: "/propuestas/5", // ✅ corregido
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
      details:
        "Modelo 'ventanas rotas': persecución a delitos menores reiterados, control de armas y trabajo coordinado con municipios para prevención situacional.",
      pdf: "/propuestas/p6.pdf",
      url: "/propuestas/6",
      icon: <Lock className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[15px] leading-relaxed" style={{ color: COLORS.ink }}>
      {/* HERO */}
      <header ref={heroRef} className="relative bg-white">
        {/* 👇 Fondo animado (no capta eventos y queda detrás) */}
        <HeroBackground COLORS={COLORS} />

        {/* Contenido del hero */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 pt-14 pb-16 grid md:grid-cols-12 gap-10 items-center">
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

      {/* BIO ( */}
      <section
        id="bio"
        ref={bioRef}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-12 gap-10 items-center">

          {/* Panel de texto (fondo sólido) */}
          <div className="lg:col-span-6 order-last lg:order-first">
            <div
              className="rounded-2xl p-8 md:p-10"
              style={{ backgroundColor: COLORS.navy }}
            >
              <span className="uppercase tracking-[0.18em] text-xs font-semibold text-white/80">
                Biografía
              </span>
              <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-white leading-tight">
                Cristián Daly Dagorret
              </h2>

              <p className="mt-5 text-white/90 text-lg">
                Soy Cristián Daly Dagorret, periodista de profesión y apasionado por el
                servicio público. Durante 8 años fui concejal en Lo Barnechea, lo que me
                permitió conocer desde dentro cómo funciona el Estado, sus virtudes pero
                también sus enormes falencias. Esa experiencia me dio la convicción de
                que Chile necesita un cambio profundo y valiente.
              </p>

              <p className="mt-4 text-white/85">
                Soy deportista, disfruto de los cerros en bicicleta y corriendo. Junto a mi
                señora formamos una familia con nuestra hija y esperamos a una segunda
                que llegará poco después de la elección. Ellas son mi motor.
              </p>

              <p className="mt-4 text-white/85">
                Como diputado quiero llevar la voz de quienes están cansados de un Estado
                lento, abusivo y capturado por la ideología. Creo en un Estado pequeño,
                eficiente y barato, al servicio de las personas. Mi compromiso es dar la
                batalla cultural y, a la vez, impulsar seguridad para las familias.
              </p>

              {/* Cita corta */}
              <p className="mt-6 text-white italic border-l-4 pl-4"
                style={{ borderColor: 'rgba(255,255,255,.35)' }}>
                “Chile necesita un cambio profundo y valiente.”
              </p>

              {/* Métricas (en blanco para contraste) */}
              <div className="mt-7 grid grid-cols-2 gap-4 max-w-md">
                <div className="rounded-xl border border-white/15 p-4 bg-white/5 backdrop-blur">
                  <span className="text-2xl font-extrabold text-white">8</span>
                  <p className="text-sm text-white/85">años de experiencia municipal</p>
                </div>
                <div className="rounded-xl border border-white/15 p-4 bg-white/5 backdrop-blur">
                  <span className="text-2xl font-extrabold text-white">1</span>
                  <p className="text-sm text-white/85">compromiso: Estado al servicio</p>
                </div>
              </div>
            </div>
          </div>

          {/* Foto en tarjeta simple */}
          <div className="lg:col-span-6">
            <div className="max-w-xl mx-auto">
              <div className="relative rounded-[1.5rem] overflow-hidden border border-neutral-200 shadow-md bg-white">
                <img
                  src={portrait}
                  alt="Retrato del candidato"
                  className="w-full h-full object-cover"
                  style={{ aspectRatio: '4 / 5', objectPosition: 'center 30%' }}
                />
              </div>

              {/* Etiqueta discreta */}
              <div className="mt-3">
                <span
                  className="inline-block rounded-full px-3 py-1 text-sm font-medium border bg-white shadow-sm"
                  style={{ color: COLORS.navy, borderColor: 'rgba(0,0,0,.06)' }}
                >
                  Cercano • Disciplina • Servicio
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* PROPUESTA #1 (compactada, sin vacío a la derecha) */}
      <section id="propuesta1" className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-12 gap-10 items-start">
          {/* Columna izquierda (completa, sin vacío) */}
        <div className="lg:col-span-7 flex flex-col">
          <span className="uppercase tracking-widest text-xs" style={{ color: COLORS.navy }}>
            Propuesta central
          </span>
          <h2 className="mt-2 text-3xl md:text-5xl font-extrabold leading-tight" style={{ color: COLORS.navy }}>
            Eliminar el <span style={{ color: COLORS.amber }}>100% de las contribuciones</span>
          </h2>

          <p className="mt-4 text-neutral-700 text-lg">
            Impulsaré una ley para derogar definitivamente el Impuesto Territorial que afecta a todas las familias chilenas.
            Como fundador de <strong>Chao Contribuciones</strong>, mi pelea será incesante hasta lograrlo.
          </p>

          <ul className="mt-6 space-y-2 text-neutral-800">
            <li className="flex gap-3">
              <span className="mt-2 w-2 h-2 rounded-full" style={{ background: COLORS.amber }} />
              Derogación total del Impuesto Territorial (contribuciones).
            </li>
            <li className="flex gap-3">
              <span className="mt-2 w-2 h-2 rounded-full" style={{ background: COLORS.amber }} />
              Protección del patrimonio familiar: lo que ya pagaste por tu casa no se vuelve a pagar.
            </li>
            <li className="flex gap-3">
              <span className="mt-2 w-2 h-2 rounded-full" style={{ background: COLORS.amber }} />
              Transparencia fiscal: municipios financiados sin castigar a los propietarios vulnerables.
            </li>
          </ul>

          {/* Beneficios clave */}
          <div className="mt-6 rounded-xl border border-neutral-200 bg-white/60 p-5">
            <p className="text-sm font-semibold" style={{ color: COLORS.navy }}>Beneficios clave</p>
            <ul className="mt-2 grid sm:grid-cols-2 gap-2 text-sm text-neutral-800">
              <li className="flex gap-2">
                <span className="mt-[7px] w-1.5 h-1.5 rounded-full" style={{ background: COLORS.amber }} />
                Terminar con el cobro permanente sobre la vivienda familiar.
              </li>
              <li className="flex gap-2">
                <span className="mt-[7px] w-1.5 h-1.5 rounded-full" style={{ background: COLORS.amber }} />
                Priorizar el derecho de propiedad y el esfuerzo de las familias.
              </li>
              <li className="flex gap-2 sm:col-span-2">
                <span className="mt-[7px] w-1.5 h-1.5 rounded-full" style={{ background: COLORS.amber }} />
                Financiamiento municipal con criterios de transparencia.
              </li>
            </ul>
          </div>

          {/* CTAs principales */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#propuestas"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-neutral-300 hover:bg-neutral-100 transition"
            >
              Ver otras propuestas <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contacto"
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-2xl font-medium text-white shadow-sm hover:shadow transition"
              style={{ background: COLORS.navy }}
            >
              Súmate a Chao Contribuciones <Send className="w-5 h-5" />
            </a>
          </div>

          {/* FAQ breve (acordeón) */}
          <div className="mt-6 rounded-xl border border-neutral-200 bg-white/60 overflow-hidden">
            <details className="group">
              <summary className="cursor-pointer list-none px-5 py-3 flex items-center justify-between">
                <span className="font-medium text-neutral-800">¿Cómo se financiarán los municipios?</span>
                <span className="text-neutral-500 group-open:rotate-180 transition">⌄</span>
              </summary>
              <div className="px-5 pb-4 text-sm text-neutral-700">
                Con aportes basales del Estado, reasignaciones de gasto y pagos por servicios municipales, con reglas de
                transparencia y eficiencia para no castigar a las familias.
              </div>
            </details>
            <div className="h-px bg-neutral-200" />
            <details className="group">
              <summary className="cursor-pointer list-none px-5 py-3 flex items-center justify-between">
                <span className="font-medium text-neutral-800">¿A quiénes beneficiará primero?</span>
                <span className="text-neutral-500 group-open:rotate-180 transition">⌄</span>
              </summary>
              <div className="px-5 pb-4 text-sm text-neutral-700">
                A la clase media y a los adultos mayores propietarios de vivienda principal, con prioridad en su alivio inmediato.
              </div>
            </details>
          </div>

          {/* Compartir (discreto) */}
          <div className="mt-4 flex items-center gap-3 text-sm">
            <span className="text-neutral-600">Compartir:</span>
            <a
              href="https://x.com/intent/tweet?text=Eliminar%20el%20100%%20de%20las%20contribuciones%20%23ChaoContribuciones"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 px-3 py-1.5 hover:bg-neutral-100 transition"
              style={{ color: COLORS.navy }}
            >
              <XIcon className="w-4 h-4" /> X
            </a>
            <a
              href="https://www.instagram.com/dalylibertario/"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 px-3 py-1.5 hover:bg-neutral-100 transition"
              style={{ color: COLORS.navy }}
            >
              <Instagram className="w-4 h-4" /> Instagram
            </a>
          </div>
        </div>


          {/* Columna derecha (card más baja: solo video) */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden border border-neutral-200 bg-white shadow-sm">
              <div className="p-4 md:p-6">
                <div className="flex items-center gap-3">
                  <Gavel className="w-5 h-5" style={{ color: COLORS.amber }} />
                  <span className="text-sm uppercase tracking-wider" style={{ color: COLORS.amber }}>
                    Compromiso legislativo
                  </span>
                </div>

                {/* Video: 9/16 en mobile, 4/5 en md+, y tope de altura en lg para que no exceda a la izquierda */}
                <div className="mt-4 rounded-xl overflow-hidden">
                  <div className="relative w-full rounded-xl overflow-hidden aspect-[9/16] md:aspect-[4/5]">
                    <video
                      src="/videos/atencion-moneda.mp4"
                      controls
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{ objectPosition: "center 20%" }}
                    />
                  </div>

                </div>

                {/* Footer compacto (chips en una línea + CTA pequeño) */}
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-1 text-[11px] rounded-full bg-neutral-100 border text-neutral-700">#ChaoContribuciones</span>
                  <span className="px-2.5 py-1 text-[11px] rounded-full bg-neutral-100 border text-neutral-700">Proyecto de ley</span>
                  <a
                    href="https://www.tiktok.com/@dalylibertario/video/7542200237746670854"
                    target="_blank" rel="noopener noreferrer"
                    className="ml-auto inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs text-white"
                    style={{ background: COLORS.navy }}
                  >
                    Ver en TikTok <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
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
              <article key={p.id} data-card className="group relative rounded-2xl border border-neutral-200 overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow h-full">
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-3" style={{ color: COLORS.navy }}>
                    {p.icon}
                    <span className="text-sm uppercase tracking-wider">Propuesta {p.id}</span>
                  </div>

                  <h3 className="mt-2 text-xl font-bold leading-snug" style={{ color: COLORS.navy }}>{p.title}</h3>

                  <ul className="mt-4 space-y-2 text-neutral-800">
                    {p.bullets.map((b, i) => (
                      <li key={i} className="flex gap-3">
                        <span style={{ color: COLORS.amber }}>•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-6 flex items-center gap-3">
                    <a href={p.url} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-300 hover:bg-neutral-50 transition">
                      Ver más <ArrowRight className="w-4 h-4" />
                    </a>

                    <a
                      href={p.pdf}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-white"
                      style={{ background: COLORS.navy }}
                    >
                      Descargar PDF <FileDown className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      

      {/* REDES SOCIALES ) */}
      <section id="redes" ref={socialRef} className="py-0">
        {/* Franja sólida */}
        <div
          className="py-16"
          style={{ backgroundColor: COLORS.navy }}
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              {/* Texto */}
              <div className="lg:col-span-5">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white" data-fade>
                  Sígueme en redes sociales
                </h2>
                <p className="mt-3 text-white/80 max-w-lg" data-fade>
                  Propuestas, actividades y novedades de campaña con información verificada.
                </p>
              </div>
              {/* Botones de redes (rectangulares, sobrios) */}
              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/dalylibertario/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Abrir Instagram de Cristián Daly (nueva pestaña)"
                    className="group flex items-center justify-between rounded-lg border border-white/15 bg-white/5 px-5 py-4 hover:bg-white/10 transition"
                    data-fade
                  >
                    <div className="flex items-center gap-3">
                      <Instagram className="w-6 h-6 text-white" />
                      <div>
                        <div className="text-white font-semibold leading-none">Instagram</div>
                        {/* <div className="text-white/70 text-sm leading-none mt-1">Historias y fotos</div> */}
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-white/70 group-hover:text-white" />
                  </a>
                  {/* TikTok */}
                  <a
                    href="https://www.tiktok.com/@dalylibertario"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Abrir TikTok de Cristián Daly (nueva pestaña)"
                    className="group flex items-center justify-between rounded-lg border border-white/15 bg-white/5 px-5 py-4 hover:bg-white/10 transition"
                    data-fade
                  >
                    <div className="flex items-center gap-3">
                      <TikTokIcon className="w-6 h-6 text-white" />
                      <div>
                        <div className="text-white font-semibold leading-none">TikTok</div>
                        {/* <div className="text-white/70 text-sm leading-none mt-1">Videos breves</div> */}
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-white/70 group-hover:text-white" />
                  </a>
                  {/* X */}
                  <a
                    href="https://x.com/cristiandalyd"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Abrir perfil en X de Cristián Daly (nueva pestaña)"
                    className="group flex items-center justify-between rounded-lg border border-white/15 bg-white/5 px-5 py-4 hover:bg-white/10 transition"
                    data-fade
                  >
                    <div className="flex items-center gap-3">
                      <XIcon className="w-6 h-6 text-white" />
                      <div>
                        <div className="text-white font-semibold leading-none">X</div>
                        {/* <div className="text-white/70 text-sm leading-none mt-1">
                          Opinión y debate
                        </div> */}
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-white/70 group-hover:text-white" />
                  </a>
                </div>
                {/* CTA sobrio (rectangular) */}
                <div className="mt-6">
                  <a
                    href="https://www.instagram.com/dalylibertario/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg px-5 py-3 font-semibold text-navy-900 bg-white hover:brightness-95 transition shadow-sm"
                    style={{ color: COLORS.navy }}
                  >
                    <span>Seguir ahora</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <ContactSection COLORS={COLORS} />

    </div>
  );
}
