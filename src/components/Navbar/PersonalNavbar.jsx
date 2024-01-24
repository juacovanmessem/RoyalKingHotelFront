import React from 'react'
import './Navbar.css'
import LogoNav from '../../images/Logo_Navbar.png';
import Button from 'react-bootstrap/Button';
const PersonalNavbar = () => {
  return (
    <>
     <nav className='navbar navbar-expand-lg p-3 text-light fixed-top' expand="lg">
      <div className='container-fluid'>
       <img src={LogoNav} alt="Royal King Hotel Logo"  className='img-responsive logoNav' ></img>
       <ul className="nav-list">
         <li><a href="/">Inicio</a></li>
         <li><a href="/">Reservaciones</a></li>
         <li><a href="/sobre-nosotros">Sobre nosotros</a></li>
         <li><a href="/contacto">Contacto</a></li>
       </ul>
      
       <Button variant="warning" type="submit" className='me-3 buttonHover yellowBG'>
        Iniciar sesión
       </Button>
      </div>
      </nav>
     
    </>
  )
}

export default PersonalNavbar;