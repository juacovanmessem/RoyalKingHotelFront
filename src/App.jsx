import './App.css'
import { Navigate, Route, Routes} from 'react-router-dom'
import Landing from './components/Landing/Landing'
import Login from './components/Login/Login'
import Contacto from './components/Contacto/Contacto'
import Register from './components/Register/Register'
import Catalogo from './components/Catalogo/Catalogo'
import AdminPage from './components/AdminPage/AdminPage'

function App() {

  return (
    <>

      <Routes>
        <Route path='/' element={<Navigate to='home' replace/>} />
        <Route path='home' element={<Landing/>} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} /> 
        <Route path='Catalogo' element={<Catalogo />} />
        <Route path='admin' element={<AdminPage />} />
        <Route path='Contacto' element={<Contacto />} />
      </Routes>

    </>
  )
}

export default App
