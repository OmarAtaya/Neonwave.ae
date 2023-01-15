import React, { useContext, useEffect, useState } from 'react'
import { Button, Card, Container, Row } from 'react-bootstrap'
import { Store } from '../Store'
import { useNavigate, Link } from 'react-router-dom';
import { Helmet } from "react-helmet-async";
import axios from 'axios';

function Account() {
    const [isLoading, setLoading] = useState(true);
    const [orders, setOrders] = useState([{}])
    const {state: cartState, dispatch: ctxDispatch} = useContext(Store);
    const {userInfo} = cartState;
    const navigate = useNavigate();

    const handleLogout = () => {
        ctxDispatch( {type: 'USER_SIGNOUT'})
        localStorage.removeItem('userInfo')
        navigate('/')
        window.location.reload(false)
    }

    useEffect(() => {
      const findOrders = async () => {
        try{
            const {data} = await axios.get(`/api/orders/user/${userInfo._id}`).then(response => {
                setOrders(response.data);
                setLoading(false);
            });
        }
        catch(err){

        }
      }
      findOrders()
    }, [])

    if(isLoading)
    {
        return(
            <h4>is Loading</h4>
        )
    }
    return (
        <Container fluid className='mt-5 text-start' style={{height: 'fit-content', minHeight: '100vh'}}>
            <Helmet>
                <title>Account - NeonWave</title>
            </Helmet>
            <Button variant='outline-danger' className=' m-5 w-auto fw-bold' onClick={handleLogout}>Logout</Button>
            <Row className='px-5 w-100 d-flex flex-column gap-2'>
                <h3 className='text-info fst-italic' style={{letterSpacing: '3px'}}>MY ACCOUNT</h3>
                <h5 className='text-white'>Welcome back, {userInfo.username}!</h5>
            </Row>
            <Row className='p-5 d-flex flex-column align-items-start'>
                    <h6 className='text-white w-100 pb-2 border-bottom border-dark'>My Orders</h6>
                    <div className='d-flex justify-content-center justify-content-md-start gap-5 flex-wrap'>
                        {orders.length !== 0 ?
                            orders.map((order,index) => {
                                return(
                                    <Card key={index} border="info" bg="transparent" className='text-center'>
                                        <Card.Header className='text-info border-bottom border-info'>
                                            <h4>Order #{order.uid}</h4>
                                        </Card.Header>
                                        <Card.Body className='text-info'>
                                            <h5>Date: {order.createdAt.split('T', 1)}</h5>
                                            <h5>Number of Items: {order.items.length}</h5>
                                        </Card.Body>
                                        <Card.Footer>
                                            <Link to={`/order_placed/?id=${order._id}`} className='text-white'>
                                                <h5>View Order</h5>
                                            </Link>
                                        </Card.Footer>
                                    </Card>
                                )
                            })
                            :   <h5 className='mt-4 text-white'>You haven't placed any orders yet</h5>
                        }
                    </div>
            </Row>
        </Container>
    )
}

export default Account