import React from 'react';
import { Container, Form, Col, FormControl, Button } from 'react-bootstrap';
import { Helmet } from "react-helmet";

function Forgot() {
  return (
    <Container className='vh-100'>
        <Helmet>
            <title>Forgot Password - NeonWave</title>
        </Helmet>
        <Col className='h-100 d-flex flex-column justify-content-center align-items-center gap-2'>
            <Form className='d-flex flex-column gap-4 w-25'>
                <Form.Group className='d-flex flex-column'>
                    <Form.Text className='fs-5 text-info fst-italic' style={{letterSpacing: '3px'}}>RECOVER PASSWORD</Form.Text>
                    <Form.Text className='fs-6 text-white'>Please enter your email:</Form.Text>
                </Form.Group>
                <FormControl
                    type="text"
                    placeholder="Email"
                    className="bg-black text-white"
                />
                <Button variant='outline-info' className=''>RECOVER</Button>
            </Form>
            <p className='text-white'>Remember your password? <a href='/account/register' className='text-white'>Login</a></p>
        </Col>
    </Container>
  )
}

export default Forgot