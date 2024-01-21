import React from 'react'
import './Login.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Logo from "../../images/Logo_completo.png"


const Login = () => {
  return (
    <>
      <div className='container-sm my-5 p-3 loginContainer'>
        <div className='d-flex justify-content-center'>
          <img src={Logo} alt="Royal King Hotel Logo"  className='mt-3 logo'/>
        </div>
        <Form className='p-4'>
          <Form.Group className="mb-3" controlId="loginEmail">
            <Form.Label className='text-light'>Correo electrónico: </Form.Label>
            <Form.Control type="email" placeholder="Ingrese su correo" minLength={12} maxLength={64} required/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="loginPassword">
            <Form.Label className='text-light '>Contraseña: </Form.Label>
            <Form.Control type="password" placeholder="Ingrese su contraseña" minLength={6} maxLength={20} required/>
          </Form.Group>
          <p className='yellowLetters'>¿Olvidaste tu contraseña?</p>
          <Button variant="warning" type="submit" className='me-3 buttonHover yellowBG'>
            Iniciar sesión
          </Button> 
          <span className='yellowLetters'>Crear una nueva cuenta</span>
        </Form>
      </div>
      <div className='d-flex justify-content-center mb-4'>
      <Button variant='info' className='darkBlueBG text-light'> Volver al inicio </Button>
      </div>
    </>
  )
}

export default Login
