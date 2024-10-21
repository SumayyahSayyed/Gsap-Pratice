import React, { useEffect, useState } from 'react';
import './Footer.css';

import { gsap } from "gsap";


import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const [footerText, setFooterText] = useState("Designed By Sumayyah Sayyed");
    const [footerElement, setFooterElement] = useState();

    useEffect(() => {
        if (!Array.isArray(footerText)) {
            const data = footerText.split('');
            setFooterText(data)
        }

        if (!footerElement) {

        }

    }, [])

    useGSAP(() => {
        const footerTag = document.querySelector(".footer-text");

        if (!footerElement) {
            setFooterElement(footerTag)
        }

        ScrollTrigger.create({
            trigger: footerTag,
            start: "top 80%",
            markers: true,
            onEnter: () => {
                gsap.to('.footer-word', {
                    keyframes: {
                        y: [0, -50, 0],
                        ease: "power1.inOut"
                    },
                    duration: 1,
                    stagger: 0.1,
                })
            },
            once: true
        });
    }, [footerElement]);

    return (
        <div className='footer-section'>
            <p className='footer-text'>
                {Array.isArray(footerText) &&
                    footerText.map((word, index) => (
                        <span key={index} className='footer-word'>{word === ' ' ? '\u00A0' : word}</span>
                    ))
                }
            </p>
        </div>
    )
}

export default Footer