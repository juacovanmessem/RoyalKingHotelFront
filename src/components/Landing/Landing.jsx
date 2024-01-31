import React from 'react';
import PersonalNavbar from '../Navbar/PersonalNavbar';
import PersonalFooter from '../Footer/PersonalFooter';
import Button from 'react-bootstrap/Button';
import Foto1 from '../../images/AK_ANURO_Royalton_Antigua_Family_1920x1080.jpg'
import Foto2 from '../../images/0wgoK-XTs_1200x0__1.jpg'
import Foto3 from '../../images/photo1jpg.jpg'


function Landing() {
  return (
    <>
      <PersonalNavbar/>
      <div className='text-light min-vh-100 max-vw-100 '>
        <div className='row g-0 align-items-center max-vh-50'>
          <div className='col-6 text-center'>
            <div><span className='display-1'> <strong>ROYAL KING</strong></span></div>
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
              <div className='col-6 pe-1'>
                <img src={Foto2} alt="Familia en la playa" className='img-fluid'/> 
              </div>
              <div className='col-6'>
                <img src={Foto3} alt="Familia en la playa" className='img-fluid'/> 
              </div>
            </div>
          </div>
        </div>
        <div className='yellowBG p-4 text-center'>
          <p className='display-3'>SERVICIOS</p>
          <p className='display-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, officiis atque! Harum inventore odio quaerat incidunt voluptate quod. Natus ea quasi sequi alias neque nulla odit earum maiores unde laboriosam!</p>
        </div>
        <div className='p-4 row g-0'>
          <div className='col-lg-6 col-12'>
          <p className='display-4'>Restaurante</p>
          <p className='display-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, officiis atque! Harum inventore odio quaerat incidunt voluptate quod. Natus ea quasi sequi alias neque nulla odit earum maiores unde laboriosam!</p>
          </div>
          <div className='col-6'></div>
        </div>
        <div className='p-4 row g-0 yellowBG'>
          <div className='col-6'></div>
          <div className='col-lg-6 col-12'>
          <p className='display-4'>Gimnsaio</p>
          <p className='display-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, officiis atque! Harum inventore odio quaerat incidunt voluptate quod. Natus ea quasi sequi alias neque nulla odit earum maiores unde laboriosam!</p>
          </div>
        </div>
        <div className='p-4 row g-0'>
          <div className='col-lg-6 col-12'>
          <p className='display-4'>Spa & Piscina</p>
          <p className='display-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, officiis atque! Harum inventore odio quaerat incidunt voluptate quod. Natus ea quasi sequi alias neque nulla odit earum maiores unde laboriosam!</p>
          </div>
          <div className='col-6'></div>
        </div>
      </div>
      <PersonalFooter/>
    </>
  )
}

export default Landing