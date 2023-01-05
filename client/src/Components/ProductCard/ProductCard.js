import React from 'react';
import { Card } from 'react-bootstrap';

function ProductCard({product}) {
    return (
        <Card bg="black" className='product__card d-flex flex-column align-items-center'>
            <Card.Img src={product.image} alt='' className='w-100'/>
            <Card.Title>{product.title}</Card.Title>
            <Card.Subtitle>FROM {product.price} AED</Card.Subtitle>
        </Card>
    )
}

export default ProductCard