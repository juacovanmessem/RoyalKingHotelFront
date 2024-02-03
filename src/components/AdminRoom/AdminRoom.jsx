import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Table from 'react-bootstrap/Table';
import '../AdminRoom/AdminRoom.css'
import "bootstrap-icons/font/bootstrap-icons.css";

function AdminRoom() {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    showTable()
  });

  const showTable = () => {
    fetch('http://localhost:4000/habitaciones')
      .then(response => response.json())
      .then(data => {
        const roomTable = document.getElementById('roomTable');

        // Iterar sobre las habitaciones y mostrar la información
        data.habitaciones.forEach(habitacion => {
          const roomTR = document.createElement('tr');
          roomTR.innerHTML = `
          <tr className='h-auto'>
          <td>'${habitacion.nurmoHab}'</td>
          <td>'${habitacion.tipoHab}'</td>
          <td>'${habitacion.precio}'</td>
          <td>'${habitacion.estado}'</td>
          <td><div className='d-flex justify-content-evenly'><i className="bi bi-pencil-square"></i><i className="bi bi-trash3-fill"></i></div></td>
          <td><Button variant='warning' className='me-3 buttonHover yellowBG' id='${habitacion.nurmoHab}'>Ver reserva</Button></td>
        </tr>
          `;
          roomTable.appendChild(roomTR);
        });
      })
      .catch(error => console.error(error));

  }

  return (
    <>
      <header className='m-4'>
        <h2 className='text-light'>Gestión de habitaciones</h2>
        <div>
          <Button variant="warning" onClick={handleShow} className='me-3 buttonHover yellowBG'>
            Crear modelo de habitación
          </Button>
          <Modal show={show} onHide={handleClose}  size="lg">
            <Modal.Header closeButton  className='yellowBG'>
              <Modal.Title>Crear modelo de habitación</Modal.Title>
            </Modal.Header>
            <Modal.Body  className='yellowBG'>
              <Form>
                <Form.Group  className="mb-3" controlId="roomName">
                  <Form.Label>Tipo de habitación</Form.Label>
                  <Form.Control className='lightYellowBG' type="text" placeholder="Ingrese el tipo de habitación" required/>
                </Form.Group>
                <div className='row g-0 justify-content-between'>
                  <Form.Group controlId="roomPrice" className='col-4'>
                    <Form.Label>Précio</Form.Label>
                    <Form.Control className='lightYellowBG' type="number" placeholder="Ingrese el precio" required />
                  </Form.Group>

                  <Form.Group controlId="roomsNumber" className='col-7'>
                    <Form.Label>El rango de habitaciones</Form.Label>
                    <InputGroup className="mb-3">
                      <InputGroup.Text className='yellowBG'>De Nº</InputGroup.Text>
                      <Form.Control aria-label="First name" type='number' controlId="roomMinNumber" className='lightYellowBG'/>
                      <InputGroup.Text className='yellowBG'>a</InputGroup.Text>
                      <Form.Control aria-label="Last name"type='number' controlId="roomMaxNumber" className='lightYellowBG' />
                    </InputGroup>
                  </Form.Group>
                </div>



                <Form.Group className="mb-3" controlId="roomImages">
                  <Form.Label>Imágenes</Form.Label>
                  <Form.Control className='lightYellowBG' type='file' placeholder="Seleccione los archivos"  multiple required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="roomDescription">
                  <Form.Label>Añade una descripción</Form.Label>
                  <Form.Control className='lightYellowBG' as="textarea" rows={3} required/>
                </Form.Group>

                <Button variant="primary" type="submit" className='darkBlueBG buttonHover'>
                  Crear Modelo
                </Button>
              </Form>
            </Modal.Body>
            <Modal.Footer  className='yellowBG'>
              <Button variant="secondary" onClick={handleClose} className='darkBlueBG buttonHover'>
                Close
              </Button>
          </Modal.Footer>
        </Modal>
        </div>
      </header>
      <main className='text-light'>
        <Table responsive striped className='container-lg' variant='primary'>
          <thead>
            <tr>
              <th>Nº</th>
              <th>Tipo de habitación</th>
              <th>Precio</th>
              <th>Estado</th>
              <th className='text-center'>Modificar</th>
              <th>Reserva</th>
            </tr>
          </thead>
          <tbody  controlId='roomTable'>
            <tr className='h-auto'>
              <td>1000</td>
              <td>Simple</td>
              <td>12000</td>
              <td>Disponible</td>
              <td><div className='d-flex justify-content-evenly'><i className="bi bi-pencil-square"></i><i className="bi bi-trash3-fill"></i></div></td>
              <td><Button variant='warning' className='me-3 buttonHover yellowBG'>Ver reserva</Button></td>
            </tr>
          </tbody> 
        </Table>
      </main>
    </>
  )
}

export default AdminRoom