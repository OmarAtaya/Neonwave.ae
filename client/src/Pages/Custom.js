import React from 'react'
import { Container, Row } from 'react-bootstrap'

function Custom() {
    return (
        <Container className='mt-5 pt-5' style={{height: 'fit-content', minHeight: '100vh'}}>
            <Row className='p-5'>
                <h3 className='text-info'>CUSTOMIZE YOUR OWN NEON</h3>
            </Row>
            <Row className='text-white'>
                <p>Have a specific idea in mind for your very own gorgeous sign? We can produce almost any design or text you want!</p>
                <p>Please don't hesitate to contact our team of neon specialists and get expert help in making your neon dream come true. WhatsApp us :)</p>
                <p>We'll usually get back to you within 24 hours, thanks! :)</p>
                <p>- NeonWave Team</p>
            </Row>
        </Container>
    )
}

export default Custom