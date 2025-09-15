// src/ProposalDetail.jsx
import { Link, useParams } from "react-router-dom";
import {
  FileDown,
  ArrowLeft,
  ExternalLink,
  Share2,
  Instagram,
  Twitter,
} from "lucide-react";
import TikTokIcon from "./TikTokIcon";
import { proposalsData } from "./data/proposalsData";

export default function ProposalDetail() {
  const { id } = useParams(); // admite id numérico o slug
  const proposal =
    proposalsData.find((p) => String(p.id) === id) ||
    proposalsData.find((p) => p.slug === id);

  if (!proposal) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-2xl font-bold">Propuesta no encontrada</h1>
        <Link to="/" className="inline-flex items-center gap-2 mt-6 text-blue-700">
          <ArrowLeft className="w-4 h-4" /> Volver al inicio
        </Link>
      </div>
    );
  }

  const color = proposal.color || "#182D56"; // fallback
  const accent = proposal.accent || "#FBA931";

  // Campos opcionales (puedes agregarlos en proposalsData si quieres)
  const videoId = proposal.videoId; // p.ej. "M7lc1UVf-VE"
  const images = proposal.images || []; // p.ej. ["/src/assets/p2-1.jpg", "..."]

  // Helpers
  const shareUrl =
    typeof window !== "undefined" ? window.location.href : "https://";
  const titleForShare = proposal.title;

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: titleForShare,
          text: proposal.intro || "Mira esta propuesta",
          url: shareUrl,
        });
      } else {
        await navigator.clipboard.writeText(shareUrl);
        alert("Enlace copiado al portapapeles ✅");
      }
    } catch {
      // usuario canceló o no soportado
    }
  };

  return (
    <main className="bg-white">
        
      {/* HERO */}
      <header
        className="border-b border-neutral-200"
        style={{
          background:
            "linear-gradient(180deg, rgba(246,247,251,0.5) 0%, rgba(255,255,255,1) 100%)",
        }}
      >
        <div className="max-w-5xl mx-auto px-4 py-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-neutral-600 hover:text-neutral-900"
          >
            <ArrowLeft className="w-4 h-4" /> Volver al programa
          </Link>

          <div
            className="mt-4 inline-flex items-center gap-3 text-xs md:text-sm uppercase tracking-wider px-3 py-1.5 rounded-full"
            style={{ color, border: `1px solid ${color}` }}
          >
            {proposal.icon}
            <span>Propuesta {proposal.id}</span>
          </div>

          <h1
            className="mt-3 text-3xl md:text-5xl font-extrabold leading-tight"
            style={{ color }}
          >
            {proposal.title}
          </h1>

          {proposal.intro && (
            <p className="mt-4 text-neutral-700 text-lg">{proposal.intro}</p>
          )}

          {proposal.bullets?.length > 0 && (
            <ul className="mt-5 space-y-2 text-neutral-800">
              {proposal.bullets.map((b, i) => (
                <li key={i} className="flex gap-3">
                  <span
                    className="mt-2 w-2 h-2 rounded-full"
                    style={{ background: accent }}
                  />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </header>

      {/* CONTENIDO + SIDEBAR */}
      <section className="py-10">
        <div className="max-w-5xl mx-auto px-4 grid lg:grid-cols-12 gap-8 items-start">
          {/* Columna principal */}
          <article className="lg:col-span-8">
            {/* Video opcional */}
            {videoId && (
              <div className="rounded-2xl border border-neutral-200 bg-white shadow-sm overflow-hidden">
                <div className="px-5 py-4 border-b border-neutral-200 flex items-center justify-between">
                  <h3 className="text-lg font-semibold" style={{ color }}>
                    Video explicativo
                  </h3>
                  <span className="text-xs uppercase tracking-wide text-neutral-500">
                    2–3 min
                  </span>
                </div>
                <div className="relative aspect-video bg-neutral-100">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="Video de la propuesta"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            )}

            {/* Cuerpo / desarrollo */}
            {proposal.body?.length > 0 && (
              <div className={`mt-6 space-y-4 text-neutral-800`}>
                {proposal.body.map((par, i) => (
                  <p key={i}>{par}</p>
                ))}
              </div>
            )}

            {/* Galería opcional */}
            {images.length > 0 && (
              <div className="mt-6">
                <h4
                  className="text-sm font-semibold uppercase tracking-wider mb-3"
                  style={{ color }}
                >
                  Imágenes relacionadas
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {images.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`Imagen ${i + 1}`}
                      className="w-full h-full object-cover rounded-xl border border-neutral-200 aspect-[4/3]"
                      loading="lazy"
                    />
                  ))}
                </div>
              </div>
            )}

            {/* CTA inferior */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={proposal.pdf}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-white shadow-sm"
                style={{ background: color }}
              >
                Descargar PDF <FileDown className="w-4 h-4" />
              </a>

              <button
                onClick={handleShare}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-neutral-300 hover:bg-neutral-50"
              >
                Compartir <Share2 className="w-4 h-4" />
              </button>

              <Link
                to="/"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-neutral-300 hover:bg-neutral-50"
              >
                Volver al programa
              </Link>
            </div>
          </article>

          {/* Sidebar sticky */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              {/* Descargar */}
              <div className="rounded-2xl border border-neutral-200 bg-white shadow-sm p-6">
                <h3 className="text-lg font-semibold" style={{ color }}>
                  Descargas
                </h3>
                <p className="mt-2 text-neutral-700 text-sm">
                  Obtén el detalle oficial en PDF.
                </p>
                <a
                  href={proposal.pdf}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl text-white"
                  style={{ background: color }}
                >
                  Descargar PDF <FileDown className="w-4 h-4" />
                </a>
              </div>

              {/* Compartir */}
              <div className="rounded-2xl border border-neutral-200 bg-white shadow-sm p-6">
                <h3 className="text-lg font-semibold" style={{ color }}>
                  Comparte
                </h3>
                <p className="mt-2 text-neutral-700 text-sm">
                  Ayuda a difundir esta propuesta.
                </p>
                <div className="mt-4 flex gap-2">
                  <button
                    onClick={handleShare}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-neutral-300 hover:bg-neutral-50"
                    title="Compartir"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>Compartir</span>
                  </button>
                </div>
              </div>

              {/* Redes sociales */}
              <div className="rounded-2xl border border-neutral-200 bg-white shadow-sm p-6">
                <h3 className="text-lg font-semibold" style={{ color }}>
                  Redes sociales
                </h3>
                <div className="mt-4 flex flex-col gap-3">
                  <a
                    href="https://instagram.com/cristiandaly"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between gap-3 px-4 py-2 rounded-xl border border-neutral-300 bg-white hover:bg-neutral-50 transition shadow-sm"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Instagram className="w-5 h-5" />
                      <span className="font-medium">Instagram</span>
                    </span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <a
                    href="https://tiktok.com/@cristiandaly"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between gap-3 px-4 py-2 rounded-xl border border-neutral-300 bg-white hover:bg-neutral-50 transition shadow-sm"
                  >
                    <span className="inline-flex items-center gap-2">
                      <TikTokIcon className="w-5 h-5" />
                      <span className="font-medium">TikTok</span>
                    </span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <a
                    href="https://x.com/cristiandaly"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between gap-3 px-4 py-2 rounded-xl border border-neutral-300 bg-white hover:bg-neutral-50 transition shadow-sm"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Twitter className="w-5 h-5" />
                      <span className="font-medium">X</span>
                    </span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
