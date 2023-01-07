import React, {useState, useContext} from 'react';
import { Container, Form, Col, FormControl, Button, Alert } from 'react-bootstrap';
import { Helmet } from "react-helmet";
import axios from 'axios';
import { Store } from '../Store';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { state: userInfo, dispatch: ctxDispatch } = useContext(Store);

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('/api/users/signin', {
                email,
                password,
            });
            ctxDispatch({ type: 'USER_SIGNIN', payload: data });
            localStorage.setItem('userInfo', JSON.stringify(data));
            navigate('/');
        } catch (err) {
            setError(err.response.data.message)
        }
    };
    return (
        <Container className='vh-100'>
            <Helmet>
                    <title>Login - NeonWave</title>
            </Helmet>
            <Col className='h-100 d-flex flex-column justify-content-center align-items-center gap-2'>
                <Form className='d-flex flex-column gap-4 w-25' onSubmit={submitHandler}>
                    {
                        error 
                        && 
                        <Alert variant='danger'>
                            {error}
                        </Alert>
                    }
                    <Form.Group className='d-flex flex-column'>
                        <Form.Text className='fs-5 text-info fst-italic' style={{letterSpacing: '3px'}}>LOGIN</Form.Text>
                        <Form.Text className='fs-6 text-white'>Please enter your e-mail and password:</Form.Text>
                    </Form.Group>
                    <FormControl
                        type="text"
                        placeholder="Email"
                        className="bg-black text-white"
                        onChange={(e) => setEmail(e.currentTarget.value)}
                    />
                    <FormControl
                        type="password"
                        placeholder="Password"
                        className="bg-black text-white"
                        onChange={(e) => setPassword(e.currentTarget.value)}
                    />
                    <Button type='submit' variant='outline-info' className=''>LOGIN</Button>
                </Form>
                <p className='text-white'><a href='/account/forgot' className='text-white'>Forgot Password?</a></p>
                <p className='text-white'>Don't have an account? <a href='/account/register' className='text-white'>Create Account</a></p>
            </Col>
        </Container>
    )
}

export default Login