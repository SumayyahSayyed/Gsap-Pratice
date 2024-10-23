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
    const p1Ref = useRef(null);
    const p2Ref = useRef(null);
    const bgRef = useRef(null);
    // const [animation, setAnimation] = useState(false)

    const appendChildInSectionTwo = (circle, square) => {
        square.appendChild(circle);
    }

    const removeChildFromSectionTwo = (circle, square, parent) => {
        // square.removeChild(circle);
        parent.appendChild(circle)
    }

    const animation = () => {
        const p1 = p1Ref.current;
        const p2 = p2Ref.current;
        const bg = bgRef.current;


        ScrollTrigger.create({
            trigger: ".flip-section",
            start: "top top",
            end: "bottom bottom",
            scrub: 2,
            // pin: true,
            markers: true,
            onEnter: (self) => {
                const state = Flip.getState(bg, { props: "transform,translateY,translateX" });
                console.log("self", self)
                p2.appendChild(bg);

                Flip.from(state, {
                    duration: 2,
                    rotate: 360,
                    ease: "power1.inOut",
                    onanimationstart: () => {
                        gsap.to(bg, {
                            scale: 1.5,
                            duration: 2,
                        })
                    }
                });
            },
            onEnterBack: () => {
                console.log("ENTERING")
                const state = Flip.getState(bg, { props: "transform,translateY,translateX" });

                p2.appendChild(bg);

                Flip.from(state, {
                    duration: 2,
                    rotate: 360,
                    ease: "power1.inOut",
                    onanimationstart: () => {
                        gsap.to(bg, {
                            scale: 1.5,
                            duration: 2,
                        })
                    }
                });
                setImage()
            },
            onLeaveBack: () => {
                const state = Flip.getState(bg, { props: "transform,translateY,translateX" });

                p1.appendChild(bg);

                Flip.from(state, {
                    duration: 2,
                    rotate: 360,
                    ease: "power1.inOut",
                    onanimationstart: () => {
                        gsap.to(bg, {
                            scale: 1,
                            duration: 2,
                        })
                    }
                });
                setImage()

            },
            onLeave: () => {
                setImage(bg)
            }
        });


    };

    useGSAP(() => {
        animation();
    }, []);

    return (
        <div className='flip-section' ref={flipSection}>
            <section className='flip-section-one' >

                <h1 className='flip-section-one-heading'>
                    Lorem ipsum dolor sit amet<br /> consectetur<br /> adipisicing elit. Deserunt voluptates
                </h1>
                <div className='flip-section-image-box' ref={p1Ref}>

                    <img id='football-image' src={FootballImage} className='targets' ref={bgRef} />
                </div>


            </section>
            <section className='flip-section-two' >
                <div className='flip-section-image-box' ref={p2Ref} >

                </div>
                <h1 className='flip-section-two-heading'>
                    Lorem ipsum dolor sit amet<br /> consectetur<br /> adipisicing elit. Deserunt voluptates
                </h1>
            </section>
        </div>
    )
}

export default FlipAnimation;