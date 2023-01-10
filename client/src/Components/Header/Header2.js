import React, {useState, useContext} from 'react';
import Logo from '../../assets/Neon_Wave_3_165x.png';
import {Link} from 'react-router-dom';
import { Store } from '../../Store';
import { MdOutlineMenu, MdOutlineShoppingBag, MdOutlineAccountCircle, MdOutlineSearch} from 'react-icons/md';
import { Navbar, Image, Container, NavDropdown, Nav, Offcanvas, Row, Form, FormControl, Button } from 'react-bootstrap';
import {AiOutlineClose} from 'react-icons/ai';

function Header2() {
    const [search, setSearch] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [color, setColor] = useState(false);
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

    return (
        <Container fluid className={`${color ? "background__move" : "background__start w-100"}`}>
            <Navbar className='d-flex px-5' expand="lg"  variant='light'>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`}><MdOutlineMenu size={25} color='white'/></Navbar.Toggle>
                <Navbar.Brand href='/'>
                    <Image src={Logo} alt=""/>  
                </Navbar.Brand>
                <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-lg`}
                aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                placement="start"
                >
                    <Offcanvas.Header closeButton className='background'>
                    </Offcanvas.Header>
                    <Offcanvas.Body className='background__side ps-5'>
                        <Nav className="justify-content-start gap-3 flex-grow-1 pe-3">
                            <Nav.Link href="/" className='text-white'>HOME</Nav.Link>
                            <NavDropdown
                                title={
                                    <span className="text-white">COLLECTIONS</span>
                                }
                                id={`offcanvasNavbarDropdown-expand-lg`}
                            >
                                <NavDropdown.Item href="/collections/shop-all" className='text-white'>SHOP ALL</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/collections/best-seller" className='text-white'>BEST SELLER</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/collections/text-based" className='text-white'>TEXT BASED</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/collections/anime" className='text-white'>ANIME</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/customize-your-own-neon" className='text-white'>CUSTOM NEON SIGNS</Nav.Link>
                            <Nav.Link href="/contact-us" className='text-white'>CONTACT US</Nav.Link>
                            <Nav.Link href="/about-us" className='text-white'>ABOUT US</Nav.Link>
                        </Nav>
                    </Offcanvas.Body> 
                </Navbar.Offcanvas>
                <div className='d-flex justify-content-center align-items-center gap-3'>
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
                </div>
            </Navbar>
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
    )
}

export default Header2