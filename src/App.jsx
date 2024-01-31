import './App.css'
import Login from './components/Login/Login'
import PersonalNavbar from './components/Navbar/PersonalNavbar'
import { Navigate, Route, Routes} from 'react-router-dom'
import Register from './components/Register/Register'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to='home' replace/>} />
        <Route path='home' element={<div> main</div>} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Routes>
    </>
  )
}

export default App
