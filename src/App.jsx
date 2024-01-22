import './App.css'
import Login from './components/Login/Login'
import { Navigate, Route, Routes} from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to='home' replace/>} />
        <Route path='home' element={<div> main</div>} />
        <Route path='login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
