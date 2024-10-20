import React, { useState, useEffect } from 'react'
import { gsap } from "gsap";

import './Slider.css'

import Image1 from "../../../src/assets/images/image1.jpg";
import Image2 from "../../../src/assets/images/image2.jpg";
import Image3 from "../../../src/assets/images/image3.jpg";
import Image4 from "../../../src/assets/images/image4.jpg";
import Image5 from "../../../src/assets/images/image5.jpeg";
import Image6 from "../../../src/assets/images/image6.jpg";
import Image7 from "../../../src/assets/images/image7.jpg";

const Slider = () => {
    const [sliderData, setSliderData] = useState([
        {
            image: Image1,
            text: 'Lorem ipsum dolor',
            isLoaded: false
        },
        {
            image: Image2,
            text: 'sit amet consectetur',
            isLoaded: false
        },
        {
            image: Image3,
            text: 'adipisicing elit Voluptas',
            isLoaded: false
        },
        {
            image: Image4,
            text: 'laudantium eligendi natus',
            isLoaded: false
        },
        {
            image: Image5,
            text: 'illum sapiente tempore',
            isLoaded: false
        },
        {
            image: Image6,
            text: 'corrupti Ipsum repudiandae',
            isLoaded: false
        },
        {
            image: Image7,
            text: 'dicta Sapiente doloribus',
            isLoaded: false
        },
    ]);
    const [currentImageIndex, setCurrentImageIndex] = useState(Math.floor(sliderData.length / 2));
    const [sliderSection, setsliderSection] = useState([]);
    const [loadingElement, setLoadingElement] = useState([]);

    const handleImageLoad = (index) => {
        setSliderData(prevData => prevData.map((item, i) =>
            i === index ? { ...item, isLoaded: true } : item
        ));
    };


    const updateCurrentImageIndex = (event, index) => {
        setCurrentImageIndex(index);
    }


    useEffect(() => {
        const sliderSectionData = document.querySelectorAll(".slider-data-section");
        const loadingElement = document.querySelectorAll(".loading-text");


        setLoadingElement(loadingElement);
        setsliderSection(sliderSectionData);
    }, [])

    useEffect(() => {

        if (sliderSection) {

            sliderSection.forEach((section) => {
                const image = section.getElementsByTagName('img')[0];
                const text = section.querySelector(".slider-text");

                const tl = gsap
                    .timeline({
                        paused: true
                    })
                    .fromTo(image, {
                        filter: 'grayscale(100%)'
                    }, { duration: 0.1, filter: 'grayscale(0%)', ease: "ease-in" })
                    .fromTo(text, { opacity: 0, x: -20 }, { opacity: 1, duration: 0.1, x: 0 });



                if (image.className === "slider-image") {
                    image.addEventListener("mouseenter", function (e) {
                        tl.play();
                    });

                    image.addEventListener("mouseleave", function () {
                        tl.reverse();
                    });
                }
            })
        }
    }, [sliderSection])

    useEffect(() => {
        const mainImage = document.querySelector('.in-center-image');
        gsap.timeline({
        })
            .to(mainImage, { width: '100%', duration: 1, })
            .to('.slider-image', { width: '70px', duration: 1, delay: -1 });
    }, [currentImageIndex])


    useEffect(() => {
        if (loadingElement) {
            loadingElement.forEach((item, index) => {
                gsap
                    .timeline()
                    .to(item, {
                        //  y: 0, 
                        duration: 3,
                        keyframes: {
                            y: [0, 100, 0, -100, 0],
                            ease: "power1.inOut"
                        },
                        repeat: -1
                    })
            })
        }
    }, [loadingElement])

    return (
        <div className='slider-section'>
            {
                sliderData.map((data, index) => (
                    <div key={index} className='slider'>
                        <div onClick={(e) => updateCurrentImageIndex(e, index)} className='slider-data-section'>
                            <span className='slider-text'>{data.text}</span>
                            <img key={index} src={data.image} className={index === currentImageIndex ? 'in-center-image' : 'slider-image'}
                                onLoad={() => handleImageLoad(index)}
                                hidden={!data.isLoaded}
                            />

                            {!data.isLoaded &&
                                <div className='loading'>
                                    <span className='loading-text'>
                                        Loading...
                                    </span>
                                </div>
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    )

}

export default Slider