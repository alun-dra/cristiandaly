import { Landmark } from "lucide-react";

const COLORS = {
  navy: "#182D56",
};

export default function Footer() {
  return (
    <footer className="py-6 border-t border-neutral-200 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Logo + texto */}
        <div className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: COLORS.navy }}
          >
            <Landmark className="text-white w-4 h-4" />
          </div>
          <span className="text-sm font-medium text-neutral-700">
            Partido Nacional Libertario
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 text-sm text-neutral-600">
          <a href="#propuesta1" className="hover:text-neutral-900">
            Contribuciones
          </a>
          <a href="#propuestas" className="hover:text-neutral-900">
            Programa
          </a>
          <a href="#bio" className="hover:text-neutral-900">
            Biografía
          </a>
        </div>
      </div>
    </footer>
  );
}
