import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Scan = () => {
  const [qr, setQr] = useState('JDC-QR-123')
  const [scanning, setScanning] = useState(false)
  const navigate = useNavigate()

  const handleScan = () => {
    setScanning(true)
    setTimeout(() => {
      setScanning(false)
      // navigate to AR experience with the scanned QR and default mode
      navigate(`/ar?mode=explorador&qr=${encodeURIComponent(qr)}`)
    }, 1200)
  }

  return (
    <div className="min-h-screen bg-[#faf9f6] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md rounded-2xl bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-slate-900">Escanear QR en sitio</h1>
        <p className="text-slate-500 mt-2">Simula el escaneo de un código QR en el lugar para lanzar la experiencia AR.</p>

        <div className="mt-4">
          <label className="text-sm text-slate-500">Código QR (simulado)</label>
          <input value={qr} onChange={(e) => setQr(e.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2" />
        </div>

        <div className="mt-6 flex items-center gap-3">
          <button onClick={handleScan} className="flex-1 rounded-2xl bg-teal-700 px-4 py-3 text-white font-semibold shadow-sm">
            {scanning ? 'Escaneando...' : 'Simular escaneo'}
          </button>
          <button onClick={() => navigate('/')} className="rounded-2xl bg-white border border-slate-200 px-4 py-3">Cancelar</button>
        </div>
      </div>
    </div>
  )
}

export default Scan
