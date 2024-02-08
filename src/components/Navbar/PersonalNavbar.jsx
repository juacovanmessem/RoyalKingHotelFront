import React from 'react'
import './Navbar.css'
import LogoNav from '../../images/Logo_Navbar.png';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

const PersonalNavbar = () => {
  return (
    <>
     <nav className='navbar text-light navbar-expand-lg p-3 sticky-top' expand="lg">
       <div className='container-fluid'>
         <img src={LogoNav} alt="Royal King Hotel Logo"  className='img-fluid logoNav'></img>
         <Button className="navbar-toggler btn buttonHover yellowBG text-light " data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" type="submit">
         <span className="navbar-toggler-icon "></span>
         </Button>
         <div className='collapse navbar-collapse mx-auto' id="navbarSupportedContent">
            <div className='d-flex flex-wrap ms-auto '>
              <NavLink to='/home' className='p-4 text-light link-underline link-underline-opacity-0'>Inicio</NavLink>
              <NavLink to='/Contacto' className='p-4 text-light link-underline link-underline-opacity-0'>Contacto</NavLink>
              <NavLink to='/SobreNosotros' className='p-4 text-light link-underline link-underline-opacity-0'>Sobre Nosotros</NavLink>
              <NavLink to='/' className='p-4 text-light link-underline link-underline-opacity-0'>Reservaciones</NavLink>
            </div>
           <NavLink className='me-3 buttonHover p-2 btn btn-warning yellowBG' to='/login'>
             Iniciar sesión
           </NavLink>
         </div>
       </div>
     </nav>
     
    </>
  )
}

export default PersonalNavbar;