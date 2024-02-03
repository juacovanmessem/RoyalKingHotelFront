import React from 'react'
import './Register.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Logo from "../../images/Logo_completo.png"
import { NavLink } from 'react-router-dom'

function Register() {
  return (
    <>
       <div className='container-sm my-3 p-3 loginContainer'>
        <div className='d-flex justify-content-center'>
          <img src={Logo} alt="Royal King Hotel Logo"  className='mt-2 logo'/>
        </div>
        <Form className='p-4 pt-2'>
          <Form.Group className="mb-3" controlId="registerName">
            <Form.Label className='text-light'>Nombre: </Form.Label>
            <Form.Control type="text" placeholder="Ingrese su nombre" minLength={2} maxLength={30} required/>
          </Form.Group>      
          <Form.Group className="mb-3" controlId="registerLastName">
            <Form.Label className='text-light'>Apellido: </Form.Label>
            <Form.Control type="text" placeholder="Ingrese su Apellido" minLength={2} maxLength={30} required/>
          </Form.Group>      
          <Form.Group className="mb-3" controlId="registerEmail">
            <Form.Label className='text-light'>Correo electrónico: </Form.Label>
            <Form.Control type="email" placeholder="Ingrese su correo electrónico" minLength={12} maxLength={64} required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="registerPassword">
            <Form.Label className='text-light '>Contraseña: </Form.Label>
            <Form.Control type="password" placeholder="Ingrese su contraseña" minLength={6} maxLength={20} required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="registerConfirmPassword">
            <Form.Label className='text-light '>Confirmar contraseña: </Form.Label>
            <Form.Control type="password" placeholder="Confirme su contraseña" minLength={6} maxLength={20} required/>
          </Form.Group>
          <div className='mb-3'>
          <Form.Check type="checkbox" id="TermsConditions" className='d-inline mx-1'/>
          <span className='text-light'>Aceptar los </span>
          <NavLink className='linkLetters' to='/404'>términos y condiciones </NavLink>
          </div>
          <Button variant="warning" type="submit" className='me-3 buttonHover yellowBG'>
            Crear cuenta
          </Button>
          <span className='text-light'>¿Ya tienes una cuenta? </span> <h4 className='d-inline text-light'>→</h4>
          <NavLink className='linkLetters' to='/login'> Iniciar sesión </NavLink>
        </Form>
      </div>
      <div className='d-flex justify-content-center mb-4'>
      <NavLink className='darkBlueBG text-light buttonHover btn btn-info' to='/home'> Ir al inicio </NavLink>
      </div>
    </>
  )
}

export default Register