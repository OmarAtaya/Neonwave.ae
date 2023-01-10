import React, { useContext, useEffect, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
//import { useNavigate } from 'react-router-dom';
import { Store } from '../Store';
import CartOne from './CartOne';
import CartThree from './CartThree';
import { Helmet } from "react-helmet-async";
import CartTwo from './CartTwo';

function Cart() {
    //const navigate = useNavigate();
    const [total, setTotal] = useState(0);
    const {state: cartState} = useContext(Store);
    const {cart} = cartState;
    const [cartStep, setCartStep] = useState(0);

    useEffect(() => {
        const changeTotal = () => {
            let newTotal = 0
            cart.cartItems.forEach(element => {
                newTotal += element.quantity1 * element.total
            });
            setTotal(newTotal)
        }
        changeTotal()
    },[cartState,cart.cartItems])
    
    
    const checkoutHandler = () => {
        if(cartStep < 2)
        {
            setCartStep(prev => prev + 1) 
        }
    }

    return (
        <Container className='mt-5' style={{height: 'fit-content', minHeight: '100vh'}}>
            <Helmet>
                <title>Cart - NeonWave</title>
            </Helmet>
            <Row>
                {(() => {
                    switch (cartStep) {
                    case 0:
                        return <CartOne/>
                    case 1:
                        return <CartTwo setCartStep={setCartStep}/>
                    case 2:
                        return <CartThree setCartStep={setCartStep}/>
                    default:
                        return <CartOne/>
                    }
                })()} 
            </Row>
            <Row>
                {cart.cartItems && cartStep !== 1 &&
                    <div className='d-flex flex-column align-items-md-end text-md-end'>
                        <h5 className='text-info'>Total:</h5>
                        <h5 className='text-info'>{total} AED</h5>
                        <h5 className='text-white'>Free Internation Shipping</h5>
                        {cartStep === 0 ? <Button variant='info' className='text-white w-auto px-5' onClick={checkoutHandler}>CHECKOUT</Button> : <Button variant='info' className='text-white w-auto px-5' onClick={checkoutHandler}>Payment</Button>}
                    </div>
                }
            </Row>
        </Container>
    )
}

export default Cart