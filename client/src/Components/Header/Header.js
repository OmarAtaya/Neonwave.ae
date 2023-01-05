import React, {useState} from 'react';
import { Container, Row, Col, Image, Nav } from 'react-bootstrap';
import Logo from '../../assets/Neon_Wave_3_165x.png';
import { MdOutlineMenu, MdOutlineShoppingBag, MdOutlineAccountCircle, MdOutlineSearch, MdOutlineCancel} from 'react-icons/md'

function Header() {
    const [color, setColor] = useState(false);
    const [menu, setMenu] = useState(false);

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
            <Container fluid className={`${color ? "background__move" : "background__start"} py-2`}>
                <Row className='d-flex align-items-center flex-nowrap'>
                    <Col>
                        <MdOutlineMenu size={30} color='white' onClick={() => {setMenu(prev => !prev)}}/>
                    </Col>
                    <Col>
                        <Image src={Logo} alt=""/>
                    </Col>
                    <Col className='d-flex justify-content-center align-items-center gap-3'>
                        <MdOutlineAccountCircle size={30} color='white'/>
                        <MdOutlineSearch size={30} color='white'/>
                        <MdOutlineShoppingBag size={30} color='white'/>
                    </Col>
                </Row>
            </Container>
            <div className={menu ? 'nav__bg' : ''}>
                <div className={menu ? 'nav__menu active' : 'nav__menu'}>
                    <MdOutlineCancel size={30} color='white' onClick={() => {setMenu(prev => !prev)}}/>
                    <Nav>
                        <Nav.Item>
                            <Nav.Link href="/" className='text-white ms-4 fs-2'>Home</Nav.Link>
                        </Nav.Item>
                        <hr className='text-white'/>
                    </Nav>
                </div>  
            </div>
            
        </div>
    )
}

export default Header