import React, { useContext } from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import { Store } from '../Store'
import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet-async";

function Account() {
    const {state: cartState, dispatch: ctxDispatch} = useContext(Store);
    const {userInfo} = cartState;
    const navigate = useNavigate();

    const handleLogout = () => {
        ctxDispatch( {type: 'USER_SIGNOUT'})
        localStorage.removeItem('userInfo')
        navigate('/')
        window.location.reload(false)
    }
    return (
        <Container fluid className='vh-100 mt-5 text-start'>
            <Helmet>
                <title>Account - NeonWave</title>
            </Helmet>
            <Button variant='outline-danger' className=' m-5 w-auto fw-bold' onClick={handleLogout}>Logout</Button>
            <Row className='px-5 w-100 d-flex flex-column gap-2'>
                <h3 className='text-info fst-italic' style={{letterSpacing: '3px'}}>MY ACCOUNT</h3>
                <h5 className='text-white'>Welcome back, {userInfo.username}!</h5>
            </Row>
            <Row className='p-5'>
                    <h6 className='text-white w-100 pb-2 border-bottom border-dark'>My Orders</h6>

                    <h5 className='mt-4 text-white'>You haven't placed any orders yet</h5>
            </Row>
        </Container>
    )
}

export default Account