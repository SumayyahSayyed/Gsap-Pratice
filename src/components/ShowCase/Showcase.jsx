import React, { useEffect, useRef, useState } from 'react';
import './Showcase.css';

import Image1 from "../../../src/assets/images/show-case/image1.jpg";
import Image2 from "../../../src/assets/images/show-case/image2.jpg";
import Image3 from "../../../src/assets/images/show-case/image3.jpg";
import Image4 from "../../../src/assets/images/show-case/image4.jpg";
import Image5 from "../../../src/assets/images/show-case/image5.jpg";
import Image6 from "../../../src/assets/images/show-case/image6.jpg";
import Image7 from "../../../src/assets/images/show-case/image7.jpg";
import Image8 from "../../../src/assets/images/show-case/image8.jpg";
import Image9 from "../../../src/assets/images/show-case/image9.jpg";
import Image10 from "../../../src/assets/images/show-case/image10.jpg";

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);


const Showcase = () => {
    const [images, setImages] = useState([Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10]);

    const containerRef = useRef(null);

    useGSAP(() => {
        const container = containerRef.current;
        const sections = gsap.utils.toArray('.scroll-item'); // Select all items

        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: 'none',
            scrollTrigger: {
                trigger: container,
                pin: true, // Pin the container during scroll
                scrub: 1, // Synchronize scroll with animation
                end: () => `+=${container.offsetWidth}`, // End based on container width
                start: 'top top', // Start the scroll when top of the container hits top of the viewport
            },
        });
    });



    return (
        <div className='showcase-section'>
            <h1 className='main-heading'>
                Lorem ipsum <br />
                dolor sit amet consectetur
            </h1>

            <div className='horizontal-scroll' ref={containerRef}>
                <div className='scroll-container'>
                    {images.map((img, index) => (
                        <div key={index} className='scroll-item'>
                            <img src={img} alt={`img-${index}`} className='scroll-image' />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Showcase
