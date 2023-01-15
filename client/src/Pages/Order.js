import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

function Order() {
    const [orderInformation, setOrderInformation] = useState();
    const [searchParams] = useSearchParams();

    useEffect(() => {
        formSubmit()

        async function formSubmit() {
            const orderId = searchParams.get('id')
            try {
              const {data} = await axios.get(`http://localhost:5000/api/orders/${orderId}`)
              
              setOrderInformation(data)
            } catch(err) {}
        }
    },[searchParams])
    
    return (
        <Container className='mt-5' style={{height: 'fit-content', minHeight: '100vh'}}>
            {orderInformation !== undefined && 
                <Row className='p-5'>
                    <h3 className='text-info fw-bold'>Your Order Has Been Placed!</h3>
                        <h4 className='text-info'>Order Confirmation Number: #{orderInformation.uid}</h4>
                        <h4 className='text-info'>Date: {orderInformation.createdAt.split('T', 1)}</h4>
                </Row>
            }
            {orderInformation !== undefined &&
                <Row className='text-start mb-5'>
                    <h4 className='text-info fw-bold mb-4'>Shipping Info-</h4>
                    <h5 className='text-info'>Full Name: <span className='text-white'>{orderInformation.address.fullName}</span></h5>
                    <h5 className='text-info'>Address 1: <span className='text-white'>{orderInformation.address.address}</span></h5>
                    <h5 className='text-info'>Address 2: <span className='text-white'>{orderInformation.address.address2}</span></h5>
                    <h5 className='text-info'>Country: <span className='text-white'>{orderInformation.address.country}</span></h5>
                    <h5 className='text-info'>City: <span className='text-white'>{orderInformation.address.city}</span></h5>
                    <h5 className='text-info'>Phone Number: <span className='text-white'>{orderInformation.address.phoneNumber}</span></h5>
                </Row>
            }
            <Row className='d-flex flex-column align-items-center'>
                {orderInformation !== undefined && orderInformation.items.map((item, index) => {
                    return(
                        <Row key={index} className='d-flex flex-column flex-lg-row align-items-center justify-content-between'>
                            <Col>
                                {item.images.map((image, index) => {
                                    let curr
                                    if(item.colorCheck > 0){
                                        curr = index === (item.colorCheck + 1)
                                    }
                                    else{
                                        curr = index === item.colorCheck
                                    }
                                    return curr ?
                                        <Image src={image} alt='' key={index} className='w-75'/>
                                    :   ''
                                    
                                })}
                            </Col>
                            <Col className='text-white text-center text-lg-start w-auto'>
                                <h5 className='text-info'>{item.title}</h5>
                                <h5 className='text-capitalize'>
                                    {item.sizes.map((size, index) => {
                                        return(
                                            index === item.sizeCheck ? size : ''
                                        )
                                    })} CM /  {
                                    item.colors.map((color, index) => {
                                        return(
                                            index === item.colorCheck ? color : ''
                                        )
                                    })}
                                </h5>
                                <h5>Acrylic Backing Style: {item.backing}</h5>
                                <h5>Waterproof: {item.water}</h5>
                                <h5>Dimmer: {item.dimmer}</h5>
                                <h5>Quantity: {item.quantity}</h5>
                            </Col>
                            <Col className='d-flex flex-column align-items-center justify-content-center text-white fw-bold mt-2'>
                                <h4 className='text-white fw-bold'>{item.price * item.quantity} AED</h4> 
                            </Col>
                        </Row>
                    )
                })}
            </Row>
        </Container>
    )
}

export default Order