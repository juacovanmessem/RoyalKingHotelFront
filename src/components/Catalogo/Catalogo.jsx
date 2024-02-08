import React from 'react'
import '../Catalogo/Catalogo.css';
import PersonalNavbar from '../Navbar/PersonalNavbar';
import PersonalFooter from '../Footer/PersonalFooter';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import HabitacionSimple from '../../images/HabitacionSimple.png';
import HabitacionDoble from '../../images/HabitacionDoble.png';
import HabitacionConfort from '../../images/HabitacionConfort.png';
import HabitacionSuite from '../../images/HabitacionSuite.png';
import HabitacionQueen from '../../images/HabitacionQueen.png';
import HabitacionKing from '../../images/HabitacionKing.png';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


function Catalogo() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <PersonalNavbar/>
      <br></br>
      <div class="ContainerCatalogo d-flex justify-content-evenly ">
       <Card style={{ width: '20rem' }} id='card'>
         <Card.Img variant="top" src={HabitacionSimple} />
         <Card.Body className='text-light'>
           <Card.Title>Habitacion Simple</Card.Title>
           <Card.Text>
             Las habitaciones Simples estan equipadas con una cama de dos plazas, telefono, una unidad de aire acondicionado frio-calor, caja de seguridad, minibar, armario de una puerta, baño privado con ducha, TV 20' LCD, Wi-Fi. Cuenta con una sala de 20 m2, ideal para compartir en pareja.
           </Card.Text>
           <Button variant="warning" type="submit" className='me-3 buttonHover yellowBG'onClick={handleShow}>Reservar</Button>
           <Button className='darkBlueBG text-light buttonHover btn btn-info'>$25000</Button>
         </Card.Body>
       </Card>
       <Card style={{ width: '20rem' }} id='card'>
         <Card.Img variant="top" src={HabitacionDoble}/>
         <Card.Body className='text-light'>
           <Card.Title>Habitacion Doble</Card.Title>
           <Card.Text>
             Las habitaciones Dobles estan equipadas con dos cama de dos plazas, telefono, una unidad de aire acondicionado frio-calor, caja de seguridad, minibar, armario de una puerta, baño privado con ducha, TV 20' LCD, Wi-Fi. Cuenta con una sala de 25 m2, ideal para compartir con amigos o familia.
           </Card.Text>
           <Button variant="warning" type="submit" className='me-3 buttonHover yellowBG' onClick={handleShow}>Reservar</Button>
           <Button className='darkBlueBG text-light buttonHover btn btn-info'>$35.000</Button>
         </Card.Body>
       </Card>
       <Card style={{ width: '20rem' }} id='card'>
         <Card.Img variant="top" src={HabitacionConfort}/>
         <Card.Body className='text-light'>
           <Card.Title>Habitacion Confort</Card.Title>
           <Card.Text>
            Las habitaciones Confort estan equipadas con una cama de dos plazas y media, telefono, una unidad de aire acondicionado frio-calor, caja de seguridad, minibar, armario de una puerta, baño privado con ducha, TV 20' LCD, Wi-Fi. Cuenta con una sala de 30 m2, con escritorio y silla.
           </Card.Text>
           <Button variant="warning" type="submit" className='me-3 buttonHover yellowBG' onClick={handleShow}>Reservar</Button>
           <Button className='darkBlueBG text-light buttonHover btn btn-info'>$40.000</Button>
         </Card.Body>
       </Card>
       <Card style={{ width: '20rem' }} id='card'>
         <Card.Img variant="top" src={HabitacionSuite}/>
         <Card.Body className='text-light'>
           <Card.Title>Habitacion Suite</Card.Title>
           <Card.Text>
             Las habitaciones Suite estan equipadas con una cama de dos plazas y media, telefono, una unidad de aire acondicionado frio-calor, caja de seguridad, minibar, armario de una puerta, baño privado con ducha, TV 20' LCD, Wi-Fi. Cuenta con una sala de 35 m2, con escritorio y silla.
           </Card.Text>
           <Button variant="warning" type="submit" className='me-3 buttonHover yellowBG' onClick={handleShow}>Reservar</Button>
           <Button className='darkBlueBG text-light buttonHover btn btn-info'>$45.000</Button>

         </Card.Body>
       </Card>
       <Card style={{ width: '20rem' }} id='card'>
         <Card.Img variant="top" src={HabitacionQueen}/>
         <Card.Body className='text-light'>
           <Card.Title>Habitacion Queen</Card.Title>
           <Card.Text>
             Las habitaciones Queen estan equipadas con un sommier Queen, telefono, dos unidades de aire acondicionado frio-calor, caja de seguridad, minibar equipado, armario de dos puerta, baño privado con ducha, TV 50' LCD, Wi-Fi. Cuenta con una sala de 40 m2, sillones y valcon con vista a la ciudad.
           </Card.Text>
           <Button variant="warning" type="submit" className='me-3 buttonHover yellowBG' onClick={handleShow}>Reservar</Button>
           <Button className='darkBlueBG text-light buttonHover btn btn-info'>$55.000</Button>
         </Card.Body>
       </Card>
       <Card style={{ width: '20rem' }} id='card'> 
         <Card.Img variant="top" src={HabitacionKing} />
         <Card.Body className='text-light'>
           <Card.Title>Habitacion King</Card.Title>
           <Card.Text>
             Las habitaciones King estan equipadas con un sommier King, telefono, dos unidades de aire acondicionado frio-calor, caja de seguridad, minibar equipado, armario de dos puerta, baño privado con ducha, TV 70' LCD, Wi-Fi. Cuenta con una sala de 50 m2, sillones y valcon con vista a la ciudad.
           </Card.Text>
           <Button variant="warning" type="submit" className='me-3 buttonHover yellowBG' onClick={handleShow}>Reservar</Button>
           <Button className='darkBlueBG text-light buttonHover btn btn-info'>$75.000</Button>
         </Card.Body>
       </Card>

       <Modal show={show} onHide={handleClose}>
         <Modal.Header closeButton>
           <Modal.Title>Reservar Habitacion</Modal.Title>
         </Modal.Header>
         <Modal.Body>
           <Form>
             <Row>
               <Col>
                 <Form.Control placeholder="Fecha de llegada" /><input type='date'></input>
               </Col>
               <Col>
                 <Form.Control placeholder="Fecha de salida" /><input type='date'></input>
               </Col>
             </Row>
           </Form>
         </Modal.Body>
         <Modal.Footer>
           <Button variant="primary" className='darkBlueBG text-light buttonHover btn btn-info' onClick={handleClose}>
             Ver disponibilidad
           </Button>
         </Modal.Footer>
       </Modal>

      </div>
      <PersonalFooter/>
       
    
    
    
    </>
    
  )
}

export default Catalogo