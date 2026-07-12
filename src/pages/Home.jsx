import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CategoryItem } from '../components/CategoryItem';
import { MapPin, Search, Leaf, Landmark, Utensils, Mountain, Waves } from 'lucide-react';
import featuredImage from '../assets/destino.png';
import { getFeaturedSite } from '../services/siteServers';
import { useUser } from '../context/useUser';

const Home = () => {
  const { user } = useUser();
  const [featured, setFeatured] = useState(null);

  useEffect(() => {
    getFeaturedSite()
      .then((res) => setFeatured(res.data))
      .catch(() => {
        console.warn('No se pudo obtener featured site (backend indisponible)');
      });
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF9F6] pb-32 text-[#1A1A1B]">
      <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8 pt-6">
        <div className="rounded-[40px] bg-white/95 p-6 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.4)]">
          <div className="flex justify-between items-start mb-8">
            <div>
              <p className="text-sm text-slate-500">Explorando desde</p>
              <div className="flex items-center gap-2">
                <h1 className="text-3xl font-bold text-slate-900 italic">San Salvador</h1>
                <MapPin size={20} className="text-teal-600" />
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <div className="w-11 h-11 rounded-full bg-teal-700 text-white flex items-center justify-center font-bold shadow-lg shadow-teal-700/20">
                {user?.name ? user.name.split(' ').map((part) => part[0]).join('').slice(0, 2) : 'US'}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h2 className="text-3xl font-semibold text-slate-900 italic">
                {user?.name ? `Hola, ${user.name.split(' ')[0]}` : 'Hola'} 👋
              </h2>
              <p className="text-slate-500 mt-1">Descubre algo increíble hoy</p>
            </div>

            <div className="flex gap-3 items-center">
              <div className="flex-1 flex items-center gap-3 bg-slate-100 px-4 py-3 rounded-3xl border border-slate-200 shadow-sm">
                <Search size={20} className="text-slate-400" />
                <input className="bg-transparent outline-none text-sm w-full text-slate-900" placeholder="Busca destinos o experiencias" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <a
            href="/plan"
            className="inline-flex items-center justify-center rounded-3xl bg-teal-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-700/20 transition hover:bg-teal-800"
          >
            Planear viaje
          </a>
        </div>

        <section className="mt-6">
          <div className="flex items-center justify-between mb-4 px-1">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 italic tracking-tight">¿Qué te interesa?</h3>
            </div>
            <button className="text-sm font-semibold text-teal-700">Ver todo</button>
          </div>

          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
            <CategoryItem label="Naturaleza" icon={<Leaf />} active={true} />
            <CategoryItem label="Cultura" icon={<Landmark />} />
            <CategoryItem label="Gastronomía" icon={<Utensils />} />
            <CategoryItem label="Aventura" icon={<Mountain />} />
            <CategoryItem label="Playas" icon={<Waves />} />
          </div>
        </section>

        <section className="mt-8">
          <div className="flex items-center justify-between mb-4 px-1">
            <h3 className="text-xl font-semibold text-slate-900 italic tracking-tight">Destino destacado</h3>
            <button className="text-sm font-semibold text-teal-700">Ver más</button>
          </div>

          <div className="relative overflow-hidden rounded-[32px] bg-slate-950 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.5)]">
            <img
              src={featured?.image || featuredImage}
              className="h-64 w-full object-cover"
              alt={featured?.name || 'Destino destacado'}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h4 className="text-2xl font-bold text-white mb-1 italic">{featured?.name || 'Joya de Cerén'}</h4>
              <p className="text-slate-200 text-sm mb-2">{featured?.location?.address || 'RJCR+V6R, Carr. San Juan Opico - Agua Escondida Km 32, Joya de Cerén'}</p>
              <div className="flex items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-white/15 px-3 py-1 text-xs text-white backdrop-blur-sm">{featured?.category || 'Cultura'}</span>
                  <span className="inline-flex items-center gap-1 text-amber-300 font-semibold">★ {featured?.rating || 4.5}</span>
                </div>
                  <a
                    href="/explorar"
                    className="rounded-2xl bg-white px-6 py-2 text-sm font-bold text-slate-950 shadow-lg transition hover:bg-slate-100"
                  >
                    Explorar
                  </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="fixed bottom-0 left-0 right-0 border-t border-slate-200 bg-white/95 backdrop-blur-xl px-6 py-3 shadow-[0_-10px_30px_-20px_rgba(15,23,42,0.2)]">
        <div className="mx-auto flex max-w-lg items-center justify-between gap-2">
          <a href="/" className="flex flex-col items-center gap-1 text-teal-700 font-semibold">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-3xl bg-teal-700/10 text-teal-700 shadow-sm">🏠</span>
            <span className="text-[10px]">Inicio</span>
          </a>
          <a href="/explorar" className="flex flex-col items-center gap-1 text-slate-500">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-3xl bg-slate-100 text-slate-500 shadow-sm">🔍</span>
            <span className="text-[10px]">Explorar</span>
          </a>
          <a href="/viajes" className="flex flex-col items-center gap-1 text-slate-500">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-3xl bg-slate-100 text-slate-500 shadow-sm">💼</span>
            <span className="text-[10px]">Viajes</span>
          </a>
          <a href="/asistente" className="flex flex-col items-center gap-1 text-slate-500">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-3xl bg-slate-100 text-slate-500 shadow-sm">💬</span>
            <span className="text-[10px]">Asistente</span>
          </a>
          <a href="/perfil" className="flex flex-col items-center gap-1 text-slate-500">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-3xl bg-slate-100 text-slate-500 shadow-sm">👤</span>
            <span className="text-[10px]">Perfil</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;