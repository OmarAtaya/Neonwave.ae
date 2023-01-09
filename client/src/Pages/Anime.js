import React, {useEffect, useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import ProductCard from '../Components/ProductCard/ProductCard';

function Anime() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetchData()
        async function fetchData() {
            const {data} = await axios.get(`http://localhost:5000/api/products/category/anime`)
            if(data)
            {
                setProducts(data)
            }   
        }
    }, [])
    window.scrollTo(0, 0)
    return (
        <Container className='mt-5' style={{height: 'fit-content', minHeight: '100vh'}}>
            <Row className='p-5'>
                <h4 className='text-info fw-bold'>ANIME</h4>
            </Row>
            <Row xs={2} md={4} className='d-flex justify-content-center'>
                {products.map((product, index) => {
                    return(
                        <Col className="mb-5" key={index}>
                            <ProductCard product={product}/>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}

export default Anime