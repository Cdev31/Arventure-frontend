import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../context/useUser'

const Login = () => {
  const { user, login } = useUser()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (user) {
      navigate('/', { replace: true })
    }
  }, [user, navigate])

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!name.trim()) return
    login({ name: name.trim(), email: email.trim() })
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-[#FAF9F6] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-md rounded-[32px] bg-white p-8 shadow-[0_25px_120px_-80px_rgba(15,23,42,0.5)]">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Iniciar sesión</h1>
        <p className="text-slate-500 mb-8">Ingresa tu nombre y correo para acceder a tus viajes y planificaciones.</p>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <label className="block">
            <span className="text-sm font-medium text-slate-700">Nombre completo</span>
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-teal-500"
              placeholder="Ej. José Pérez"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-700">Correo electrónico</span>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-teal-500"
              placeholder="ejemplo@correo.com"
            />
          </label>

          <button
            type="submit"
            className="w-full rounded-3xl bg-teal-700 px-4 py-3 text-white font-semibold shadow-lg shadow-teal-700/20 transition hover:bg-teal-800"
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
