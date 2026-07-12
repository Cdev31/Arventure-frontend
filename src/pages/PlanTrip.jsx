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
      <div className="mx-auto max-w-3xl rounded-[36px] bg-white p-8 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.3)]">
        <h1 className="text-3xl font-semibold text-slate-900">Planear viaje</h1>
        <p className="mt-4 text-slate-500">Bienvenido {user.name}. Aquí puedes crear tu itinerario y guardar la planificación.</p>

        <div className="mt-8 space-y-4">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm text-slate-500">Funcionalidad futura</p>
            <p className="mt-2 text-slate-700">Puedes agregar rutas, fechas y destinos en esta pantalla.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm text-slate-500">Estado</p>
            <p className="mt-2 text-slate-700">Actualmente la página está abierta para usuarios registrados.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlanTrip
