import { useNavigate } from 'react-router-dom'
import { useUser } from '../context/useUser'

const Profile = () => {
  const { user, logout } = useUser()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login', { replace: true })
  }

  return (
    <div className="min-h-screen bg-[#faf9f6] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-xl rounded-[36px] bg-white p-8 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.3)]">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-teal-700 text-4xl font-bold uppercase text-white shadow-lg shadow-teal-700/20">
            {user?.name ? user.name.split(' ').map((part) => part[0]).join('').slice(0, 2) : 'US'}
          </div>
          <div>
            <h1 className="text-3xl font-semibold text-slate-900">{user?.name || 'Usuario'}</h1>
            <p className="text-sm text-slate-500">Perfil de usuario</p>
          </div>
        </div>

        {user ? (
          <>
            <div className="mt-10 space-y-5">
              <div className="rounded-3xl bg-slate-50 p-5">
                <p className="text-sm text-slate-500">Nombre</p>
                <p className="mt-2 text-lg font-medium text-slate-900">{user?.name || 'No disponible'}</p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-5">
                <p className="text-sm text-slate-500">Correo</p>
                <p className="mt-2 text-lg font-medium text-slate-900">{user?.email || 'No disponible'}</p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-5">
                <p className="text-sm text-slate-500">Estado</p>
                <p className="mt-2 text-lg font-medium text-slate-900">{user ? 'Conectado' : 'No iniciado'}</p>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-between">
              <button
                type="button"
                onClick={handleLogout}
                className="rounded-3xl bg-rose-600 px-5 py-3 text-white font-semibold shadow-sm transition hover:bg-rose-700"
              >
                Cerrar sesión
              </button>
            </div>
          </>
        ) : (
          <div className="min-h-screen bg-[#faf9f6] px-4 py-10">
            <div className="mx-auto max-w-xl rounded-[36px] bg-white p-8 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.3)] text-center">
              <h1 className="text-3xl font-semibold text-slate-900">Perfil de usuario</h1>
              <p className="mt-4 text-slate-600">Para ver esta sección debes iniciar sesión o crear una cuenta.</p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <a href="/login" className="rounded-3xl bg-teal-700 px-5 py-3 text-white font-semibold shadow-sm transition hover:bg-teal-800">
                  Iniciar sesión
                </a>
                <a href="/register" className="rounded-3xl border border-slate-200 bg-white px-5 py-3 text-slate-900 font-semibold shadow-sm transition hover:bg-slate-100">
                  Crear usuario
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Profile
