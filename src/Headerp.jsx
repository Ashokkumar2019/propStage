import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slider from './slider.json'; // Ensure the correct path to your JSON file

export default function Headerp() {
  return (
    <Carousel>
      {slider.map((e) => (
        <Carousel.Item key={e.id}>
          <img src={e.image} alt={`Image of ${e.title}`} className='w-100 d-block' role="img"  />
          <Carousel.Caption>
            <h3>{e.title}</h3>
            <p>{e.description}</p>
            <div className='ctaLink'>
              <a href={e.link}>Learn More</a> {/* Updated to include text inside the anchor tag */}
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
