import React, {useContext, useState} from 'react';
import { Container, Form, Row, FormControl, Button } from 'react-bootstrap';
import { Store } from '../Store';

function CartTwo(props) {
    const {state: cartState, dispatch: ctxDispatch} = useContext(Store);
    const {cart: {shippingAddress}} = cartState;
    const [fullName, setFullName] = useState(shippingAddress.fullName || '');
    const [address, setAddress] = useState(shippingAddress.address || '');
    const [address2, setAddress2] = useState(shippingAddress.address2 || '');
    const [city, setCity] = useState(shippingAddress.city || '');
    const [country, setCountry] = useState(shippingAddress.country || '');
    const [phoneNumber, setPhoneNumber] = useState(shippingAddress.phoneNumber || '');

    function shippinghandler (e) {
        e.preventDefault();
        ctxDispatch( {
        type: 'SAVE_SHIPPING_ADDRESS',
        payload: {
            fullName,
            address,
            address2,
            city,
            country,
            phoneNumber
        }
        });
    
        localStorage.setItem('shippingAddress', JSON.stringify({
        fullName,
        address,
        address2,
        city,
        country,
        phoneNumber
        }));

        props.setCartStep(prev => prev + 1);
    }
    return (
        <Container>
            <Row className='p-5'>
                <h4 className='text-info fst-italic pt-5' style={{letterSpacing: '3px'}}>SHIPPING ADDRESS</h4>
            </Row>
            <Row className='p-5 d-flex flex-column align-items-center justify-content-center'>
                <Form className='cart__width' onSubmit={shippinghandler}>
                    <FormControl
                        type="text"
                        placeholder="Full Name*"
                        value={fullName}
                        className="bg-black text-white mb-3"
                        onChange={(e) => setFullName(e.currentTarget.value)}
                        required
                    />
                    <FormControl
                        type="text"
                        placeholder="Address*"
                        value={address}
                        className="bg-black text-white mb-3"
                        onChange={(e) => setAddress(e.currentTarget.value)}
                        required
                    />
                    <FormControl
                        type="text"
                        placeholder="Apartment, suite, etc. (Optional)"
                        value={address2}
                        onChange={(e) => setAddress2(e.currentTarget.value)}
                        className="bg-black text-white mb-3"
                    />
                    <Form.Group className='d-flex gap-3'>
                        <FormControl
                            type="text"
                            placeholder="Country*"
                            value={country}
                            className="bg-black text-white mb-3 w-50"
                            onChange={(e) => setCountry(e.currentTarget.value)}
                            required
                        />
                        <FormControl
                            type="text"
                            placeholder="City*"
                            value={city}
                            className="bg-black text-white mb-3 w-50"
                            onChange={(e) => setCity(e.currentTarget.value)}
                            required
                        />
                    </Form.Group>
                    <FormControl
                        type="text"
                        placeholder="Phone Number*"
                        value={phoneNumber}
                        className="bg-black text-white mb-3"
                        onChange={(e) => setPhoneNumber(e.currentTarget.value)}
                        required
                    />
                    <Button type='submit' variant='outline-info'>Proceed To Summary</Button>
                </Form>
            </Row>
        </Container>
    )
}

export default CartTwo