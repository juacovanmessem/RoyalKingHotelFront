import './App.css'
import { Navigate, Route, Routes} from 'react-router-dom'
import Landing from './components/Landing/Landing'
<<<<<<< HEAD
=======
import Login from './components/Login/Login'
import Register from './components/Register/Register'
>>>>>>> 733e8d014ed0c3780185543b271aa3e703952a46

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to='home' replace/>} />
<<<<<<< HEAD
        <Route path='home' element={<Landing />} />
        <Route path='login' element={<Login />} />
        <Route path='login' element={<PersonalNavbar />} />
        

=======
        <Route path='home' element={<Landing/>} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
>>>>>>> 733e8d014ed0c3780185543b271aa3e703952a46
      </Routes>
    </>
  )
}

export default App
