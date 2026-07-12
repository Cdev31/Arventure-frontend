import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Destinos from './pages/Destinos'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import PlanTrip from './pages/PlanTrip'
import ARExperience from './pages/ARExperience'
import ARView from './pages/ARView'
import Scan from './pages/Scan'
import ProtectedRoute from './components/ProtectedRoute'
import { BottomNav } from './components/BottomNav'
import { UserProvider } from './context/UserContext'
import './App.css'

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explorar" element={<Destinos />} />
          <Route path="/ar" element={<ARExperience />} />
          <Route path="/ar/view" element={<ARView />} />
          <Route path="/scan" element={<Scan />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/perfil" element={<Profile />} />
          <Route
            path="/plan"
            element={
              <ProtectedRoute>
                <PlanTrip />
              </ProtectedRoute>
            }
          />
        </Routes>

        {/* Espaciador para evitar que la barra inferior cubra contenido */}
        <div className="h-28 sm:h-20" aria-hidden="true" />

        <BottomNav />
      </Router>
    </UserProvider>
  )
}

export default App
