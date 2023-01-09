import React, { useState } from 'react';
import { Container, Form, Col, FormControl, Button, Alert } from 'react-bootstrap';
import { Helmet } from "react-helmet";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [error, setError] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    window.scrollTo(0, 0)
    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('/api/users/signup', {
                username,
                email,
                password,
            });
            navigate('/account/login');
        } catch (err) {
            setError(err.response.data.message)
        }
    }
    return (
        <Container className='vh-100'>
            <Helmet>
                <title>Register - NeonWave</title>
            </Helmet>
            <Col className='h-100 d-flex flex-column justify-content-center align-items-center gap-2'>
                <Form className='d-flex flex-column gap-4 login__width' onSubmit={submitHandler}>
                    {
                        error 
                        && 
                        <Alert variant='danger'>
                            {error}
                        </Alert>
                    }
                    <Form.Group className='d-flex flex-column'>
                        <Form.Text className='fs-5 text-info fst-italic' style={{letterSpacing: '3px'}}>REGISTER</Form.Text>
                        <Form.Text className='fs-6 text-white'>Please fill in the information below:</Form.Text>
                    </Form.Group>
                    <FormControl
                        type="text"
                        placeholder="User Name"
                        className="bg-black text-white"
                        onChange={(e) => setUsername(e.currentTarget.value)}
                    />
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
                    <Button type='submit' variant='outline-info' className=''>CREATE ACCOUNT</Button>
                </Form>
                <p className='text-white'>Already Registered? <a href='/account/login' className='text-white'>Login</a></p>
            </Col>
        </Container>
    )
}

export default Register