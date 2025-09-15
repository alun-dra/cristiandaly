// src/data/proposalsData.js
import { ShieldAlert, Building2, Sprout, Hammer, Lock } from "lucide-react";

const COLORS = {
  navy: "#182D56",
  amber: "#FBA931",
};

export const proposalsData = [
  {
    id: 2,
    slug: "seguridad-mega-carceles-expulsion",
    title: "Seguridad total: mega cárceles y expulsión de inmigrantes ilegales",
    intro:
      "Sin orden no hay libertad. Esta propuesta prioriza a las familias chilenas con infraestructura carcelaria moderna y control migratorio efectivo.",
    bullets: [
      "Proyectos de ley para construir nuevas mega cárceles modernas y seguras.",
      "Endurecer la legislación migratoria para deportar de inmediato a inmigrantes ilegales.",
      "Priorizar la seguridad de las familias chilenas: sin orden no hay libertad.",
    ],
    body: [
      "Impulsaremos estándares de aislamiento por peligrosidad, bloqueo de señal, control biométrico, talleres obligatorios de reinserción y coordinación con Fiscalía para cortar las cadenas de mando al interior.",
      "La expulsión de inmigrantes ilegales será prioritaria, con procedimientos sumarios, coordinación con PDI y frontera tecnológicamente reforzada.",
    ],
    pdf: "/propuestas/p2.pdf",
    icon: <ShieldAlert className="w-6 h-6" style={{ color: COLORS.navy }} />,
    color: COLORS.navy,
    accent: COLORS.amber,
  },
  {
    id: 3,
    slug: "legislacion-anti-burocracia",
    title: "Legislación anti-burocracia para emprender",
    intro:
      "Quien emprende no debe pelear contra el Estado. Esta propuesta simplifica trámites y establece plazos claros.",
    bullets: [
      "Simplificación radical de trámites para abrir empresas y proyectos.",
      "Silencio administrativo positivo: si el Estado no responde, se aprueba.",
      "La burocracia no puede frenar la innovación y el empleo.",
    ],
    body: [
      "Plazos máximos por tipología de permiso, plataforma única con trazabilidad pública y responsabilidad administrativa por incumplimiento.",
      "Auditoría de duplicidades y traspaso a declaraciones juradas para permisos de bajo riesgo.",
    ],
    pdf: "/propuestas/p3.pdf",
    icon: <Building2 className="w-6 h-6" style={{ color: COLORS.navy }} />,
    color: COLORS.navy,
    accent: COLORS.amber,
  },
  {
    id: 4,
    slug: "defensa-emprendimiento-inversion",
    title: "Defensa del emprendimiento e inversión",
    intro:
      "Chile necesita crecer y crear empleo. Reformamos el SEIA para dar certezas y evitar paralizaciones indefinidas.",
    bullets: [
      "Reforma ambiental con plazos ciertos para proyectos estratégicos.",
      "Ventanilla única con supervisión técnica, no ideológica.",
      "Chile necesita crecer y generar empleo.",
    ],
    body: [
      "Evaluaciones técnicas independientes, participación temprana y reglas claras para la resolución de controversias.",
    ],
    pdf: "/propuestas/p4.pdf",
    icon: <Sprout className="w-6 h-6" style={{ color: COLORS.navy }} />,
    color: COLORS.navy,
    accent: COLORS.amber,
  },
  {
    id: 5,
    slug: "reducir-ministerios-gasto-politico",
    title: "Reducir ministerios y recortar gasto político",
    intro:
      "Un Estado más pequeño y eficiente: menos duplicidades, más transparencia y ahorro real.",
    bullets: [
      "Bajar de 25 a 9 ministerios, fusionando carteras.",
      "Recorte de asesores, reparticiones innecesarias y privilegios.",
      "Menos Estado, menos despilfarro.",
    ],
    body: [
      "Plan de racionalización con metas de ahorro plurianuales auditadas por Contraloría. Publicación de todos los gastos en formato abierto.",
    ],
    pdf: "/propuestas/p5.pdf",
    icon: <Hammer className="w-6 h-6" style={{ color: COLORS.navy }} />,
    color: COLORS.navy,
    accent: COLORS.amber,
  },
  {
    id: 6,
    slug: "tolerancia-cero-ventanas-rotas",
    title: "Tolerancia cero al delito: ventanas rotas y castigo real",
    intro:
      "Se acabó la impunidad. Control a reincidentes, pérdida de beneficios estatales y segregación por peligrosidad.",
    bullets: [
      "Quien delinca pierde beneficios estatales y enfrenta sanciones efectivas.",
      "Penas más duras para reincidentes y segregación por peligrosidad.",
      "Recuperar la paz en las calles.",
    ],
    body: [
      "Modelo ventanas rotas: persecución a delitos menores reiterados, control de armas y trabajo con municipios para prevención situacional.",
    ],
    pdf: "/propuestas/p6.pdf",
    icon: <Lock className="w-6 h-6" style={{ color: COLORS.navy }} />,
    color: COLORS.navy,
    accent: COLORS.amber,
  },
];
