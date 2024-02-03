import './App.css'
import { Navigate, Route, Routes} from 'react-router-dom'
import Landing from './components/Landing/Landing'
import Login from './components/Login/Login'
import Register from './components/Register/Register'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to='home' replace/>} />
        <Route path='home' element={<Landing/>} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Routes>
    </>
  )
}

export default App
