import React, {useState} from 'react';
import { Container, Carousel, Image, Row, Button, Form, Col, Collapse } from 'react-bootstrap';
import Slide1 from '../assets/F3.png';
import Slide2 from '../assets/F3-2.jpg';
import Sign from '../assets/Sign.png';
import Package from '../assets/Package.png';
import Wire from '../assets/Wire.png';
import Backing from '../assets/Backing.jpg';
import {AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

function Product() {
    const [Images, setImages] = useState([
        {
            url: Slide1,
        },
        {
            url: Slide2,
        }
    ]);
    const [quantity, setQuantity] = useState(0);
    const [descOpen, setDescOpen] = useState(true);
    const [fontOpen, setFontOpen] = useState(false);
    const [shipOpen, setShipOpen] = useState(false);
    const [sizeCheck, setSizeCheck] = useState(1);
    const [colorcheck, setColorCheck] = useState(1);

    return (
        <Container className='mt-5'>
            <Row className='d-flex justify-content-center'>
                <Carousel className='product__image p-0'>
                    {Images.map((slide) => {
                        return(
                            <Carousel.Item clasName='w-100'>
                                <Image src={slide.url} alt='' className='product__image'/>
                            </Carousel.Item>
                        )
                    })}
                </Carousel>
            </Row>
            <h2 className='text-info'>"F3" NEON SIGN</h2>
            <h4 className='text-white fw-bold'>475 AED</h4>
            <Row className='text-white d-flex align-items-start gap-3 mt-5'>
                <Col className='w-50'>
                    <Form className='d-flex flex-column align-items-start'>
                        <p className='fw-bold mt-3'>Size:</p>
                        <div className='d-flex flex-wrap justify-content-center gap-4'>
                            <Button variant='outline-light' className={1 === sizeCheck ? 'active' : ''} onClick={() => setSizeCheck(1)}>30 CM</Button>
                            <Button variant='outline-light' className={2 === sizeCheck ? 'active' : ''} onClick={() => setSizeCheck(2)}>50 CM</Button>
                            <Button variant='outline-light' className={3 === sizeCheck ? 'active' : ''} onClick={() => setSizeCheck(3)}>75 CM</Button>
                            <Button variant='outline-light' className={4 === sizeCheck ? 'active' : ''} onClick={() => setSizeCheck(4)}>100 CM</Button>
                        </div>
                        <p className='fw-bold mt-3'>Color:</p>
                        <div className='d-flex flex-wrap justify-content-center align-items-center gap-4'>
                            <div className={1 === colorcheck ? 'color__button rounded' : ''}>
                                <Button variant='outline-light' style={{backgroundColor: 'red', width: '40px', height: '40px', margin: '3px'}} onClick={() => setColorCheck(1)}/>
                            </div>
                            <div className={2 === colorcheck ? 'color__button rounded' : ''}>
                                <Button variant='outline-light' style={{backgroundColor: 'blue', width: '40px', height: '40px', margin: '3px'}} onClick={() => setColorCheck(2)}/>
                            </div>
                            <div className={3 === colorcheck ? 'color__button rounded' : ''}>
                                <Button variant='outline-light' style={{backgroundColor: 'yellow', width: '40px', height: '40px', margin: '3px'}} onClick={() => setColorCheck(3)}/>
                            </div>
                            <div className={4 === colorcheck ? 'color__button rounded' : ''}>
                                <Button variant='outline-light' style={{backgroundColor: 'purple', width: '40px', height: '40px', margin: '3px'}} onClick={() => setColorCheck(4)}/>
                            </div>
                        </div>
                        <p className='fw-bold mt-3'>Acrylic Backing Style *:</p>
                        <Form.Select aria-label="Default select example" className='w-auto'>
                            <option>Choose Acrylic Backing</option>
                            <option value="1 ">Cut to shape</option>
                            <option value="2">Square/Regtangular board</option>
                            <option value="3">Cut to letter (+100 AED)</option>
                        </Form.Select>
                        <p className='fw-bold mt-3'>Waterproof *:</p>
                        <Form.Select aria-label="Default select example" className='w-auto'>
                            <option>Choose Waterproof</option>
                            <option value="1 ">Yes (+100 AED)</option>
                            <option value="2">No</option>
                        </Form.Select>
                        <p className='fw-bold mt-3'>Dimmer *:</p>
                        <Form.Select aria-label="Default select example" className='w-auto'>
                            <option>Choose Dimmer</option>
                            <option value="1 ">Basic Dimmer</option>
                            <option value="2">Advanced Dimmer (+100 AED)</option>
                        </Form.Select>
                        <p className='fw-bold mt-3'>Quantity:</p>
                        <div className='d-flex align-items-center gap-3 justify-content-between mt-3 border border-light p-2 w-50'>
                            <AiOutlineMinus size={20} onClick={() => {if(quantity !== 0){setQuantity(quantity-1)}}}/>
                            <h3> {quantity}</h3>
                            <AiOutlinePlus size={20} onClick={() => {setQuantity(quantity+1)}}/>
                        </div>
                        <Button type='submit' variant='info' className='mt-4 w-75 p-3'>Add To Cart</Button>
                    </Form>
                </Col>
                <Col className='w-50'>
                    <div className='d-flex flex-column flex-md-row align-items-center gap-3 justify-content-center my-5'>
                        <Button
                            onClick={() => {setFontOpen(false); setDescOpen(true);setShipOpen(false)}}
                            aria-controls="description"
                            variant='outline-info'
                            className='w-100 py-3'
                            aria-expanded={descOpen}
                        >
                            DESCRIPTION
                        </Button>
                        <Button
                            onClick={() => {setFontOpen(true); setDescOpen(false);setShipOpen(false)}}
                            aria-controls="font"
                            variant='outline-info'
                            className='w-100 py-3'
                            aria-expanded={fontOpen}
                        >
                            FONTS/PRODUCT
                        </Button>
                        <Button
                            onClick={() => {setFontOpen(false); setDescOpen(false);setShipOpen(true)}}
                            aria-controls="shipping"
                            variant='outline-info'
                            className='w-100 py-3'
                            aria-expanded={shipOpen}
                        >
                            SHIPPING/RETURNS
                        </Button> 
                    </div>
                    
                    <Collapse in={descOpen}>
                        <div id="description" className='text-start'>
                            <h5 className='text-info'>'F3' Neon sign </h5>
                            <p>Our attention capturing, insanely high quality custom neon signs are all made by hand, regardless of whether you choose from our collection of pre-set designs or  fully customize your own.</p>
                            <p>Our neon signs turn heads by creating a vibe in any room and setup.</p>
                            <p>This sign is available in 10 sizes from 30cm up to 300 cm wide.</p>
                            <p>- View our size guide here</p>
                            <p>Our neon signs are available on our website in 9 different color options. More color options can be provided at request by contacting us via Email or WhatsApp.</p>
                            <h4 className='mt-4 text-info'>MATERIALS/GUARANTEE</h4>
                            <p>All our neon signs are made from durable, long lasting Eco-friendly LED neon piping which are available with multiple acrylic backing and color options.</p>
                            <p>Our signs are built to last for at least 10 years!</p>
                            <h4 className='mt-4 text-info'>Support</h4>
                            <p>For customer support, please send us an email at contact@neonwave.ae</p>
                        </div>
                    </Collapse>
                    
                    <Collapse in={fontOpen}>
                        <div id="font" className='text-start'>
                            <h3 className='text-info'>PRODUCT FONT</h3>
                            <p>
                            For our pre-set designs, the fonts and styles are already set.
                            For a custom order, we can produce almost any design you could want, including letters, words, numbers, or logos
                            </p>
                            <p>
                            For a more information on a fully customizable sign, please send us a message via WhatsApp, Instagram DM, or Email.
                            </p>
                            <h3 className='text-info'>PRODUCT DETAILS</h3>
                            <p>
                            See reference below for some standard information about our signs…
                            </p>
                            <p>
                            Please note - All of our signs (custom creation or pre-set design) 
                            come standard with a remote control dimmer. This can be used to dim the light and adjust the brightness, switch the power on and off,
                            and program the light to flash in different patterns and adjust to the specific mood that you want.
                            </p>
                            <Image src={Sign} alt='' className='w-100 mb-4'/>
                            <Image src={Wire} alt='' className='w-100 mb-4'/>
                            <Image src={Package} alt='' className='w-100 mb-4'/>
                            <p>Please note, all of our signs have the option for the CLEAR acrylic backing to be cut in one of three different ways - whole square backboard, cut to shape, or cut to letter:</p>
                            <Image src={Backing} alt='' className='w-100 mb-4'/>
                        </div>
                    </Collapse>
                    
                    <Collapse in={shipOpen}>
                        <div id="shipping" className='text-start'>
                            <h3 className='text-info'>SHIPPING</h3>
                            <p>All orders are made to order by hand in our international production facilities with the care and attention to detail. Production time averages only 5-10 working days after payment. During peak periods this timeframe may increase to 2-3 weeks.  </p>
                            <h5>Global shipping and production time-</h5>
                            <p>Standard Service (DHL Fully Tracked, 1-2 weeks) - Average 1-2 weeks delivery to your door, including production, and full quality testing - FREE</p>
                            <p>Rush Order Service (DHL Fully Tracked, 3-6 days) - Average 3-6 business days delivery to your door, including production, and full quality testing- 200 AED </p>
                            <h3 className='text-info'>RETURNS</h3>
                            <p>All our pieces are made by hand to order.</p>
                            <p>We only accept returns/refunds on faulty items, and can not accept returns due to change of mind unfortunately, as all pieces are made to order based on your exact requirements. All sales are final once placed on site. </p>
                            <p>In the very unlikely case that your piece arrives broken or faulty, you have 7 days from the day of the tracked delivery to let us know via Email at neonwaveuae@gmail.com and we will deliver a replacement sign free of charge! </p>
                            <h3 className='text-info'>IMPORT FEES/DUTIES</h3>
                            <p>Orders to some countries may be subject to import fees/duties and taxes when delivery takes place. This depends on which country you are ordering from and also how big/heavy the piece is.</p>
                            <p>This is standard procedure for any item bought online and is entirely out of our hands - many orders won't be subject to import fees, but for those that are depending on your location, please be aware that these fees are the responsibility of the customer and are not covered by Neon Wave. This amount is usually very minimal</p>
                            <p>If you need any more help or have any questions or concerns, please don't hesitate to contact our team via Email at neonwaveuae@gmail.com</p>
                            <p>Thanks!</p>
                        </div>
                    </Collapse>
                </Col>
            </Row>
        </Container>
    )
}

export default Product