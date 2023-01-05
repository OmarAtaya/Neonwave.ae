import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../ProductCard/ProductCard';
import Data from './Products';

function Bestseller() {
    return (
        <Container fluid className='mt-3 text-white'>
            <Row>
                <h3>Best Seller</h3>
            </Row>
            <Row xs={2} md={4}>
                {Data.map((product, index) => {
                    return(
                        <Col className="mb-5" key={index}>
                            <ProductCard product={product}/>
                        </Col>
                    )
                })}
            </Row>
            <Row>
                <Button variant='outline-light' className='w-auto mx-auto'>VIEW ALL</Button>
            </Row>
        </Container>
    )
}

export default Bestseller