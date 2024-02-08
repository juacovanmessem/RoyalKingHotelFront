import React from 'react'
import './SobreNosotros.css'
import PersonalNavbar from '../Navbar/PersonalNavbar';
import PersonalFooter from '../Footer/PersonalFooter';
import Logo from '../../images/Logo_incompleto_-_icono.png'
import Container from 'react-bootstrap/Container';

function SobreNosotros() {
  return (
    <> 
      <PersonalNavbar/>
      <br></br>
      <Container className=' text-light text-center'> 
        
        <h1>SOBRE ROYAL KING HOTEL</h1>
        <br></br>
        <h3>Historia de Royal King</h3>
        <p>
          La cadena Nacional Royal King se fundó en Tucumán, Argentina, en 2003 como pequeño negocio vacacional de la familia Van Messem, fundadora y actual propietaria en segunda generación, el nombre Royal es en memoria a la primera generacion "Royal Van Messem". 
          <br></br>
          La compañía se centra en la hotelería vacacional y más del 75% de sus establecimientos ofrecen el reconocido servicio All inclusive de 5 estrellas. Con la inauguración de su primer hotel de ciudad en 2004, RIU amplía su gama de productos con su propia línea de hoteles urbanos llamada Riu Plaza. Royal King Hotel cuenta con 10 hoteles en todo el países que en 2024 recibieron 1 millon de clientes y trabajaron un total de 10.000 empleados. Actualmente Royal King se encuentra entre los 10 mejores hotel 5 estrellas.
        </p>
        <img src={Logo} alt="Familia en la playa" className='img-fluid'/>
        <br></br>
        <hr></hr>
        <h3>- CINCO ESTRELLAS -</h3>
        <p>Royal King empezó siendo un hotel 2 estrellas, con el pasar de los años y luego de mucho esfuerzo y trabajo con la ambicion de brindar un mejor servicio y comodidad confort logramos llegar a las 5 estrellas.</p>
        <h4>¿Porque elegir Royal King?</h4>
        <br></br>
        <p>Royal king al ser un hotel 5 estrellas, te brinda los siguientes servicios y comodidades:</p> 
        <br></br>
        <p>Habitaciones de lujo con todas las comodidades para sentirte no como en casa, sino en un nivel superior. Múltiples restaurantes de cocina nacional e internacional. Bares y cafeterías. Antros dentro del hotel. Room service las 24 horas. Asistentes y mayordomos a tu disposición. Spa. Alberca. Gimnasio.Jardines. Jacuzzi. Wifi en todas las instalaciones. Estacionamiento propio y valet parking. Roof garden y terrazas. Salones para eventos. Tv por cable o inteligente. Personal de seguridad y atención en todo el hotel. Transporte exclusivo del hotel. Lavandería y tintorería. Actividades recreativas</p>
      </Container>
      <br></br>
    
      <PersonalFooter/>
    </>
  )
}

export default SobreNosotros