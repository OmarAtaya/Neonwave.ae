import React, {useState, useEffect} from 'react';
import { Button, Container, FormControl, Row, Col } from 'react-bootstrap';
import ProductCard from '../Components/ProductCard/ProductCard';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function Search() {
    const {state} = useLocation();
    const [searchText, setSearchText] = useState(state || '');
    const [products, setProducts] = useState([]);

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
    window.scrollTo(0, 0)
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

export default Search