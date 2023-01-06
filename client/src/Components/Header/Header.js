import React, {useState,useContext} from 'react';
import { Container, Row, Col, Image, Nav, Form, FormControl, Button } from 'react-bootstrap';
import Logo from '../../assets/Neon_Wave_3_165x.png';
import { MdOutlineMenu, MdOutlineShoppingBag, MdOutlineAccountCircle, MdOutlineSearch} from 'react-icons/md';
import {AiOutlineClose} from 'react-icons/ai';
import { Store } from '../../Store';
import { Link } from 'react-router-dom';

function Header() {
    const [color, setColor] = useState(false);
    const [menu, setMenu] = useState(false);
    const [search, setSearch] = useState(false);
    const {state: cartState} = useContext(Store);
    const {cart} = cartState;

    const changeColor = () => {
        if (window.scrollY >= 35)
        {
            setColor(true);
        }
        else{
            setColor(false);
        }
    }

    window.addEventListener('scroll', changeColor);

    menu ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto';
    return (
        <div>
            <Container fluid className={`${color ? "background__move" : "background__start w-100"}`}>
                <Row className='d-flex align-items-center flex-nowrap background'>
                    <Col>
                        <MdOutlineMenu size={30} color='white' onClick={() => {setMenu(prev => !prev)}}/>
                    </Col>
                    <Col>
                        <Link to="/">
                            <Image src={Logo} alt=""/>  
                        </Link>
                    </Col>
                    <Col className='d-flex justify-content-center align-items-center gap-3'>
                        <MdOutlineAccountCircle size={30} color='white'/>
                        <MdOutlineSearch size={30} color='white' onClick={() => {setSearch(prev => !prev)}}/>
                        <div className='cart'>
                            <MdOutlineShoppingBag size={30} color='white'/>
                            <div className={cart.cartItems.length > 0 ?'cart__num': "d-none"}></div>
                        </div>
                        
                    </Col> 
                </Row>
                <Row>
                    <div className={search ? 'search__bar active' : 'search__bar'}>
                        <div className='d-flex align-items-center gap-3 mb-4'>
                            <AiOutlineClose size={30} color='white' onClick={() => {setSearch(prev => !prev)}} className='ms-4'/>
                            <Form className="d-flex gap-3 align-items-end w-100">
                                <FormControl
                                    type="text"
                                    placeholder="Enter Item Name"
                                    className="bg-black text-white"
                                />
                                <Button variant="outline-info">
                                Search
                                </Button>
                            </Form>  
                        </div>
                        
                    </div>
                </Row>
            </Container>
            <div className={menu ? 'nav__bg' : ''}>
                <div className={menu ? 'nav__menu active' : 'nav__menu'}>
                    <AiOutlineClose size={30} color='black' onClick={() => {setMenu(prev => !prev)}} className='ms-4 mb-5'/>
                    <Nav className='ms-4 fs-5'>
                        <Nav.Item className='w-100 border-bottom border-dark mb-3'>
                            <Nav.Link href="/" className='text-black ps-0 py-3'>HOME</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className='w-100 border-bottom border-dark mb-3'>
                            <Nav.Link href="/best-sellers" className='text-black ps-0 py-3'>BESTSELLER</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className='w-100 border-bottom border-dark mb-3'>
                            <Nav.Link href="/customize-your-own-neon" className='text-black ps-0 py-3'>CUSTOM NEON SIGNS</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className='w-100 border-bottom border-dark mb-3'>
                            <Nav.Link href="/contact-us" className='text-black ps-0 py-3'>CONTACT US</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className='w-100 border-bottom border-dark mb-3'>
                            <Nav.Link href="/about-us" className='text-black ps-0 py-3'>ABOUT US</Nav.Link>
                        </Nav.Item>
                        <p className='text-dark'>Account</p>
                    </Nav>
                </div>  
            </div>              
        </div>
    )
}

export default Header