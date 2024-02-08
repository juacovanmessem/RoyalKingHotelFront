import React from 'react'
import './Error404.css'
import PersonalNavbar from '../Navbar/PersonalNavbar';
import PersonalFooter from '../Footer/PersonalFooter';
import { NavLink } from 'react-router-dom';

function Error404() {
  return (
    <>
     <PersonalNavbar/>
     <br></br>

     <div className='Container text-light text-center'>
       <br></br>
       <h3 className='Ops'>¡Ooops!</h3>
       <br></br>
       <h1 className='Error'>404</h1>
       <br></br>
       <h3>¡Te pedimos disculpas! No hemos encontrado la pagina que buscas</h3>
       <br></br>
       <NavLink className='yellowBG text-light buttonHover btn btn-info' to='/home'>
         Volver al inicio
       </NavLink>
     </div>

     <br></br>
     <PersonalFooter/>
    </>
  )
}

export default Error404