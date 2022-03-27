import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import Container from 'react-bootstrap/esm/Container';
import { Link } from 'react-router-dom';

const CarouselHome = () => {
  return (
    <Carousel variant="dark" fade>
      <Carousel.Item>
        <img
          className="d-block w-100 height"
          src="/images/home221.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="caption-color">
          <h3>Find your signiture style</h3>
          <p>Explore our latest threads</p>
          <Link to="/products" className="btn btn-outline-dark">
            Explore
          </Link>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 height"
          src="/images/home.jpeg"
          alt="Second slide"
        />

        <Carousel.Caption className="caption-color">
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Link to="/products" className="btn btn-outline-dark">
            Explore
          </Link>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 height"
          src="/images/home5.jpg"
          alt="Third slide"
        />

        <Carousel.Caption className="caption-color">
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <Link to="/products" className="btn btn-outline-dark">
            Explore
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselHome;