import React, {useState, useEffect} from 'react';
import {Container, FormControl, Row, Col } from 'react-bootstrap';
import ProductCard from '../Components/ProductCard/ProductCard';
import { useLocation } from 'react-router-dom';
import Paginat from '../Components/Pagination/Paginat';
import axios from 'axios';

function Search() {
    const {state} = useLocation();
    const [searchText, setSearchText] = useState(state || '');
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(16);
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

    useEffect(() => {
        fetchData()
        async function fetchData() {
            if(searchText !== '')
            {
                const {data} = await axios.get(`http://localhost:5000/api/products/${searchText}`)
                if(data)
                {
                    setProducts(data)
                }   
            }  
            else{
                setProducts([])
            }
        }
    }, [searchText])
    const currentRecords = products.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(products.length / recordsPerPage);
    return (
        <Container className='mt-5' style={{height: 'fit-content', minHeight: '100vh'}}>
            <Row className='d-flex flex-column align-items-center py-5'>
                <h4 className='text-info'>SEARCH</h4>
                <h5 className='text-white'>Enter a word to search our products:</h5>
                <FormControl
                    type="text"
                    placeholder="Enter Item Name"
                    onChange={(e) => setSearchText(e.currentTarget.value)}
                    className="bg-black text-white w-75"
                />
               
            </Row>
            <Row xs={2} md={4}>
                {currentRecords.map((product, index) => {
                    return(
                        <Col className="mb-5" key={index}>
                            <ProductCard product={product}/>
                        </Col>
                    )
                })}
            </Row>
            <Row>
                {products.length !== 0 && 
                    <Paginat
                        nPages = { nPages }
                        currentPage = { currentPage } 
                        setCurrentPage = { setCurrentPage }
                    />
                }
            </Row>
        </Container>
    )
}

export default Search