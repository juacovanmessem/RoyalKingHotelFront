import './App.css'
import Login from './components/Login/Login'
import PersonalNavbar from './components/Navbar/PersonalNavbar'
import { Navigate, Route, Routes} from 'react-router-dom'
import Landing from './components/Landing/Landing'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to='home' replace/>} />
        <Route path='home' element={<Landing />} />
        <Route path='login' element={<Login />} />
        <Route path='login' element={<PersonalNavbar />} />
        

      </Routes>
    </>
  )
}

export default App
