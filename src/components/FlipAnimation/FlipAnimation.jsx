import React, { useEffect, useRef, useState } from 'react';
import './FlipAnimation.css';

// else {
//     const parent = document.querySelector(".flip-section-one");

//     removeChildFromSectionTwo(circ, sqr, parent);

//     Flip.from(initialState, {
//         duration: 2,
//         ease: "power1.inOut",
//     });
// }

import gsap from 'gsap';
import { Flip } from 'gsap/all';
import { useGSAP } from '@gsap/react';

import FootballImage from "../../assets/images/random/football.png";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(Flip);

const FlipAnimation = ({ setImage }) => {

    const flipSection = useRef(null);
    const [animation, setAnimation] = useState(false)

    const appendChildInSectionTwo = (circle, square) => {
        square.appendChild(circle);
    }

    const removeChildFromSectionTwo = (circle, square, parent) => {
        // square.removeChild(circle);
        parent.appendChild(circle)
    }

    // useEffect(() => {

    //     const circ = document.querySelector(".targets");
    //     const sqr = document.querySelector(".flip-section-two-box");
    //     const endSection = document.querySelector(".flip-section-two")


    //     const initialState = Flip.getState(circ);

    //     ScrollTrigger.create({
    //         trigger: ".targets",
    //         start: 'top 20%',
    //         endTrigger: endSection,
    //         // scrub: 2,
    //         // pin: true,
    //         markers: true,
    //         onEnter: () => {
    //             Flip.from(initialState, {
    //                 duration: 1,
    //                 ease: "power1.inOut",
    //                 onStart: () => {
    //                     gsap.fromTo(".targets", {
    //                         rotate: 360,
    //                     }, {
    //                         rotate: 0, duration: 1,
    //                         ease: "power1.inOut"
    //                     })
    //                 }
    //             });
    //         },
    //         onLeave: () => {
    //             setImage(circ);
    //         }
    //     });
    // }, [])

    // useGSAP(() => {
    //     const circ = document.querySelector(".targets");
    //     const sqr = document.querySelector(".flip-section-two-box");

    //     const initialState = Flip.getState(circ);

    //     if (animation) {
    //         appendChildInSectionTwo(circ, sqr);




    //     }

    // }, [animation]);

    const p1Ref = useRef(null);
    const p2Ref = useRef(null);
    const bgRef = useRef(null);
    let flipCtx = useRef(null);

    const anim = () => {
        // Revert previous animation context, if exists
        if (flipCtx.current) flipCtx.current.revert();

        // Access DOM elements using refs
        const p1 = p1Ref.current;
        const p2 = p2Ref.current;
        const bg = bgRef.current;

        // Append bg to p1 and clear styles
        p1.appendChild(bg);
        bg.style.cssText = ""; // Clear inline styles

        // Setup GSAP Flip context
        flipCtx.current = gsap.context(() => {
            const state = Flip.getState(bg, { props: "transform" });

            // Move bg to p2 and animate Flip
            p2.appendChild(bg);
            const flip = Flip.from(state, {
                absolute: true,
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

            ScrollTrigger.create({
                trigger: ".flip-section",
                start: "top 30%",
                // endTrigger: p2,
                end: "bottom 80%",
                scrub: true,
                animation: flip,
                markers: true,
                onUpdate: () => {
                    gsap.fromTo(".targets", {
                        rotate: 360,
                    }, {
                        rotate: 0, duration: 1,
                        ease: "power1.inOut"
                    })
                }
            });
        });
    };

    useEffect(() => {
        anim();

        // Add resize listener to recalculate animations
        // window.addEventListener("resize", anim);

        // // Clean up animation and event listener on unmount
        // return () => {
        //     if (flipCtx.current) flipCtx.current.revert();
        //     window.removeEventListener("resize", anim);
        // };
    }, []);

    return (
        // <div class="container">
        //     <div class="p p-1 active" ref={p1Ref}>
        //         <div class="p-bg" ref={bgRef}></div>
        //         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        //     </div>
        //     <div class="spacer"></div>
        //     <div class="p rev p-2 p-right" ref={p2Ref}>
        //         <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        //     </div>
        //     <div class="spacer-min"></div>
        // </div>
        <div className='flip-section' ref={flipSection}>
            <section className='flip-section-one' ref={p1Ref}>

                <img src={FootballImage} className='targets' ref={bgRef} />
                <h1 className='flip-section-one-heading'>
                    Lorem ipsum dolor sit amet<br /> consectetur<br /> adipisicing elit. Deserunt voluptates
                </h1>

            </section>
            <section className='flip-section-two'>
                <div className='flip-section-two-box' ref={p2Ref}>

                </div>
            </section>
        </div>
    )
}

export default FlipAnimation;