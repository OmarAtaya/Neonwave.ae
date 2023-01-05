import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ProductCard({product}) {
    return (
        <Link to={`/product/${product.slug}`} style={{textDecoration: 'none', color: 'white'}}>
            <Card bg="black" className='product__card d-flex flex-column align-items-center w-100'>
                <Card.Img src={product.image} alt='' className='w-100'/>
                <Card.Title>{product.title}</Card.Title>
                <Card.Subtitle>FROM {product.price} AED</Card.Subtitle>
            </Card>
        </Link>
        
    )
}

export default ProductCard