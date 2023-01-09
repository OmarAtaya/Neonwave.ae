import React, {useContext, useState} from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'
import { Store } from '../../Store';


function CartItemBox({cartItem}) {
    const {dispatch: ctxDispatch} = useContext(Store);

    const removeItem = (cartItem) => {
        ctxDispatch({type: 'CART_REMOVE_ITEM', payload: cartItem})
    }

    const addItem = (cartItem, quantity1) => {
        ctxDispatch({type: 'CART_ADD_ITEM', payload: {...cartItem, quantity1}})
    }
    

    return (
        <Container fluid className='mb-3'>
            <Row className='d-flex flex-column flex-lg-row align-items-center justify-content-between'>
                <Col>
                    {cartItem.images.map((image, index) => {
                        let curr
                        if(cartItem.colorCheck > 0){
                            curr = index === (cartItem.colorCheck + 1)
                        }
                        else{
                            curr = index === cartItem.colorCheck
                        }
                        return curr ?
                            <Image src={image} alt='' key={index} className='w-75'/>
                        :   ''
                        
                    })}
                </Col>
                <Col className='text-white text-lg-start w-auto'>
                    <h5 className='text-info'>{cartItem.title}</h5>
                    <h5 className='text-capitalize'>
                        {cartItem.sizes.map((size, index) => {
                            return(
                                index === cartItem.sizeCheck ? size : ''
                            )
                        })} CM /  {
                        cartItem.colors.map((color, index) => {
                            return(
                                index === cartItem.colorCheck ? color : ''
                            )
                        })}
                    </h5>
                    <h5>Acrylic Backing Style: {cartItem.backingCheck}</h5>
                    <h5>Waterproof: {cartItem.waterCheck}</h5>
                    <h5>Dimmer: {cartItem.dimmerCheck}</h5>
                </Col>
                <Col className='d-flex flex-column align-items-center justify-content-center gap-2'>
                    <div className='d-flex align-items-center gap-3 justify-content-between border border-light p-2 w-75 h-25 text-white'>
                        <AiOutlineMinus size={20} onClick={() => {if(cartItem.quantity1 > 1){addItem(cartItem, cartItem.quantity1 - 1)}}}/>
                        <h3>{cartItem.quantity1}</h3>
                        <AiOutlinePlus size={20} onClick={() => {if(cartItem.quantity1 < 20){addItem(cartItem, cartItem.quantity1 + 1)}}}/>
                    </div>
                    <Button variant='none' className='text-white' onClick={() => removeItem(cartItem)}>Remove Item</Button>
                </Col>
                <Col className='d-flex flex-column align-items-center justify-content-center text-white fw-bold mt-2'>
                    <h4 className='text-white fw-bold'>{cartItem.total * cartItem.quantity1} AED</h4> 
                </Col>
            </Row>
        </Container>
    )
}

export default CartItemBox