import { useNavigate } from 'react-router-dom'
import { useUser } from '../context/useUser'

const PlanTrip = () => {
  const { user } = useUser()
  const navigate = useNavigate()

  if (!user) {
    navigate('/login', { replace: true })
    return null
  }

  return (
    <div className="min-h-screen bg-[#faf9f6] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-[28px] bg-white p-6 sm:p-8 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.3)]">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900">Planear viaje</h1>
          <div className="text-sm text-slate-500">Usuario: <span className="font-medium text-slate-800">{user.name}</span></div>
        </div>

        <p className="mt-3 text-slate-500">Aquí puedes crear un itinerario rápido y guardar destinos favoritos.</p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm text-slate-500">Itinerarios</p>
            <p className="mt-2 text-slate-700">Crea, edita y comparte tus rutas personalizadas (funcionalidad en desarrollo).</p>
            <div className="mt-4">
              <button
                onClick={() => navigate(`/scan?source=plan&qr=PLAN-NEW`)}
                className="rounded-2xl bg-teal-700 px-4 py-2 text-white"
              >
                Crear nuevo
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm text-slate-500">Destinos guardados</p>
            <p className="mt-2 text-slate-700">Accede a los lugares que marcaste como favoritos durante tus exploraciones.</p>
            <div className="mt-4">
              <button className="rounded-2xl bg-white border border-slate-200 px-4 py-2">Ver guardados</button>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <div className="rounded-2xl bg-white p-4 border border-slate-100 shadow-sm">
            <p className="text-sm text-slate-500">Nota</p>
            <p className="mt-2 text-slate-700">La funcionalidad completa estará disponible tras integrar almacenamiento y backend.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlanTrip
