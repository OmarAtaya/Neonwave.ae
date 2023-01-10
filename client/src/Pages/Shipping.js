import React from 'react';
import { Container, Row } from 'react-bootstrap';

function Shipping() {
    return (
        <Container className='mt-5 pt-5' style={{height: 'fit-content', minHeight: '100vh'}}>
            <Row className='p-5'>
                <h3 className='text-info'>Fonts/Product/Size Guide</h3>
            </Row>
            <Row className='text-start text-white'>
                <h4 className='text-info'>SHIPPING</h4>
                <p>All orders are made to order by hand in our international production facilities with the care and attention to detail. Production time averages only 5-10 working days after payment. During peak periods this timeframe may increase to 2-3 weeks. </p>
                <h5 className='fw-bold'>Global shipping and production time-</h5>
                <p><h5 className='fw-bold'>Standard Service (DHL Fully Tracked, 1-2 weeks)</h5> - Average 1-2 weeks delivery to your door, including production, and full quality testing - FREE</p>
                <p><h5 className='fw-bold'>Rush Order Service (DHL Fully Tracked, 3-6 days)</h5> - Average 3-6 business days delivery to your door, including production, and full quality testing- 200 AED </p>
                <h4 className='text-info'>RETURNS</h4>
                <h5 className='fw-bold'>All our pieces are made by hand to order.</h5>
                <p>We only accept returns/refunds on faulty items, and can not accept returns due to change of mind unfortunately, as all pieces are made to order based on your exact requirements. All sales are final once placed on site. </p>
                <p>In the very unlikely case that your piece arrives broken or faulty, you have 7 days from the day of the tracked delivery to let us know via Email at neonwaveuae@gmail.com and we will deliver a replacement sign free of charge! </p>
                <h4 className='text-info'>IMPORT FEES/DUTIES</h4>
                <p>Orders to some countries may be subject to import fees/duties and taxes when delivery takes place. This depends on which country you are ordering from and also how big/heavy the piece is.</p>
                <p>This is standard procedure for any item bought online and is entirely out of our hands - many orders won't be subject to import fees, but for those that are depending on your location, please be aware that these fees are the responsibility of the customer and are not covered by Neon Wave. This amount is usually very minimal</p>
                <p>If you need any more help or have any questions or concerns, please don't hesitate to contact our team via Email at neonwaveuae@gmail.com</p>
                <p>Thanks!</p>
            </Row>
        </Container>
    )
}

export default Shipping