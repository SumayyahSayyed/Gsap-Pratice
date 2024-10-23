import React, { useEffect } from 'react';
import "./Section.css";


import gsap from 'gsap';
import { Flip } from 'gsap/all';
import { useGSAP } from '@gsap/react';

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(Flip);

const Section = ({ image }) => {

    useGSAP(() => {
        const element = document.querySelector(".new-section-heading");

        if (image) {
            const initialState = Flip.getState(image);

            element.appendChild(image)

            Flip.from(initialState, {
                duration: 1,
                ease: "power1.inOut",
                onanimationstart: () => {
                    gsap.fromTo(".targets", {
                        rotate: 360,
                    }, {
                        rotate: 0,
                        duration: 2,
                        scale: 0.2,
                        ease: "power1.inOut",
                    });
                }
            });
        }
    }, [image])


    return (
        <div className='new-section'>
            <div className='new-section-heading'>
                <span className='new-section-heading-text'>
                    Football
                </span>
            </div>
        </div>
    )
}

export default Section;