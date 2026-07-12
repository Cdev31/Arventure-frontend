import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Destinos from './pages/Destinos'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import PlanTrip from './pages/PlanTrip'
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

        <BottomNav />
      </Router>
    </UserProvider>
  )
}

export default App
