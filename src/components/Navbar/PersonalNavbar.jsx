import React from 'react'
import './Navbar.css'
import LogoNav from '../../images/Logo_Navbar.png';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';



const PersonalNavbar = () => {
  return (
    <>
      
     <nav className='navbar text-light navbar-expand-lg p-3 sticky-top' expand="lg">
       <div className='container-fluid'>
         <img src={LogoNav} alt="Royal King Hotel Logo"  className='img-responsive logoNav'></img>
         <Button className="navbar-toggler btn buttonHover yellowBG text-light" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" type="submit">
         <span className="navbar-toggler-icon "></span>
         </Button>
         <div className='collapse navbar-collapse mx-auto" id="navbarSupportedContent'>
            <div className='d-flex flex-wrap ms-auto '>
              <Nav.Link href="#home" className='p-4'>Inicio</Nav.Link>
              <Nav.Link href="#link" className='p-4'>Contacto</Nav.Link>
              <Nav.Link href="#home" className='p-4'>Sobre Nosotros</Nav.Link>
              <Nav.Link href="#link" className='p-4'>Reservaciones</Nav.Link>
            </div>
           <Button variant="warning" type="submit" className='me-3 buttonHover yellowBG'>
             Iniciar sesión
           </Button>
         </div>
       </div>
     </nav>
     
    </>
  )
}

export default PersonalNavbar;