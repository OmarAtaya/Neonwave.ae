import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import ProductCard from '../ProductCard/ProductCard';
import Data from './Products';

function Bestseller() {
    return (
        <Container fluid className='mt-3 text-white'>
            <Row>
                <h3>Best Seller</h3>
            </Row>
            <Row className="d-flex flex-row mb-5">
                {Data.map((product) => {
                    return(
                        <ProductCard product={product}/>
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