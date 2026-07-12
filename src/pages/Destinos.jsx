import { MapPin, Globe2, Users, Layers } from 'lucide-react'
import featuredImage from '../assets/destino.png'

const Destinos = () => {
  const site = {
    name: 'Joya de Cerén',
    summary:
      'Sitio arqueológico prehispánico conocido como la Pompeya de América. Conserva estructuras y objetos de la vida cotidiana precolombina, protegido como Patrimonio de la Humanidad.',
    address: 'Carr. San Juan Opico - Agua Escondida Km 32, La Libertad, El Salvador',
    region: 'La Libertad, El Salvador',
    population: 'Comunidad cercana: 26,000 habitantes en San Juan Opico',
    area: 'Área protegida aproximada: 4.5 km²',
    elevation: 'Altitud: 45 m sobre el nivel del mar',
    climate: 'Clima tropical seco',
    image: featuredImage,
  }

  return (
    <div className="min-h-screen bg-[#faf9f6] text-slate-900 pb-32 pt-6 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl space-y-6">
        <section className="rounded-4xl bg-white p-5 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.35)] sm:p-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-bold sm:text-3xl">Explora este destino</h1>
              <p className="text-slate-500 mt-2 text-sm sm:text-base">Detalle del sitio con imagen, dirección y datos geográficos y demográficos.</p>
            </div>
            <MapPin size={28} className="text-teal-700" />
          </div>
        </section>

        <article className="overflow-hidden rounded-4xl bg-white shadow-[0_30px_80px_-40px_rgba(15,23,42,0.2)]">
          <img src={site.image} alt={site.name} className="h-64 w-full object-cover sm:h-80" />
          <div className="space-y-6 p-5 sm:p-8">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
                <Globe2 size={18} />
                <span>{site.region}</span>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">{site.name}</h2>
              <p className="text-slate-600 leading-7">{site.summary}</p>
            </div>

            <div className="rounded-3xl bg-slate-50 p-5 shadow-sm border border-slate-200">
              <div className="flex items-start gap-3 text-slate-700">
                <MapPin size={20} className="text-teal-700 mt-1" />
                <div>
                  <p className="text-sm uppercase tracking-[0.16em] text-slate-500">Dirección</p>
                  <p className="mt-1 font-semibold text-slate-900">{site.address}</p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-50 p-5 shadow-sm border border-slate-200">
                <div className="flex items-start gap-3 text-slate-700">
                  <Users size={20} className="text-teal-700 mt-1" />
                  <div>
                    <p className="text-sm uppercase tracking-[0.16em] text-slate-500">Demografía</p>
                    <p className="mt-1 font-semibold text-slate-900">{site.population}</p>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl bg-slate-50 p-5 shadow-sm border border-slate-200">
                <div className="flex items-start gap-3 text-slate-700">
                  <Layers size={20} className="text-teal-700 mt-1" />
                  <div>
                    <p className="text-sm uppercase tracking-[0.16em] text-slate-500">Geografía</p>
                    <p className="mt-1 font-semibold text-slate-900">{site.area}</p>
                    <p className="mt-1 text-slate-600">{site.elevation}</p>
                    <p className="mt-1 text-slate-600">{site.climate}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}

export default Destinos
