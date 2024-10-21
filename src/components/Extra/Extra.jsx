import React, { useEffect, useState } from 'react'
import './Extra.css'

import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const Extra = () => {
    // const [extraSection, setExtraSection] = useState()
    // useGSAP(() => {
    //     const extraSectionTag = document.querySelector("extra-section");
    //     if (!extraSection) {
    //         setExtraSection(extraSectionTag)
    //     }
    //     let borderAnimation = gsap.from(".box", {});

    //     ScrollTrigger.create({
    //         trigger: extraSectionTag,
    //         // start: "0",
    //         onEnter: () => {
    //             gsap.from('.box', {
    //                 borderBottomLeftRadius: '50% 10%',
    //                 borderBottomRightRadius: '50% 10%',
    //                 duration: 2,
    //                 ease: 'power1.inOut',
    //                 inertia: {
    //                     x: {
    //                         velocity: 500,
    //                         max: 1024,
    //                         min: 0
    //                     }
    //                 },
    //             })
    //         },
    //         onUpdate: (self) => {
    //             const padding = self.direction === -1 ? '1300%' : '1300%';
    //             const borderBottomLeftRadius = self.direction !== -1 && '50% 10%';
    //             const borderBottomRightRadius = self.direction !== -1 && '50% 10%';

    //             borderAnimation.kill();

    //             borderAnimation = gsap.from('.box', {
    //                 borderBottomLeftRadius: borderBottomLeftRadius,
    //                 borderBottomRightRadius: borderBottomRightRadius,
    //                 // padding: padding,
    //                 duration: 2,
    //                 ease: 'power1.inOut',
    //             })
    //         },

    //     });

    // }
    //     , [])

    // useEffect(() => {
    //     const extraSectionTag = document.querySelector("extra-section");
    //     setExtraSection(extraSectionTag)
    // }, [])


    useGSAP(() => {
        gsap.to(".company-tag", {
            transform: "translateX(-70%)",
            scrollTrigger: {
                trigger: ".extra-section",
                top: 'top 50%',
                end: '100vh',
                scrub: 2,
                pin: true
            }
        })
    }, [])

    return (
        <div className='extra-section'>
            {/* <div className='box'></div> */}
            <h1 className='company-tag'>FOCUSTECK</h1>
        </div>
    )
}

export default Extra