import React, {useEffect, useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import ProductCard from '../Components/ProductCard/ProductCard';
import Paginat from '../Components/Pagination/Paginat';
import { Helmet } from "react-helmet-async";

function Shopall() {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(16);
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    useEffect(() => {
        fetchData()
        async function fetchData() {
            const {data} = await axios.get(`http://localhost:5000/api/products/`)
            if(data)
            {
                setProducts(data)
            }   
        }
    })
    const currentRecords = products.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(products.length / recordsPerPage);
    return (
        <Container className='mt-5' style={{height: 'fit-content', minHeight: '100vh'}}>
            <Helmet>
                <title>Shop All - NeonWave</title>
            </Helmet>
            <Row className='p-5'>
                <h4 className='text-info fw-bold'>SHOP ALL</h4>
            </Row>
            <Row xs={2} md={4} className='d-flex justify-content-start'>
                {currentRecords.map((product, index) => {
                    return(
                        <Col className="mb-5" key={index}>
                            <ProductCard product={product}/>
                        </Col>
                    )
                })}
            </Row>
            <Row>
                <Paginat
                    nPages = { nPages }
                    currentPage = { currentPage } 
                    setCurrentPage = { setCurrentPage }
                />
            </Row>
        </Container>
    )
}

export default Shopall