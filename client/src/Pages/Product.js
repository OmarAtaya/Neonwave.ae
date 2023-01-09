import React, {useContext, useEffect, useState} from 'react';
import { Container, Carousel, Image, Row, Button, Form, Col, Collapse } from 'react-bootstrap';
import Sign from '../assets/Sign.png';
import Package from '../assets/Package.png';
import Wire from '../assets/Wire.png';
import Backing from '../assets/Backing.jpg';
import { useLocation, useNavigate } from 'react-router-dom';
import {AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { Helmet } from "react-helmet-async";
import { Store } from '../Store';

function Product() {
    const navigate = useNavigate();
    const {state} = useLocation();
    const [quantity, setQuantity] = useState(1);
    const [descOpen, setDescOpen] = useState(true);
    const [fontOpen, setFontOpen] = useState(false);
    const [shipOpen, setShipOpen] = useState(false);
    const [sizeCheck, setSizeCheck] = useState(0);
    const [colorCheck, setColorCheck] = useState(0);
    const [dimmerCheck, setDimmerCheck] = useState('default');
    const [total, setTotal] = useState(0);
    const [backingCheck, setBackingCheck] = useState('default');
    const [waterCheck, setWaterCheck] = useState('default');
    const {state: cartState, dispatch: ctxDispatch} = useContext(Store);
    const {cart} = cartState;
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const existItem = cart.cartItems.find(
                (item) => ((item._id === state._id) && (item.colorCheck === colorCheck) && (item.sizeCheck === sizeCheck) && (item.dimmerCheck === dimmerCheck) && (item.backingCheck === backingCheck) && (item.waterCheck === waterCheck))
            );
        const quantity1 = existItem ? existItem.quantity1 + 1 : quantity;
        if(backingCheck === 'default' || waterCheck === 'default' || dimmerCheck === 'default')
        {
            alert("Please Complete All Selections")
        }
        else{
            ctxDispatch({type:'CART_ADD_ITEM', payload: {...state, quantity1, sizeCheck, colorCheck, dimmerCheck, backingCheck, waterCheck, total}})
            navigate('/')
        }
    }
    window.scrollTo(0, 0)
    useEffect(() => {
      changeTotal()
    }, [backingCheck, waterCheck, dimmerCheck])
    

    const changeTotal = () => {
        let newTotal = 0
        state.prices.forEach((element, index) => {
            if(index === sizeCheck)
            {
                newTotal += element
                if(dimmerCheck === 'Advanced')
                {
                    newTotal += 100
                }
                if(backingCheck === 'Cut to letter')
                {
                    newTotal += 100
                }
                if(waterCheck === 'Yes')
                {
                    newTotal += 100
                }
            }
        });
        setTotal(newTotal)
    }

    return (
        <Container className='mt-5'>
            <Helmet>
                <title>{state.title} - NeonWave</title>
            </Helmet>
            <Row className='d-flex justify-content-center'>
                <Carousel className='product__image p-0'>
                    {state.images.map((slide,index) => {
                        return(
                            <Carousel.Item className='w-100' key={index}>
                                <Image src={slide} alt='' className='product__image'/>
                            </Carousel.Item>
                        )
                    })}
                </Carousel>
            </Row>
            <h2 className='text-info'>{state.title}</h2>
            {state.prices.map((price,index) => {
                return index === sizeCheck ? 
                <h4 className='text-white fw-bold' key={index}>{price} AED</h4>
                : 
                ''
                
            })}
            <Row className='text-white d-flex flex-column flex-md-row align-items-md-start gap-3 mt-5'>
                <Col>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId='size' className='d-flex flex-column align-items-start'>
                                <Form.Label className='fw-bold mt-3'>Size:</Form.Label>
                                <div className='d-flex flex-wrap justify-content-start gap-4'>
                                    {state.sizes.map((color,index) => {
                                        return(
                                        <Button type='button' variant='outline-light' className={index === sizeCheck ? 'active' : ''} onClick={() => setSizeCheck(index)} key={index}>{color} CM</Button>
                                        )
                                    })}
                                </div>
                        </Form.Group>
                        <Form.Group controlId='color' className='d-flex flex-column align-items-start'>
                            <Form.Label className='fw-bold mt-3'>Color:</Form.Label>
                            <div className='d-flex flex-wrap justify-content-start align-items-center gap-4'>
                                {state.colors.map((color,index) => {
                                    return(
                                    <div className={index === colorCheck ? 'color__button rounded' : ''} key={index}>
                                            <Button type='button' variant='outline-light' style={{backgroundColor: color, width: '40px', height: '40px', margin: '3px'}} onClick={() => setColorCheck(index)}/>
                                        </div> 
                                    )
                                })}
                            </div>
                        </Form.Group>                        
                        <Form.Group controlId='backing' className='d-flex flex-column align-items-start'>
                            <Form.Label className='fw-bold mt-3'>Acrylic Backing Style *:</Form.Label>
                            <Form.Select aria-label="Default select example" className='w-auto' value={backingCheck} onChange={(e) => setBackingCheck(e.currentTarget.value)}>
                                <option value="default">Choose Acrylic Backing</option>
                                <option value="Cut to shape">Cut to shape</option>
                                <option value="Square/Regtangular">Square/Regtangular board</option>
                                <option value="Cut to letter">Cut to letter (+100 AED)</option>
                            </Form.Select> 
                        </Form.Group>
                        <Form.Group controlId='waterproof' className='d-flex flex-column align-items-start'>
                            <Form.Label className='fw-bold mt-3'>Waterproof *:</Form.Label>
                            <Form.Select aria-label="Default select example" className='w-auto' value={waterCheck} onChange={(e) => setWaterCheck(e.currentTarget.value)}>
                                <option value="default">Choose Waterproof</option>
                                <option value="Yes">Yes (+100 AED)</option>
                                <option value="No">No</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group controlId='dimmer' className='d-flex flex-column align-items-start'>
                            <Form.Label className='fw-bold mt-3'>Dimmer *:</Form.Label>
                            <Form.Select aria-label="Default select example" className='w-auto' value={dimmerCheck} onChange={(e) => setDimmerCheck(e.currentTarget.value)}>
                                <option value="default">Choose Dimmer</option>
                                <option value="Basic">Basic Dimmer</option>
                                <option value="Advanced">Advanced Dimmer (+100 AED)</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group controlId='quantity' className='d-flex flex-column align-items-start'>
                            <Form.Label className='fw-bold mt-3'>Quantity:</Form.Label>
                            <div className='d-flex align-items-center gap-3 justify-content-between mt-3 border border-light p-2 w-50'>
                                <AiOutlineMinus size={20} onClick={() => {if(quantity > 1){setQuantity(quantity-1)}}}/>
                                <h3> {quantity}</h3>
                                <AiOutlinePlus size={20} onClick={() => {if(quantity < 20){setQuantity(quantity+1)}}}/>
                            </div>
                        </Form.Group>                        
                        <Button type='submit' variant='outline-info' className='mt-4 w-100 p-3 fw-bold'>Add To Cart</Button>
                    </Form>
                </Col>
                <Col>
                    <div className='d-flex flex-column flex-md-row align-items-center gap-3 justify-content-center my-5'>
                        <Button
                            type='button'
                            onClick={() => {setFontOpen(false); setDescOpen(true);setShipOpen(false)}}
                            aria-controls="description"
                            variant='outline-info'
                            className='w-100 py-3'
                            aria-expanded={descOpen}
                        >
                            DESCRIPTION
                        </Button>
                        <Button
                            type='button'
                            onClick={() => {setFontOpen(true); setDescOpen(false);setShipOpen(false)}}
                            aria-controls="font"
                            variant='outline-info'
                            className='w-100 py-3'
                            aria-expanded={fontOpen}
                        >
                            FONTS/PRODUCT
                        </Button>
                        <Button
                            type='button'
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