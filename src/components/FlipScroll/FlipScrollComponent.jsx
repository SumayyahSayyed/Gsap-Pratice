import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./FlipScrollComponent.css"

gsap.registerPlugin(Flip, ScrollTrigger);


const FlipScrollComponent = () => {
    const sectionOneRef = useRef();
    const sectionTwoRef = useRef();
    const itemsRef = useRef();

    useEffect(() => {
        // Get the initial layout state of all flip items
        const state = Flip.getState(".flip-item");

        // ScrollTrigger to handle scroll-based Flip animation
        ScrollTrigger.create({
            trigger: sectionOneRef.current,
            start: "top 20%",
            endTrigger: sectionTwoRef.current,
            // end: "top 90%",
            scrub: 2,
            markers: true,
            onEnter: () => {
                // Move elements based on scroll progress

                // if (self.progress > 0.5) {
                //     // Append items to section two when halfway through scroll
                sectionTwoRef.current.append(itemsRef.current);
                // } else {
                //     // Move items back to section one before halfway through scroll
                //     sectionOneRef.current.append(itemsRef.current);
                // }

                // Flip animation - continuously flip as user scrolls
                Flip.from(state, {
                    duration: 1,
                    ease: "power1.inOut",
                    absolute: true,
                    targets: ".flip-item"
                });
            }
        });
    }, []);

    return (
        <div>
            <section ref={sectionOneRef} className="section section-one">
                <div ref={itemsRef} className="flip-item">Item 1</div>
                {/* <div ref={(el) => (itemsRef.current[1] = el)} className="flip-item">Item 2</div> */}
            </section>
            <section ref={sectionTwoRef} className="section section-two"></section>
        </div>
    );
};

export default FlipScrollComponent