import React from 'react';
import '../Landing/Landing.css'
import PersonalNavbar from '../Navbar/PersonalNavbar';
import PersonalFooter from '../Footer/PersonalFooter';
import Button from 'react-bootstrap/Button';
import Foto1 from '../../images/playa1.jpg'
import Foto2 from '../../images/playa2.jpg'
import Foto3 from '../../images/playa3.jpg'
import Carousel from '../Carousel/Carousel';
import Cena1 from '../../images/cena1.jpg'
import Cena2 from '../../images/cena2.jpg'
import Cena3 from '../../images/cena3.jpg'
import Gimnasio1 from '../../images/gimnasio1.jpg'
import Gimnasio2 from '../../images/gimnasio2.jpg'
import Gimnasio3 from '../../images/gimnasio3.jpg'
import Pile1 from '../../images/pile1.jpg'
import Pile2 from '../../images/pile2.jpg'
import Pile3 from '../../images/pile3.jpg'


function Landing() {
  return (
    <>
      <PersonalNavbar/>
      <div className='text-light min-vh-100 max-vw-100 '>
        <section className='row g-0 align-items-center max-vh-50'>
          <div className='col-6 text-center'>
            <span className='display-1'> <strong>ROYAL KING</strong></span>
            <div className=' mb-5 pb-5'><span className='display-3 linkLetters'>HOTEL</span></div>
            <div className='mt-5 pt-5'>
              <Button variant="warning" type="submit" className='buttonHover yellowBG text-light display-6'><strong>RESERVAR AHORA</strong></Button>
            </div>
          </div>
          <div className='col-6 p-4 h-50'>
            <div>
              <img src={Foto1} alt="Familia en la playa" className='img-fluid'/> 
            </div>
            <div className='row mt-1 g-0'>
              <div className='col-6 pe-1 height-sm-img'>
                <img src={Foto2} alt="Familia en la playa" className='w-100 h-100'/> 
              </div>
              <div className='col-6 height-sm-img'>
                <img src={Foto3} alt="Familia en la playa" className='w-100 h-100'/> 
              </div>
            </div>
          </div>
        </section>
        <section>
          <header className='yellowBG p-4 text-center shadow-landing'>
          <p className='display-3'>SERVICIOS</p>
          <p className='fs-2'>En nuestro hotel disponemos de una amplia variedad de servicios que llegan al alcance de todos, como catering, limpieza, spa, gimnasio y muchas otras cosas más que hacen este hotel un lugar más cómodo</p>
          </header>
          <article className='p-4 row g-0'>
          <div className='col-lg-6 col-12'>
          <p className='display-4'>Restaurante</p>
          <p className='fs-3'>Nuestro restaurante ofrece una experiencia culinaria excepcional, fusionando sabores tradicionales de nuestro país con sabores auténticos de otros países. Desde platos exquisitos hasta un servicio impecable, cada visita nos lleva a celebrar las tradiciones y disfrutar de un momento de calidad con nosotros</p>
          </div>
          <div className='col-lg-6 col-12 p-4'>
            <Carousel image1={Cena1} image2={Cena2} image3={Cena3} />
          </div>
          </article>
          <article className='p-4 row g-0 yellowBG shadow-landing'>
          <div className='col-lg-6 col-12 p-4'>
            <Carousel image1={Gimnasio1} image2={Gimnasio2} image3={Gimnasio3} />
          </div>
          <div className='col-lg-6 col-12'>
          <p className='display-4'>Gimnasio</p>
          <p className='fs-3'>Brindamos un espacio cómodo y bien equipado para satisfacer las necesidades de los huéspedes activos, con una variedad de máquinas de entrenamiento y fuerza, lo que le permite a los visitantes mantenerse en forma durante su estancia. Además, ofrecemos vistas panorámicas o acceso a áreas al aire libre para tomarse un descanso, creando una experiencia completa.</p>
          </div>
          </article>
          <article className='p-4 row g-0'>
          <div className='col-lg-6 col-12'>
          <p className='display-4'>Spa & Piscina</p>
          <p className='fs-3'>Descubre nuestro spa exclusivo con piscina, donde la relajación se encuentra con la serenidad. Disfruta de tratamientos rejuvenecedores y sumérgete en la piscina para una experiencia completa de bienestar. Tu escape perfecto.</p>
          </div>
          <div className='col-lg-6 col-12 p-4'>
            <Carousel image1={Pile1} image2={Pile2} image3={Pile3} />
          </div>
          </article>
        </section>
      </div>
      <PersonalFooter/>
    </>
  )
}

export default Landing