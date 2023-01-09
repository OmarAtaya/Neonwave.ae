import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Bestseller from '../Components/Bestseller/Bestseller';
import Info from '../Components/Info/Info';
import Slideshow from '../Components/Slideshow/Slideshow';
import { Helmet } from "react-helmet-async";

function Home() {
  window.scrollTo(0, 0)
  return (
    <Container fluid>
      <Helmet>
        <title>Home - NeonWave</title>
      </Helmet>
      <Row>
        <Slideshow/>
        <Info/>
        <hr className='text-light mt-3'/>
        <Bestseller/>
      </Row>
    </Container>    
  )
}

export default Home