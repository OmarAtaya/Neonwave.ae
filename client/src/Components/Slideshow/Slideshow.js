import React, {useState, useEffect} from 'react';
import { Button, Carousel, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Slide1 from '../../assets/Slide1.jpg';
import Slide2 from '../../assets/Slide2.jpg';
import Slide3 from '../../assets/Slide3.jpg';
import Slide4 from '../../assets/Slide4.jpg';

function Slideshow() {
    const [Images, setImages] = useState([])

    const cardsPerPage = () => {
        const screenWidth = window.screen.width;
        if (screenWidth <= 874) { //small
            setImages(prevImages => [
                {
                    url: Slide2,
                    caption: "ENDEVER IN AN ARRAY OF NEON",
                    size: "w-100"
                },
                {
                    url: Slide4,
                    caption: "LET US LIGHT UP YOUR WORLD",
                    size: "w-100"
                },
            ])
        } 
        else
        {
            setImages(prevImages => [
                {
                    url: Slide1,
                    caption: "ENDEVER IN AN ARRAY OF NEON",
                    size: "w-100"
                },
                {
                    url: Slide3,
                    caption: "LET US LIGHT UP YOUR WORLD",
                    size: "w-100"
                },
              ])
        }
    }

    useEffect(() => {
        cardsPerPage();
      }, []);

    return (
        <Carousel className='w-100 p-0'>
            {Images.map((slide, index) => {
                return(
                    <Carousel.Item className='w-100' key={index}>
                        <Image src={slide.url} alt='' className={slide.size} style={{filter: 'brightness(60%)'}}/>
                        <Carousel.Caption className='d-flex flex-column align-items-center align-items-md-start justify-content-start fw-bold mb-5'>
                            <h3>{slide.caption}</h3>
                            <Link to='/collections/shop-all'>
                                <Button variant='outline-info' className='w-auto fw-bold' style={{borderWidth: '2px'}}><h4>SHOP NOW</h4></Button>
                            </Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })}
        </Carousel>
    )
}

export default Slideshow