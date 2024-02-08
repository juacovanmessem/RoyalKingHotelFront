import React from 'react'
import '../AdminNavbar/AdminNavbar.css'
import LogoAdminNav from '../../images/Logo_incompleto_-_icono.png';
import Button from 'react-bootstrap/Button';

const AdminNavbar = () => {
  return (
    <>
     <nav className='p-nav navbar navbar-expand-lg p-3 text-light sticky-top' expand="lg">
      <div className='container-fluid'>
        <div className='d-flex'>
          <img src={LogoAdminNav} alt="Royal King Hotel Logo"  className='img-responsive logoNav'></img>
          <div className='m-2 mt-4'>
            <p className='fs-5 mb-1 d-block'>Royal King Hotel</p>
            <p className='fs-6 mt-0 d-block'>Administración</p>
          </div>
       </div>
       <ul className="nav-list">
          <li><a href="/">Usuarios</a></li>
          <li><a href="/">Habitaciones</a></li>
          <li><a href="/contacto">Interfaz Cliente</a></li>
       </ul>
       <Button variant="warning" type="submit" className='me-3 buttonHover yellowBG'>
        Cerrar sesión
       </Button>
      </div>
      </nav>
    </>
  )
}

export default AdminNavbar;