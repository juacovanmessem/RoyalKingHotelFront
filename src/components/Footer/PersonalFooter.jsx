import React from 'react';
import './Footer.css';
import Form from 'react-bootstrap/Form';
import LogoFooter from '../../images/Logo_completo.png';
import Button from 'react-bootstrap/Button';

const PersonalFooter = () => {
  return (
    <>
     <footer className="footer py-3 pt-4 px-4 pt-md-5 border-top bottom-0 align-items-center w-100">
       <div className="row">
         <div className="d-flex flex-column align-items-center col-12 col-md col-lg mb-3">
           <img src={LogoFooter} alt="Royal King Hotel Logo"  className='mt-3 logo'/>
           <ul className="nav px-auto d-flex">
             <li className="m-2 fs-4"><a href="#"><i className="bi bi-instagram text-light"></i></a></li>
             <li className="m-2 fs-4"><a href="#"><i className="bi bi-facebook text-light"></i></a></li>
             <li className="m-2 fs-4"><a href="#"><i className="bi bi-twitter-x text-light"></i></a></li>
           </ul> 
         </div>
         
         <div className="col-xl-4 col-sm-6 col-md-8 col-lg-3 mb-3 text-light">
           <Form className='p-4'>
             <h5>Sucríbete para más novedades!</h5>
             <p>¡Para recibir novedades sobre nuevos lanzamientos y promociones, suscríbete!</p>
             <Form.Group className="mb-3" controlId="loginEmail">
               <Form.Label className='text-light'>Correo electrónico: </Form.Label>
               <Form.Control type="email" placeholder="Ingrese su correo" minLength={12} maxLength={64} required/>
             </Form.Group>
             <Button variant="warning" type="submit" className='me-3 buttonHover yellowBG'>
               Iniciar sesión
             </Button>
           </Form>
         </div>
         <div class="d-flex flex-column flex-sm-row justify-content-between py-2 my-2 border-top text-light ">
           <p>© 2024 Royal King Hotel, Inc. All rights reserved.</p>
         </div>
       </div>
     </footer>
  
    </>
  )
}

export default PersonalFooter;