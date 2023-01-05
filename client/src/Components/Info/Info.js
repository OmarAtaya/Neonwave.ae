import React from 'react';
import { Col, Container, Row, Image,Card, Button } from 'react-bootstrap';
import InfoImg from '../../assets/Info.jpg'

function Info() {
    return (
        <Container fluid className='mt-3'>
            <Row className='d-flex flex-column flex-md-row align-items-center mx-3'>
                <Col>
                    <Image src={InfoImg} alt='' className='w-75'/>
                </Col>
                <Col className='d-flex flex-column flex-md-row align-items-center'>
                    <Card className='text-start bg-black text-light w-auto' variant="dark">
                        <Card.Header style={{color: '#25a9c8'}}>
                            NEON WAVE
                        </Card.Header>
                        <Card.Body className='text-center text-md-start'>
                            <Card.Title style={{color: '#25a9c8'}}>THE HOME OF VISUAL DECOR</Card.Title>
                            <Card.Text>
                            Neon Wave is a boutique that specializes in modern, visually pleasing decor that will light up any setting you put them in.
                            </Card.Text>
                            <Card.Text>
                            Affordable, aesthetic and superior quality, that's what we're all about.  
                            </Card.Text>
                            <Button variant='outline-light' className='w-auto' style={{borderWidth: '1px'}}>Shop Our Collection</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Info