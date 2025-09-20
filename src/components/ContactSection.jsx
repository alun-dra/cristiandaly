// src/components/ContactSection.jsx
import { ArrowUpRight } from "lucide-react";

export default function ContactSection({ COLORS }) {
  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-stretch">
        {/* Panel izquierdo */}
        <div
          className="relative rounded-3xl overflow-hidden flex items-center"
          style={{ background: COLORS.navy }}
        >
          <span
            className="absolute left-0 top-0 h-full w-[6px]"
            style={{ background: COLORS.amber, boxShadow: `0 0 14px ${COLORS.amber}66` }}
            aria-hidden="true"
          />
          <div className="px-8 md:px-12 py-12">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">¿Te sumas?</h2>
            <p className="mt-4 text-lg text-neutral-100 max-w-xl">
              Inscríbete para ser apoderado, voluntario o simplemente
              mantenerte informado del avance legislativo y actividades de campaña.
            </p>
          </div>
        </div>

        {/* Tarjeta de formulario (FormSubmit) */}
        <form
          className="bg-white rounded-3xl border border-neutral-200 shadow-sm p-6 md:p-8 grid grid-cols-1 gap-4"
          aria-label="Formulario de inscripción a la campaña"
          action="https://formsubmit.co/dalylibertario@gmail.com"
          method="POST"
        >
          {/* Campos visibles */}
          <div>
            <label htmlFor="c-nombre" className="sr-only">Nombre</label>
            <input
              id="c-nombre"
              name="nombre"
              autoComplete="name"
              placeholder="Nombre"
              required
              className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-300
                         focus:outline-none focus:ring-2 focus:ring-[#182D56]/30"
            />
          </div>

          <div>
            <label htmlFor="c-email" className="sr-only">Email</label>
            <input
              id="c-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Email"
              required
              className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-300
                         focus:outline-none focus:ring-2 focus:ring-[#182D56]/30"
            />
          </div>

          <div>
            <label htmlFor="c-comuna" className="sr-only">Comuna</label>
            <input
              id="c-comuna"
              name="comuna"
              placeholder="Comuna"
              className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-300
                         focus:outline-none focus:ring-2 focus:ring-[#182D56]/30"
            />
          </div>

          {/* Campos ocultos de configuración FormSubmit */}
          <input type="hidden" name="_subject" value="Nuevo interés desde el sitio — Cristián Daly" />
          {/* Cambia la URL de gracias si quieres mantener en la misma página */}
          <input type="hidden" name="_next" value="https://cristiandaly.cl/gracias" />
          {/* Plantilla en tabla bonita */}
          <input type="hidden" name="_template" value="table" />
          {/* Desactiva captcha (si prefieres activarlo, elimina esta línea) */}
          <input type="hidden" name="_captcha" value="false" />
          {/* Autorespuesta al usuario */}
          <input
            type="hidden"
            name="_autoresponse"
            value="¡Gracias por sumarte! Te contactaremos pronto."
          />
          {/* Honeypot anti-bot (no lo toques) */}
          <input type="text" name="_honey" className="hidden" tabIndex="-1" autoComplete="off" />

          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3
                       rounded-2xl font-semibold text-white shadow-sm hover:opacity-90 transition"
            style={{ background: COLORS.navy }}
          >
            Enviar interés <ArrowUpRight className="w-5 h-5" />
          </button>
        </form>
      </div>
    </section>
  );
}
