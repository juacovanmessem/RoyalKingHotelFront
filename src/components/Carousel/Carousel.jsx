import Carousel from 'react-bootstrap/Carousel';
import '../Carousel/Carousel.css'

function UncontrolledExample(props) {
  return (
    <Carousel >
      <Carousel.Item className='carousel-height'>
        <img src={props.image1} class="d-block w-100 object-cover" alt={props.alt1} />
      </Carousel.Item>
      <Carousel.Item className='carousel-height'> 
        <img src={props.image2} class="d-block w-100 object-cover" alt={props.alt2} />
      </Carousel.Item>
      <Carousel.Item className='carousel-height'>
        <img src={props.image3} class="d-block w-100 object-cover" alt={props.alt3} />
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;