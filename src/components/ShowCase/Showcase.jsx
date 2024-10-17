import React, { useEffect, useState } from 'react';
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

import { gsap } from "gsap";


import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const Showcase = () => {

    useEffect(() => {
        let sections = gsap.utils.toArray(".image-container");

        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: ".showcase-section",
                // pin: true,
                // scrub: 1,
                // snap: 1 / (sections.length - 1),
                // end: "+=1000"
            }
        });

    }, [])

    const [images, setImages] = useState([Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10]);

    return (
        <div className='showcase-section'>
            <h1 className='main-heading'>
                Lorem ipsum <br />
                dolor sit amet consectetur
            </h1>

            <div className='image-section'>
                {
                    images.map((img, index) => (
                        <div key={index} className='image-container'>
                            <img className='image' src={img} alt="" />
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Showcase