import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Helmet } from "react-helmet-async";

function Contact() {
    return (
        <Container className='mt-5' style={{height: 'fit-content', minHeight: '100vh'}}>
          <Helmet>
            <title>Contact Us - NeonWave</title>
          </Helmet>
          <Row className='pt-5'>
            <h4 className='text-info p-5'>CONTACT US</h4>
          </Row>
          <Row>
            <p className='text-white'>Have any comments, questions, queries or otherwise?</p>
            <p className='text-white'>Please don't hesitate to contact our team via email at contact@neonwave.ae</p>
            <p className='text-white'>or WhatsApp us :)</p>
            <p className='text-white'>We'll usually get back to you within 24 hours, thanks! :)</p>
            <p className='text-white'>-NeonWave Team</p>
          </Row>
        </Container>
      )
}

export default Contact