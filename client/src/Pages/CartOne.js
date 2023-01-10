import React, {useContext} from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { Store } from '../Store';
import CartItemBox from '../Components/CartItem/CartItemBox';
import {Link} from 'react-router-dom'

function CartOne() {
    const {state: cartState} = useContext(Store);
    const {cart} = cartState;

    return (
        <Container className='mt-5' style={{height: 'fit-content', minHeight: '100vh'}}>
            <Row className='p-5'>
                <h4 className='text-info fst-italic pt-5' style={{letterSpacing: '3px'}}>CART</h4>
            </Row>
            <Row className='p-5'>
                {cart.cartItems && cart.cartItems.map((cartItem,index) => {
                    return(
                        <CartItemBox cartItem={cartItem} key={index} />
                    )
                })}
                {cart.cartItems.length === 0 && 
                    <div>
                        <h2 className='text-white'>Your Cart Is Empty</h2>
                        <Link to='/collections/shop-all'>
                            <Button variant='outline-info'>Continue Shopping</Button>
                        </Link> 
                    </div>
                }
            </Row>
        </Container>
    )
}

export default CartOne