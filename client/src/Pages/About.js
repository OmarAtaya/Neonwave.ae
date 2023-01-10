import React from 'react'
import { Container, Row } from 'react-bootstrap'

function About() {
    return (
      <Container className='mt-5 d-flex flex-column align-items-center ' style={{height: 'fit-content', minHeight: '100vh'}}>
        <Row className='pt-5'>
          <h4 className='text-info p-5'>ABOUT US</h4>
        </Row>
        <Row className='text-start d-flex flex-column align-items-center w-75'>
          <p className='text-white'>NeonWave is a neon lights and home decor brand and boutique that is a built on a few elementary principles.</p>
          <p className='text-white'>We vigorously deem that aesthetic home accessories should not break the bank.</p>
          <p className='text-white'>Thus, when we created our brand, we did so with the vision of creating not only a brand, but a community where men and women who love home decor and having elegant accessories that bring life to any setting, can come endeavor in an array of sleek, aesthetic and insanely high quality neon lights that are both amazing and affordable.</p>
          <p className='text-white'>Moreover, to frankly state it, we aren't boring. We're versatile, dynamic and offer both the trendiest and the classiest of pieces. Not only that, but we also offer custom pieces that are tailored to match your own personal needs so that you make your home feel even more like home!</p>
          <p className='text-white'>With that being said, we're always developing and searching for new stylish pieces to add to our unique storefront to make your selection of neon home accessories wider, and to make your home more beautiful and welcoming than it already is.</p>
          <p className='text-white'>Therefore, when you shop with us, you are able to enjoy the luxury of having the freedom and the feel-good of always being ahead of the crowd, while remaining true to your dashing, classy ways.</p>
          <p className='text-white'>We hope to literally and figuratively light up your life and add cheer and joy to it, in style of course. We are here for you at all times and are more than happy to serve you and all your needs.</p>
        </Row>
      </Container>
    )
}

export default About