import React, { useEffect } from 'react';
import "./Section.css";


import gsap from 'gsap';
import { Flip } from 'gsap/all';
import { useGSAP } from '@gsap/react';

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(Flip);

const Section = ({ image }) => {

    useEffect(() => {
        const element = document.querySelector(".section-for-incoming-element");

        if (image) {
            const initialState = Flip.getState(image);

            element.appendChild(image)

            Flip.from(initialState, {
                duration: 1,
                ease: "power1.inOut",
                onStart: () => {
                    gsap.fromTo(".targets", {
                        rotate: 360,
                    }, {
                        rotate: 0, duration: 1,
                        ease: "power1.inOut"
                    })
                }
            });
        }
    }, [image])
    return (
        <div className='new-section'>
            <h2>Section</h2>
            <div className='section-for-incoming-element'>

            </div>
        </div>
    )
}

export default Section;