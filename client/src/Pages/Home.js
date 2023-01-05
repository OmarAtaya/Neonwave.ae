import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Bestseller from '../Components/Bestseller/Bestseller';
import Info from '../Components/Info/Info';
import Slideshow from '../Components/Slideshow/Slideshow'

function Home() {
  return (
    <Container fluid>
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