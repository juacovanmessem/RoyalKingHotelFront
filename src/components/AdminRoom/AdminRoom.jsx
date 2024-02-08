import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Table from 'react-bootstrap/Table';
import '../AdminRoom/AdminRoom.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import { useForm } from 'react-hook-form';


function AdminRoom() {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const { register, handleSubmit, reset } = useForm ()

  const onSubmit = async (data) => {
   
    for (let roomNumber = data.minN; roomNumber <= data.maxN; roomNumber++) {

      const roomData = {numeroHab: roomNumber, tipoHab: data.tipoHab, precio: data.precio, descripcion:data.descripcion, estado:true, img: data.img}
      
      console.log(roomData)
      
      const sendData = await fetch ( 'http://localhost:4000/habitaciones', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        body: JSON.stringify(roomData)
      })
      
      const response = await sendData.json()
      
      console.log(response)
      
    };

    reset()
  }

  
  const handleClick = () => {
    const formGroup = document.createElement('div'); 
    formGroup.classList.add('mb-3', 'row', 'g-0', 'form-group');

    const formLabel = document.createElement('label');
    formLabel.textContent = 'Imágenes';
    formLabel.classList.add('d-none');
    const formControl = document.createElement('input'); 
    formControl.classList.add('lightYellowBG', 'col', 'form-control'); 
    formControl.setAttribute('type', 'text');
    formControl.setAttribute('placeholder', 'Ingrese el URL de la imagen');
    formControl.setAttribute('required', true);

    const addButton = document.createElement('Button');
    addButton.textContent = 'x'
    addButton.classList.add('col-1', 'btn', 'btn-danger')
    addButton.addEventListener('click', handleRemoveClick)
    
    formGroup.appendChild(formLabel);
    formGroup.appendChild(formControl); 
    formGroup.appendChild(addButton);

    document.getElementById('container').appendChild(formGroup); 
  };
  const handleRemoveClick = (event) => {
    const formGroup = event.target.parentElement; 
    formGroup.remove(); 
  };
  
  const [imageUrls, setImageUrls] = useState(['']);

  useEffect(() => {
    showTable()
  }, []);

  const showTable = () => {
    fetch('http://localhost:4000/habitaciones')
      .then(response => response.json())
      .then(data => {
        const roomTable = document.getElementById('roomTable');

        // Iterar sobre las habitaciones y mostrar la información
        data.habitaciones.forEach(habitacion => {
          const roomTR = document.createElement('tr');
          roomTR.innerHTML = `
          <td>'${habitacion.nurmoHab}'</td>
          <td>'${habitacion.tipoHab}'</td>
          <td>'${habitacion.precio}'</td>
          <td>'${habitacion.estado}'</td>
          <td><div className='d-flex justify-content-evenly'><i className="bi bi-pencil-square"></i><i className="bi bi-trash3-fill"></i></div></td>
          <td><Button className='me-3 buttonHover yellowBG btn btn-warning' id='${habitacion.nurmoHab}'>Ver reserva</Button></td>
          `;
          roomTable.appendChild(roomTR);
        });
      })
      .catch(error => console.error(error));
  };

  return (
    <>
      <header className='m-4'>
        <h2 className='text-light'>Gestión de habitaciones</h2>
        <div>
          <Button variant="warning" onClick={handleShow} className='me-3 p-2 buttonHover yellowBG'>
            Nuevas habitaciones
          </Button>
          <Modal show={show} onHide={handleClose}  size="lg">
            <Modal.Header closeButton  className='yellowBG'>
              <Modal.Title>Formulario para añadir habitaciones</Modal.Title>
            </Modal.Header>
            <Modal.Body  className='yellowBG'>
              <Form onSubmit={handleSubmit ((data) => onSubmit(data))}>
                <Form.Group  className="mb-3" controlId="roomName">
                  <Form.Label>Tipo de habitación</Form.Label>
                  <Form.Select 
                  aria-label="Default select example" className='lightYellowBG'
                  required
                  {...register('tipoHab')}>
                    <option value="1">Habitación Simple</option>
                    <option value="2">Habitación Doble</option>
                    <option value="3">Habitación Confort</option>
                    <option value="4">Habitación Suite</option>
                    <option value="5">Habitación Queen</option>
                    <option value="6">Habitación King</option>
                  </Form.Select>
                </Form.Group>
                <div className='row g-0 justify-content-between'>
                  <Form.Group controlId="roomPrice" className='col-12 col-lg-4'>
                    <Form.Label>Précio</Form.Label>
                    <Form.Control
                      className='lightYellowBG' 
                      type="number" 
                      placeholder="Ingrese el precio" 
                      minLength={3} maxLength={20} 
                      required
                      {...register('precio')}
                    />
                  </Form.Group>

                  <Form.Group controlId="roomsNumber" className='col-12 col-lg-7'>
                    <Form.Label>El rango de habitaciones</Form.Label>
                    <InputGroup className="mb-3">
                      <InputGroup.Text className='yellowBG'>De Nº</InputGroup.Text>
                      <Form.Control aria-label="First name" type='number' controlId="roomMinNumber" className='lightYellowBG'
                      {...register('minN')}
                      minLength={1} maxLength={6} 
                      required
                      />
                      <InputGroup.Text className='yellowBG'>a</InputGroup.Text>
                      <Form.Control 
                      aria-label="Last name"
                      type='number' 
                      controlId="roomMaxNumber" 
                      className='lightYellowBG'
                      {...register('maxN')}
                      minLength={1} maxLength={6} 
                      required
                       />
                    </InputGroup>
                  </Form.Group>
                </div>

                <div id="container">
                <Form.Group className="mb-3 row g-0" controlId="roomImg">
                  <Form.Label>Imágenes</Form.Label>
                  <Form.Control 
                  className='lightYellowBG col' 
                  type='text' 
                  placeholder="Ingrese el URL de la imagen"
                  {...register('img')}
                  required
                  />
                  <Button onClick={handleClick} className='col-1' variant='info'> + </Button>
                </Form.Group>
                </div>

                <Form.Group className="mb-3" controlId="roomDescription">
                  <Form.Label>Añade una descripción</Form.Label>
                  <Form.Control
                    className='lightYellowBG' 
                    as="textarea" 
                    rows={3} 
                    required
                    {...register('descripcion')}
                    minLength={20} maxLength={400}
                    />
                </Form.Group>

                <Button variant="primary" type="submit" className='darkBlueBG buttonHover'>
                  Crear habitaciones
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
          <tbody  id='roomTable'>
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