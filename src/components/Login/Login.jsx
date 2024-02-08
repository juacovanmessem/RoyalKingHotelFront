import React from 'react'
import './Login.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Logo from "../../images/Logo_completo.png"
import { NavLink } from 'react-router-dom'
import { useForm } from 'react-hook-form';



const Login = () => {

  const { register, handleSubmit, formState: {errors}, reset } = useForm ()

  const onSubmit = async (data) => {

    const checkData = await fetch ( 'http://localhost:4000/users', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      credentials: 'include',
      body: JSON.stringify(data)
    })

    const response = await checkData.json()

    console.log(response)

  }

  return (
    <>
      <div className='container-sm my-5 p-3 loginContainer'>
        <div className='d-flex justify-content-center'>
          <img src={Logo} alt="Royal King Hotel Logo"  className='mt-3 logo'/>
        </div>
        <Form className='p-4'  onSubmit={handleSubmit ((data) => onSubmit(data))}>
          <Form.Group className="mb-3" controlId="loginEmail">
            <Form.Label className='text-light'>Correo electrónico: </Form.Label>
            <Form.Control 
            type="email" 
            placeholder="Ingrese su correo" 
            minLength={12} maxLength={64} 
            required
            {...register('loginEmail')}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="loginPassword">
            <Form.Label className='text-light '>Contraseña: </Form.Label>
            <Form.Control 
            type="password" 
            placeholder="Ingrese su contraseña" 
            minLength={6} maxLength={20} 
            required
            {...register('loginPassword')}
            />
          </Form.Group>
          <NavLink className='d-block p-0 mb-4 link-underline link-underline-opacity-0 linkLetters' to='/home'> ¿Olvidaste tu contraseña? </NavLink>
          <Button variant="warning" type="submit" className='me-3 buttonHover yellowBG'>
            Iniciar sesión
          </Button>
          <NavLink className='linkLetters' to='/register'>Crear una nueva cuenta </NavLink>
        </Form>
      </div>
      <div className='d-flex justify-content-center mb-4'>
      <NavLink className='darkBlueBG text-light buttonHover btn btn-info' to='/home'> Ir al inicio </NavLink>
      </div>
    </>
  )
}

export default Login
