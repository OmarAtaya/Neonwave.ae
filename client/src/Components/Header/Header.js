import React, {useState,useContext} from 'react';
import { Container, Row, Col, Image, Nav, Form, FormControl, Button, Collapse } from 'react-bootstrap';
import Logo from '../../assets/Neon_Wave_3_165x.png';
import { MdOutlineMenu, MdOutlineShoppingBag, MdOutlineAccountCircle, MdOutlineSearch} from 'react-icons/md';
import {AiOutlineClose, AiOutlineDown} from 'react-icons/ai';
import { Store } from '../../Store';
import { Link } from 'react-router-dom';

function Header() {
    const [color, setColor] = useState(false);
    const [menu, setMenu] = useState(false);
    const [search, setSearch] = useState(false);
    const [collection, setCollection] = useState(false);
    const [searchText, setSearchText] = useState('');
    const {state: cartState} = useContext(Store);
    const {cart} = cartState;
    const {userInfo} = cartState;

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
                        <MdOutlineMenu size={30} color='white' onClick={() => {setMenu(true)}}/>
                    </Col>
                    <Col>
                        <Link to="/">
                            <Image src={Logo} alt=""/>  
                        </Link>
                    </Col>
                    <Col className='d-flex justify-content-center align-items-center gap-3'>
                        {
                            userInfo === undefined
                            ?
                                <Link to="/account/login">
                                    <MdOutlineAccountCircle size={30} color='white'/>
                                </Link>
                            :
                                <Link to="/account/profile">
                                    <MdOutlineAccountCircle size={30} color='white'/>
                                </Link>
                        }
                        <MdOutlineSearch size={30} color='white' onClick={() => {setSearch(!search)}}/>
                        <Link to='/cart' className='cart'>
                            <MdOutlineShoppingBag size={30} color='white'/>
                            <div className={cart.cartItems.length > 0 ?'cart__num': "d-none"}></div>
                        </Link>
                    </Col> 
                </Row>
                <Row>
                    <div className={search ? 'search__bar active' : 'search__bar'}>
                        <div className='d-flex align-items-center gap-3 mb-4'>
                            <AiOutlineClose size={30} color='white' onClick={() => {setSearch(false)}} className='ms-4'/>
                            <Form className="d-flex gap-3 align-items-end w-100">
                                <FormControl
                                    type="text"
                                    placeholder="Enter Item Name"
                                    onChange={(e) => setSearchText(e.currentTarget.value)}
                                    className="bg-black text-white"
                                />
                                <Link to='/search' state={searchText}>
                                    <Button variant="outline-info" onClick={() => setSearch(false)}>
                                        Search
                                    </Button>
                                </Link>
                            </Form>  
                        </div>
                        
                    </div>
                </Row>
            </Container>
            <div className={menu ? 'nav__menu active' : 'nav__menu'}>
                <AiOutlineClose size={30} color='black' onClick={() => {setMenu(false);setCollection(false)}} className='ms-4 mb-4'/>
                <Nav className='ms-4 fs-5'>
                    <Nav.Item className='w-100 border-bottom border-dark mb-3'>
                        <Nav.Link href="/" className='text-black ps-0 pb-3'>HOME</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='w-100 border-bottom border-dark mb-3'>
                        <div className='d-flex justify-content-between align-items-center me-3' onClick={() => setCollection(prev => !prev)}>
                            <Nav.Link className='text-black ps-0 py-3'>COLLECTIONS</Nav.Link>
                            <AiOutlineDown size={25} color='black'/>
                        </div>
                        <Collapse in={collection}>
                            <div>
                                <Nav.Link href="/collections/shop-all" className='text-dark ps-3 py-2'>SHOP ALL</Nav.Link>
                                <Nav.Link href="/collections/best-seller" className='text-dark ps-3 py-2'>BEST SELLER</Nav.Link>
                                <Nav.Link href="/collections/text-based" className='text-dark ps-3 py-2'>TEXT BASED</Nav.Link>
                                <Nav.Link href="/collections/anime" className='text-dark ps-3 py-2'>ANIME</Nav.Link>
                            </div>
                        </Collapse>
                    </Nav.Item>
                    <Nav.Item className='w-100 border-bottom border-dark mb-3'>
                        <Nav.Link href="/custom" className='text-black ps-0 py-3'>CUSTOM NEON SIGNS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='w-100 border-bottom border-dark mb-3'>
                        <Nav.Link href="/contact-us" className='text-black ps-0 py-3'>CONTACT US</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='w-100 border-bottom border-dark mb-3'>
                        <Nav.Link href="/about-us" className='text-black ps-0 py-3'>ABOUT US</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>  
        </div>
    )
}

export default Header