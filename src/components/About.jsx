import React, { useEffect } from 'react'
import aboutimage from '../images/about.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

function About() {
    useEffect(() => {
        Aos.init({});
    }, []);


    return (
        <div id='about'>
            <div data-aos="fade-right" className='about-image'>
                <img src={aboutimage} alt="error" />
            </div>
            <div data-aos="fade-left" className='about-text'>
                <h1>LEARN MORE ABOUT US</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus magnam, praesentium, explicabo dignissimos velit eligendi nobis consequuntur consequatur dolore error rem, est quis expedita harum?</p>
                <button>READ MORE</button>
            </div>

        </div>
    )
}

export default About;