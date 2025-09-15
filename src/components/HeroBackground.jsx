// src/components/HeroBackgroundRibbon.jsx
export default function HeroBackgroundRibbon({ COLORS }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Degradé base muy suave para que no quede plano */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, #fff 0%, ${COLORS.white} 55%, ${COLORS.navy}08 100%)`,
        }}
      />

      {/* Ribón diagonal (azul marino) */}
      <div
        className="
          absolute right-[-12%] top-[-10%]
          h-[180%] w-[40%] rotate-12 rounded-xl
        "
        style={{
          background: COLORS.navy,
          boxShadow: `0 8px 28px ${COLORS.navy}22`,
        }}
      />

      {/* Filo ámbar discreto pegado al ribón */}
      <div
        className="
          absolute right-[-10%] top-[-10%]
          h-[180%] w-[2%] rotate-12 rounded
          opacity-90
        "
        style={{ background: COLORS.amber }}
      />

      {/* Curva sutil en la parte inferior para dar “cierre” visual */}
      <svg
        className="absolute bottom-[-1px] left-0 w-full"
        height="80"
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
      >
        <path
          d="M0,96 C240,144 480,56 720,88 C960,120 1200,168 1440,120 L1440,160 L0,160 Z"
          fill={`${COLORS.navy}10`}
        />
      </svg>
    </div>
  );
}
