import { ArrowRight } from "lucide-react";

const COLORS = {
  navy: "#182D56",
};

export default function NavBar() {
  return (
    <nav className="sticky top-0 z-40 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo + texto */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.jpg"
            alt="Logo Cristián Daly"
            className="w-10 h-10 object-contain"
          />
          <span
            className="font-semibold tracking-wide"
            style={{ color: COLORS.navy }}
          >
            Cristián Daly — Diputado
          </span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#propuesta1" className="hover:text-neutral-900">
            Contribuciones
          </a>
          <a href="#propuestas" className="hover:text-neutral-900">
            Programa
          </a>
          <a href="#bio" className="hover:text-neutral-900">
            Biografía
          </a>

          <a
            href="#contacto"
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-white"
            style={{ background: COLORS.navy }}
          >
            Súmate <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </nav>
  );
}
