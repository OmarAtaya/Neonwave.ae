import React from 'react';
import { Container, Row, Image } from 'react-bootstrap';
import Sizes from '../assets/Sizes.jpg';

function Size() {
    return (
        <Container className='mt-5 pt-5' style={{height: 'fit-content', minHeight: '100vh'}}>
            <Row className='p-5'>
                <h3 className='text-info'>Size Guide</h3>
            </Row>
            <Row className='d-flex justify-content-center'>
                <Image src={Sizes} alt='' className='w-75'/>
            </Row>
        </Container>
    )
}

export default Size