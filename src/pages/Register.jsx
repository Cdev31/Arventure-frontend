import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useUser } from '../context/useUser'

const Register = () => {
  const { login } = useUser()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!name.trim() || !email.trim() || !password.trim()) return

    login({ name: name.trim(), email: email.trim() })
    navigate('/', { replace: true })
  }

  return (
    <div className="min-h-screen bg-[#FAF9F6] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-md rounded-[32px] bg-white p-8 shadow-[0_25px_120px_-80px_rgba(15,23,42,0.5)]">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Crear cuenta</h1>
        <p className="text-slate-500 mb-8">Regístrate para empezar a planear tus viajes y guardar tus destinos favoritos.</p>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <label className="block">
            <span className="text-sm font-medium text-slate-700">Nombre completo</span>
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-teal-500"
              placeholder="Ej. Ana María"
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

          <label className="block">
            <span className="text-sm font-medium text-slate-700">Contraseña</span>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-teal-500"
              placeholder="Mínimo 6 caracteres"
            />
          </label>

          <button
            type="submit"
            className="w-full rounded-3xl bg-teal-700 px-4 py-3 text-white font-semibold shadow-lg shadow-teal-700/20 transition hover:bg-teal-800"
          >
            Crear cuenta
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-500">
          ¿Ya tienes cuenta?{' '}
          <Link to="/login" className="font-semibold text-teal-700 hover:text-teal-800">
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Register
