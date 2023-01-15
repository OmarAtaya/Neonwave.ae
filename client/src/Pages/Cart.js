import React, { useContext, useEffect, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Store } from '../Store';
import CartOne from './CartOne';
import CartThree from './CartThree';
import { Helmet } from "react-helmet-async";
import CartTwo from './CartTwo';
import axios from 'axios';

function Cart() {
    const navigate = useNavigate();
    const [total, setTotal] = useState(0);
    const {state: cartState} = useContext(Store);
    const {cart} = cartState;
    const {userInfo} = cartState;
    const [cartStep, setCartStep] = useState(0);
    const result = cart.cartItems.map((a) => {
        return a
    });
    const itemsforOrder = cart.cartItems.map((a) => {
        return {title: a.title, quantity: a.quantity1, colors: a.colors, colorCheck: a.colorCheck, price: a.total, images: a.images, image: a.image, sizeCheck: a.sizeCheck, sizes: a.sizes, dimmer: a.dimmerCheck, backing: a.backingCheck, water: a.waterCheck}
    })

    useEffect(() => {
        changeTotal()

        if(cart.cartItems.length === 0){
            setCartStep(0)
        }
        if(cartStep === 3)
        {
            createOrder()
        }
    },[cartState,cart.cartItems,cartStep])
    
    const changeTotal = () => {
        let newTotal = 0
        cart.cartItems.forEach(element => {
            newTotal += element.quantity1 * element.total
        });
        setTotal(newTotal)
    }

    function checkOut(order) {
        fetch('http://localhost:5000/create-checkout-session', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            items: result,
            orderId: order
            // orderId: data._id
            })
        })
        .then(async res => {
            if(res.ok) return res.json()
            const json = await res.json()
            return await Promise.reject(json)
        }).then( ({url}) => {
            console.log(url)
            window.location = url
            localStorage.removeItem('cartItems')
        }).catch( e => {
            console.error(e.error)
        })
        }
    async function createOrder() {
        await axios.post('http://localhost:5000/api/orders/place',
        {
            items: itemsforOrder,
            user: userInfo,
            address: cart.shippingAddress,
            total: total,
        },
        ).then(function (response) {
            // ctxDispatch({ type: 'CART_CLEAR'})
            checkOut(response.data)
        })
    }
    
    const checkoutHandler = () => {
        if(cartStep < 3)
        {
            setCartStep(prev => prev + 1) 
        }
        if(!localStorage.getItem('userInfo'))
        {
            navigate('/account/login')
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