import React from 'react'
import './Login.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Login = () => {
  return (
    <>
      <div className='container-sm my-5 p-3 loginContainer'>
        <div className='d-flex justify-content-center'>
          <img src=".." alt="Royal King Hotel Logo"  className='m-3 img-thumbnail'/>
        </div>
        <Form className='p-4'>
          <Form.Group className="mb-3" controlId="loginEmail">
            <Form.Label className='text-light'>Correo electrónico: </Form.Label>
            <Form.Control type="email" placeholder="Ingrese su correo" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="loginPassword">
            <Form.Label className='text-light'>Contraseña: </Form.Label>
            <Form.Control type="password" placeholder="Ingrese su contraseña" />
          </Form.Group>
          <p className='text-light'>¿Olvidaste tu contraseña?</p>
          <Button variant="warning" type="submit">
            Iniciar sesión
          </Button> <span className='text-warning'>Crear una nueva cuenta</span>
        </Form>
    </div>
    </>
  )
}

export default Login
