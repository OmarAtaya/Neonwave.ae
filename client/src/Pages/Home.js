import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Bestseller from '../Components/Bestseller/Bestseller';
import Info from '../Components/Info/Info';
import Slideshow from '../Components/Slideshow/Slideshow';
import { Helmet } from "react-helmet";

function Home() {
  return (
    <Container fluid className=''>
      <Helmet>
        <title>Home - NeonWave</title>
        <meta
          name="description"
          content="Beginner friendly page for learning React Helmet."
        />
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