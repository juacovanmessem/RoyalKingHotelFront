import './Register.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Logo from "../../images/Logo_completo.png"
import { NavLink } from 'react-router-dom'
import { useForm } from 'react-hook-form';

function Register() {

  const { register, handleSubmit, formState: {errors}, reset } = useForm ()

  const onSubmit = async (data) => {

    console.log(data)

    if (data.password != data.passwordConfirm) {
      return alert ('Las contraseñas no coinciden')
    }
    
    const registerData = {...data, role: 'client'}
    const sendData = await fetch ( 'http://localhost:4000/users', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      credentials: 'include',
      body: JSON.stringify(registerData)
    })

    const response = await sendData.json()

    console.log(response)

    reset()
  }

  return (
    <>
       <div className='container-sm my-3 p-3 loginContainer'>
        <div className='d-flex justify-content-center'>
          <img src={Logo} alt="Royal King Hotel Logo"  className='mt-2 logo'/>
        </div>
        <Form className='p-4 pt-2' onSubmit={handleSubmit ((data) => onSubmit(data))}>
          <Form.Group className="mb-3">
            <Form.Label className='text-light'>Nombre: </Form.Label>
            <Form.Control
              type="text" 
              placeholder="Ingrese su nombre" 
              {...register('firstName')}
              required
              minLength={2} maxLength={30} 
             />
          </Form.Group>      
          <Form.Group className="mb-3" controlId="registerLastName">
            <Form.Label className='text-light'>Apellido: </Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Ingrese su Apellido" 
              minLength={2} maxLength={30} 
              required 
              {...register('lastName')}/>
          </Form.Group>      
          <Form.Group className="mb-3" controlId="registerEmail">
            <Form.Label className='text-light'>Correo electrónico: </Form.Label>
            <Form.Control 
            type="email" 
            placeholder="Ingrese su correo electrónico" 
            minLength={12} maxLength={64} 
            required
            {...register('email')}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="registerPassword">
            <Form.Label className='text-light '>Contraseña: </Form.Label>
            <Form.Control 
            type="password" 
            placeholder="Ingrese su contraseña" 
            minLength={6} maxLength={20} 
            required 
            {...register('password')}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="registerConfirmPassword">
            <Form.Label className='text-light '>Confirmar contraseña: </Form.Label>
            <Form.Control 
            type="password" 
            placeholder="Confirme su contraseña" 
            minLength={6} maxLength={20} 
            required
            {...register('passwordConfirm')}/>
          </Form.Group>
          <div className='mb-3'>
          <Form.Group className="mb-3" controlId="registerConfirmPassword">
            <Form.Check type="checkbox" id="TermsConditions" className='d-inline mx-1' required/>
            <span className='text-light'>Aceptar los </span>
            <NavLink className='linkLetters' to='/404'>términos y condiciones </NavLink>
          </Form.Group>
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