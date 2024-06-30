import React from 'react';
import { Carousel } from 'react-bootstrap';

const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= "https://images.pexels.com/photos/290416/pexels-photo-290416.jpeg"
          alt="Boxeo"
          style={{ maxWidth: '100%', maxHeight: '500px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3>Clases de boxeo </h3>
          <p><b>Empieza a golpear tus límites: hoy es el día de dar el primer paso en el boxeo.</b></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/3775566/pexels-photo-3775566.jpeg"
          alt="Spininng"
          style={{ maxWidth: '100%', maxHeight: '500px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3>Spinning</h3>
          <p><b>Empieza hoy, transforma mañana: ¡al ritmo del spinning!</b></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg"
          alt="Levantar pesas"
          style={{ maxWidth: '100%', maxHeight: '500px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3>Levantamiento de pesas</h3>
          <p><b>Prepárate para romper tus límites: ¡comienza tu viaje de levantamiento de pesas hoy mismo!.</b></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
