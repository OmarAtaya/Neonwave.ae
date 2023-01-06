import React, {useState, useEffect} from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios'
import ProductCard from '../ProductCard/ProductCard';

function Bestseller() {
    const [products, setProducts] = useState([])

    useEffect(() => {
      const fetchProducts = async () => {
        const result = await axios.get('/api/products');
        setProducts(result.data)
      }
      fetchProducts()
    }, [])
    
    return (
        <Container fluid className='mt-3 text-white'>
            <Row>
                <h3>Best Seller</h3>
            </Row>
            <Row xs={2} md={4}>
                {products.map((product, index) => {
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