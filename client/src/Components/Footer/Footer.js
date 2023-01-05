import React from 'react';
import {Col, Container, Row, Form, FloatingLabel, Button, ListGroup} from 'react-bootstrap';
import {AiOutlineInstagram} from 'react-icons/ai'

function Footer() {
  return (
    <Container fluid className='mt-3 p-5 text-white fw-bold'>
        <Row className='d-flex flex-column flex-lg-row justify-content-between gap-5'>
            <Col className='text-start'>
                <p>JOIN OUR FAMILY!</p>
                <p>Sign up for exclusive offers, promos and product launches! We promise we won't send you lots of emails, only the good stuff.</p>
                <Form>
                   <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3 text-white w-75"
                    >
                        <Form.Control type="email" className='bg-black' placeholder=""/>
                    </FloatingLabel>
                    <Button type='submit' variant='outline-info' className='w-50 fw-bold'>SUBSCRIBE</Button>
                </Form>
            </Col>
            <Col className='text-start'>
                <p>QUICK LINKS</p>
                <ListGroup>
                    <ListGroup.Item className='border-0 bg-black text-white' action href="/contact-us">Contact Us</ListGroup.Item>
                    <ListGroup.Item className='border-0 bg-black text-white' action href="/font-product-size">Fonts/Product/Size Guide</ListGroup.Item>
                    <ListGroup.Item className='border-0 bg-black text-white' action href="/faq">FAQs</ListGroup.Item>
                    <ListGroup.Item className='border-0 bg-black text-white' action href="/size">Size Guide</ListGroup.Item>
                    <ListGroup.Item className='border-0 bg-black text-white' action href="/shipping-return">Shipping/Returns</ListGroup.Item>
                </ListGroup>
            </Col>
            <Col className='text-start'>
                <p>STAY CONNECTED</p>
                <p>Join our family and stay connected with us!</p>
                <AiOutlineInstagram size={23}/>
            </Col>
        </Row>
    </Container>
  )
}

export default Footer