import { useMemo } from 'react'
import { useLocation, Link } from 'react-router-dom'

const ARExperience = () => {
  const { search } = useLocation()
  const params = useMemo(() => new URLSearchParams(search), [search])
  const mode = params.get('mode') || 'explorador'
  const qr = params.get('qr') || 'JDC-QR-123'
  const modelSrc = new URL('../assets/result.glb', import.meta.url).href

  const content = {
    explorador: {
      title: 'Explorador — Experiencia Cinematográfica',
      paragraphs: [
        'Bienvenido a una experiencia visual inmersiva. Esta ruta está pensada para observar el lugar desde una perspectiva más sensorial y estética.',
        'Aparecerán escenas narradas, efectos de luz simulados y capas de información no histórica para reforzar la atmósfera.',
      ],
    },
    historiador: {
      title: 'Historiador — Ruta de Investigación',
      paragraphs: [
        'Ruta enfocada en datos históricos y contextuales: cronología, usos del espacio y hallazgos arqueológicos.',
        'Encontrarás descripciones técnicas, referencias y anotaciones que ayudan a comprender el valor patrimonial del sitio.',
      ],
    },
  }

  const selected = mode === 'historiador' ? content.historiador : content.explorador

  return (
    <div className="min-h-screen bg-[#faf9f6] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl space-y-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-teal-700 font-semibold">← Volver</Link>
          <div className="text-sm text-slate-500">QR: <span className="font-mono">{qr}</span></div>
        </div>

        <div className="rounded-3xl bg-white p-4 shadow-sm">
          <h1 className="text-2xl font-bold text-slate-900">{selected.title}</h1>
          <p className="text-slate-600 mt-2">Seleccione una vista para comenzar la experiencia en AR.</p>

          <div className="mt-4 flex gap-3 flex-wrap">
            <Link
              to={`/ar?mode=explorador&qr=${qr}`}
              className={`px-4 py-2 rounded-2xl ${mode === 'explorador' ? 'bg-teal-700 text-white' : 'bg-slate-100 text-slate-700'}`}
            >
              Explorador
            </Link>
            <Link
              to={`/ar?mode=historiador&qr=${qr}`}
              className={`px-4 py-2 rounded-2xl ${mode === 'historiador' ? 'bg-teal-700 text-white' : 'bg-slate-100 text-slate-700'}`}
            >
              Historiador
            </Link>
          </div>

          <div className="mt-6 rounded-3xl overflow-hidden border border-slate-200 bg-slate-950">
            <model-viewer
              src={modelSrc}
              alt="Objeto AR de Joya de Cerén"
              camera-controls
              auto-rotate
              exposure="1"
              ar
              ar-modes="webxr scene-viewer quick-look"
              ios-src={modelSrc}
              style={{ width: '100%', height: '60vh' }}
            />
          </div>

          <div className="mt-6 space-y-3">
            {selected.paragraphs.map((p, i) => (
              <p key={i} className="text-slate-700">{p}</p>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button type="button" className="rounded-3xl bg-white px-4 py-2 border border-slate-200 text-slate-900">
              Simular scan QR
            </button>
            <Link
              to={`/ar/view?mode=${mode}&qr=${qr}`}
              className="rounded-3xl bg-teal-700 px-4 py-2 text-white"
            >
              Iniciar experiencia
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ARExperience
