import React, { useEffect, useLayoutEffect, useRef } from 'react'
import './Scale.css'

import Image10 from "../../../src/assets/images/show-case/image10.jpg";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);


const Scale = () => {
    const box = useRef(null)

    useGSAP(() => {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".inner-image-section",
                start: 'top 60%',
                markers: false,
            },
            delay: 1
        });

        tl
            .to(".image-view", {
                scale: 1,
                opacity: 1,
                duration: 1,
                ease: 'power1.inOut',
            })
            .to(".text1", {
                y: -255,
                x: 196,
                zIndex: 100,
                duration: 1,
                ease: 'power1.inOut',
            }, "-=1")
            .to(".text2", {
                y: 242,
                x: 522,
                zIndex: 100,
                duration: 1,
                ease: 'power1.inOut',
            }, "-=1");

    }, []);


    return (
        <div className='scale-section' ref={box}>
            <span className='text1'>Sumayyah</span>
            <span className='text2'>Sayyed</span>

            <div className='inner-image-section'>
                <img src={Image10} className='image-view' alt="" />
            </div>
        </div>
    )
}

export default Scale