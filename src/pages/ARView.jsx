import { useMemo, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";

const curiosities = [
  {
    title: "La Joya de Cerén",
    text: "conserva una aldea maya casi intacta de hace más de 1,000 años.",
  },
  {
    title: "🌋 La ceniza volcánica",
    text: "destruyó la aldea, pero también la protegió durante siglos.",
  },
  {
    title: '⏳ La Joya de Cerén es conocida como la "Pompeya de América"',
    text: "por su increíble estado de conservación.",
  },
  {
    title: "🏠 Aquí puedes conocer",
    text: "cómo eran las casas y la vida cotidiana de los mayas, no solo sus templos.",
  },
  {
    title: "🧭 Los arqueólogos aún",
    text: "no conocen los límites completos del sitio. ¡Todavía hay mucho por descubrir!",
  },
  {
    title: "🔍 Cada excavación",
    text: "revela nuevos detalles sobre cómo vivían las familias mayas hace más de mil años.",
  },
  {
    title: "🛖 Este sitio muestra",
    text: "cómo se organizaban las aldeas mayas y cómo aprovechaban sus espacios.",
  },
  {
    title: "🌎 La Joya de Cerén",
    text: "ofrece una mirada única a la vida de personas comunes del mundo maya.",
  },
  {
    title: "🪨 Las capas de ceniza",
    text: "protegieron las construcciones de la lluvia, el viento y la erosión.",
  },
  {
    title: "📜 Más que ruinas",
    text: "la Joya de Cerén es una auténtica cápsula del tiempo del mundo maya.",
  },
  {
    title: "🧩 Bajo la tierra podrían",
    text: "permanecer ocultas más estructuras esperando ser descubiertas.",
  },
  {
    title: "⛏️ Las investigaciones arqueológicas",
    text: "continúan, por lo que el sitio aún guarda muchos secretos.",
  },
  {
    title: "🏛️ A diferencia de otros sitios",
    text: "aquí se estudia la vida diaria de la gente común.",
  },
  {
    title: "✨ La ceniza permitió conservar",
    text: "detalles que normalmente desaparecen con el paso de los siglos.",
  },
  {
    title: "📍 La distribución de la aldea",
    text: "ayuda a entender cómo convivían y trabajaban las comunidades mayas.",
  },
];

const ARView = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const params = useMemo(() => new URLSearchParams(search), [search]);
  const mode = params.get("mode") || "explorador";
  const qr = params.get("qr") || "JDC-QR-123";
  const [activeIndex, setActiveIndex] = useState(0);
  const modelSrc = new URL("../assets/result.glb", import.meta.url).href;
  const bgImage = new URL("../assets/joyaceren.jpg", import.meta.url).href;

  const selectedMode = mode === "historiador" ? "Historiador" : "Explorador";
  const item = curiosities[activeIndex];

  const localNext = () => setActiveIndex((v) => (v + 1) % curiosities.length);
  const localPrev = () => setActiveIndex((v) => (v - 1 + curiosities.length) % curiosities.length);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div
        className="relative overflow-hidden"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
      >
        <div className="absolute inset-0 bg-slate-900/60" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-slate-900/10 to-slate-900/80" />

        <div className="relative mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="mb-6 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
                  Joya de Cerén
                </p>
                <h1 className="mt-1 text-2xl font-semibold text-slate-900 sm:text-3xl">
                  Experiencia {selectedMode}
                </h1>
              </div>
              <div className="flex gap-3 items-center text-sm">
                <div className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-slate-800">
                  QR: <span className="font-mono text-slate-800">{qr}</span>
                </div>
                <Link
                  to="/scan"
                  className="inline-flex rounded-md border border-slate-200 bg-transparent px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 transition"
                >
                  ← Volver
                </Link>
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.7fr_1fr]">
            <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-md">
              <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-500">
                    Vista AR
                  </p>
                  <p className="mt-1 text-base text-slate-600 leading-6">
                    Mueve, observa y descubre.
                  </p>
                </div>
                <span className="rounded-full bg-teal-100 px-3 py-1 text-sm text-teal-700">
                  {selectedMode}
                </span>
              </div>
              <div className="rounded-lg overflow-hidden border border-slate-200 bg-slate-50">
                <model-viewer
                  src={modelSrc}
                  alt="Render AR de Joya de Cerén"
                  camera-controls
                  auto-rotate
                  exposure="1"
                  ar
                  ar-modes="webxr scene-viewer quick-look"
                  ios-src={modelSrc}
                  style={{ width: "100%", height: "min(60vh,480px)", background: "linear-gradient(180deg,#fffaf0 0%,#ffffff 100%)" }}
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm text-left">
                  <p className="flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-slate-500">
                    <span className="text-yellow-400">💡</span>
                    ¿Curiosidad?
                  </p>
                  <div className="mt-3 flex items-center justify-between">
                    <h2 className="text-2xl font-semibold text-slate-900">
                      {item.title}
                    </h2>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={localPrev}
                        aria-label="Anterior curiosidad"
                        className="w-8 h-8 rounded-full bg-slate-100 text-slate-800 flex items-center justify-center hover:bg-slate-50 transition"
                      >
                        ‹
                      </button>
                      <button
                        onClick={localNext}
                        aria-label="Siguiente curiosidad"
                        className="w-8 h-8 rounded-full bg-slate-100 text-slate-800 flex items-center justify-center hover:bg-slate-50 transition"
                      >
                        ›
                      </button>
                    </div>
                  </div>
                  <p className="mt-4 text-slate-700 leading-7 font-semibold">
                    {item.text}
                  </p>
                
              </div>

              <div className="rounded-lg border border-slate-200 bg-white/95 p-5 shadow-sm text-left">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                  Sobre el sitio
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  <li><strong>Conservación:</strong> el sitio se preservó bajo capas de ceniza volcánica.</li>
                  <li><strong>Valor:</strong> ofrece evidencia directa de la vida doméstica maya.</li>
                  <li><strong>Investigación:</strong> las excavaciones siguen aportando nuevos hallazgos.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ARView;
