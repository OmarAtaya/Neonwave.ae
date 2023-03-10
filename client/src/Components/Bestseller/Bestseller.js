import React, {useState, useEffect} from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import Axios from 'axios'
import ProductCard from '../ProductCard/ProductCard';
import { Link } from 'react-router-dom';

function Bestseller() {
    const [products, setProducts] = useState([])

    useEffect(() => {
      const fetchProducts = async () => {
        const result = await Axios.get('http://localhost:5000/api/products/category/best-seller');
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
                    return index < 4
                    ?   <Col className="mb-5" key={index}>
                            <ProductCard product={product}/>
                        </Col>
                    :   ''
                    
                })}
            </Row>
            <Row>
                <Link to='/collections/best-seller'>
                    <Button variant='outline-light' className='w-auto mx-auto'>VIEW ALL</Button>
                </Link>
            </Row>
        </Container>
    )
}

export default Bestseller