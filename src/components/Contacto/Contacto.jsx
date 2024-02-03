import React from 'react';
import '../Contacto/Contacto.css';
import PersonalNavbar from '../Navbar/PersonalNavbar';
import PersonalFooter from '../Footer/PersonalFooter';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';



const Contacto = () => {
  return (
    <>
      <PersonalNavbar/>
      <h1 className='text-center text-light'>¡Contacta con nosotros!</h1>
      <br></br>
      <Container>
       <Form>
         <h3 className='text-center text-light'>Formulario de contacto via E-mail</h3>
         <Row className="mb-3">
           <Form.Group as={Col} controlId="FormGridName">
             <Form.Label className='text-light'>Nombre: </Form.Label>
             <Form.Control type="text" placeholder="Ingrese su nombre" minLength={2} maxLength={30} required/>
           </Form.Group>
           <Form.Group as={Col} controlId="FormGridName">
             <Form.Label className='text-light'>Apellido: </Form.Label>
             <Form.Control type="text" placeholder="Ingrese su apellido" minLength={2} maxLength={30} required/>
           </Form.Group>
           <Form.Group as={Col} controlId="formGridNumero">
              <Form.Label  className='text-light'>Numero de reserva:</Form.Label>
              <Form.Control />
            </Form.Group>
         </Row>

         <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridMotivo">
             <Form.Label className='text-light'>Motivo:</Form.Label>
             <Form.Select defaultValue="">
               <option>Olvide mi usuario y contraseña</option>
               <option>Quisiera recibir asistencia para realizar una reserva</option>
               <option>Quisiera recibir informacion sobre promociones</option>
               <option>No recuerdo mi numero de reserva</option>
               <option>Sugerencias</option>
               <option>Consulta sobre medios de pago</option>
             </Form.Select>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
             <Form.Label className='text-light'>Email:</Form.Label>
             <Form.Control type="email" placeholder="Ingrese su email" />
           </Form.Group>
         </Row>
         <Form.Group as={Col} controlId="formGridMensaje" >
            <Form.Label className='text-light'>Mensaje:</Form.Label>
            <Form.Control type="email" placeholder="Escribe un mensaje" id='mensaje'/>
         </Form.Group>
         <br></br>
         <Form.Group className="mb-3" id="formGridCheckbox">
           <Form.Check type="checkbox" label="Deseo recibir información sobre promociones y lanzamientos" className='text-light' />
         </Form.Group>

         <Button variant="primary" type="submit" className='mb-2 yellowBG'>
           Enviar
         </Button>
       </Form>

      </Container>
      <br></br>
      
     <PersonalFooter/>
    
    </>
  )
}

export default Contacto;
