import React, {useContext} from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { Store } from '../Store';
import CartItemBox from '../Components/CartItem/CartItemBox';

function CartThree({setCartStep}) {
    const {state: cartState} = useContext(Store);
    const {cart} = cartState;
    const {shippingAddress} = cart;

    return (
        <Container className='mt-5' style={{height: 'fit-content', minHeight: '100vh'}}>
            <Row className='p-5'>
                <h4 className='text-info fst-italic pt-5' style={{letterSpacing: '3px'}}>SUMMARY</h4>
            </Row>
            <Row className='p-md-5 p-2 mx-md-4 text-start border-bottom border-dark'>
                <div className='d-flex justify-content-between'>
                    <h4 className='text-info fw-bold mb-4'>Shipping Info-</h4>
                    <Button variant='outline-light' className='w-auto' onClick={() => setCartStep(1)}>Edit</Button>
                </div>
                <h5 className='text-info'>Full Name: <span className='text-white'>{shippingAddress.fullName}</span></h5>
                <h5 className='text-info'>Address 1: <span className='text-white'>{shippingAddress.address}</span></h5>
                <h5 className='text-info'>Address 2: <span className='text-white'>{shippingAddress.address2}</span></h5>
                <h5 className='text-info'>Country: <span className='text-white'>{shippingAddress.country}</span></h5>
                <h5 className='text-info'>City: <span className='text-white'>{shippingAddress.city}</span></h5>
                <h5 className='text-info'>Phone Number: <span className='text-white'>{shippingAddress.phoneNumber}</span></h5>
            </Row>
            <Row className='p-5'>
                {cart.cartItems && cart.cartItems.map((cartItem,index) => {
                    return(
                        <CartItemBox cartItem={cartItem} key={index} />
                    )
                })}
                {cart.cartItems.length === 0 && setCartStep(0)}
            </Row>
        </Container>
    )
}

export default CartThree