import React from 'react';
import { Container, Image, Row } from 'react-bootstrap';
import Sign from '../assets/Sign.png';
import Package from '../assets/Package.png';
import Wire from '../assets/Wire.png';
import Backing from '../assets/Backing.jpg';

function Fonts() {
    return (
        <Container className='mt-5 pt-5' style={{height: 'fit-content', minHeight: '100vh'}}>
            <Row className='p-5'>
                <h3 className='text-info'>Fonts/Product/Size Guide</h3>
            </Row>
            <Row>
                <div id="font" className='text-start text-white'>
                    <h4 className='text-info'>PRODUCT FONT</h4>
                    <p>
                    For our pre-set designs, the fonts and styles are already set.
                    For a custom order, we can produce almost any design you could want, including letters, words, numbers, or logos
                    </p>
                    <p>
                    For a more information on a fully customizable sign, please send us a message via WhatsApp, Instagram DM, or Email.
                    </p>
                    <h4 className='text-info'>PRODUCT DETAILS</h4>
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
            </Row>
        </Container>
    )
}

export default Fonts