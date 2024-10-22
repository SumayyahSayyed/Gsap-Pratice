import React, { useEffect, useRef, useState } from 'react';
import './FlipAnimation.css';

import gsap from 'gsap';
import { Flip } from 'gsap/all';
import { useGSAP } from '@gsap/react';

import FootballImage from "../../assets/images/random/football.png";

gsap.registerPlugin(Flip);

const FlipAnimation = () => {

    const flipSection = useRef(null);
    const [animation, setAnimation] = useState(false)

    const appendChildInSectionTwo = (circle, square) => {
        square.appendChild(circle);
    }

    const removeChildFromSectionTwo = (circle, square, parent) => {
        // square.removeChild(circle);
        parent.appendChild(circle)
    }

    useEffect(() => {

        const circ = document.querySelector(".targets");
        const sqr = document.querySelector(".flip-section-two-box");


        const initialState = Flip.getState([circ, sqr])
        console.log("initial state", initialState)


        gsap.to('.flip-section-one', {
            scrollTrigger: {
                trigger: ".targets",
                start: 'top 20%',
                end: 'top 5%',
                scrub: 2,
                // pin: true,
                markers: true,
                onEnter: () => setAnimation(true),
                onLeave: () => setAnimation(false)
            }
        });


    }, [])

    useGSAP(() => {
        const circ = document.querySelector(".targets");
        const sqr = document.querySelector(".flip-section-two-box");

        const initialState = Flip.getState([circ, sqr]);

        if (animation) {
            appendChildInSectionTwo(circ, sqr);


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
        else {
            const parent = document.querySelector(".flip-section-one");

            removeChildFromSectionTwo(circ, sqr, parent);

            Flip.from(initialState, {
                duration: 2,
                ease: "power1.inOut",
            });
        }
    }, [animation]);

    return (
        <div className='flip-section' ref={flipSection}>
            <section className='flip-section-one'>

                <img src={FootballImage} className='targets' />
                <h1 className='flip-section-one-heading'>
                    Lorem ipsum dolor sit amet<br /> consectetur<br /> adipisicing elit. Deserunt voluptates
                </h1>
            </section>
            <section className='flip-section-two'>
                <div className='flip-section-two-box'>

                </div>
            </section>


            <div className="container">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga cum eum, ipsa aperiam ducimus, cupiditate modi velit temporibus nam ut reiciendis eligendi praesentium perspiciatis suscipit molestias voluptates ea. Nihil, impedit.
                Velit facilis iste necessitatibus error corporis, nobis laborum numquam. Eaque nihil adipisci dolore voluptatem, voluptas in! Quisquam fugiat totam fuga molestiae. Ipsum, impedit dolor. Tenetur aliquam dolor enim ipsum laboriosam.
                Perferendis, cum aut. Dolores beatae nulla, veritatis accusamus repellendus quibusdam laborum laboriosam unde? Magnam obcaecati vero excepturi id, ipsam at illo fugit minima consequatur, eveniet illum et. Tempora, quia porro.
                Illo nihil eaque velit! Mollitia, soluta excepturi accusantium cupiditate incidunt expedita aspernatur, officia ut, sapiente fuga aliquid reiciendis vitae odit! Tempora pariatur blanditiis illo consectetur repellat architecto impedit sint temporibus!
                Et ipsum harum consectetur maiores. Earum quia molestiae veritatis officia voluptate maxime tenetur non nisi optio sequi, error accusamus! Illo doloribus molestias quos numquam quam in doloremque assumenda ad vero!
                Cum asperiores atque illo neque architecto aliquam ex corrupti nemo, aspernatur doloremque, accusamus velit quibusdam dolor. Quae alias, est officia veniam similique consequatur magni eligendi voluptatum! Voluptates aspernatur facere officia!
                Aperiam, voluptatem eius? Veniam in tenetur id. Sed explicabo dolorum repellat corrupti accusamus hic placeat omnis eligendi vitae animi, odit ratione optio nemo voluptatibus numquam iusto, soluta perspiciatis commodi quas.
                Atque sit praesentium expedita, ad odit delectus qui soluta id quibusdam natus quia eos dolorum quidem, repellendus, deleniti reprehenderit neque hic fugit odio inventore? Omnis, vel! Quisquam odio natus numquam?
                Voluptatem officiis eum incidunt rerum ullam doloribus, hic quae a reprehenderit veritatis ipsum velit quod sunt maiores repellat dolor fugit iusto quam? Commodi, ipsum rerum. Mollitia illum laborum architecto magnam?
                Officia rerum nesciunt dicta beatae. Suscipit voluptatibus facere ad voluptate quidem et amet nemo dignissimos, omnis officiis eius, nostrum distinctio cum temporibus debitis voluptatem asperiores. Possimus veniam sapiente pariatur quas!
                Harum laboriosam magnam modi delectus eligendi illum illo ab veniam numquam, reiciendis voluptate perferendis repudiandae nulla quod facere quibusdam et quaerat ut nostrum fugit ipsa quam commodi? Eum, repudiandae minima.
                Ea, quas excepturi debitis molestias asperiores aspernatur sequi assumenda libero dolore obcaecati ratione nobis ipsa molestiae ullam expedita corporis labore, alias quisquam ex, qui non. Voluptatibus assumenda quo est accusamus.
                Saepe magnam voluptates soluta autem perferendis corrupti libero expedita cumque nihil ipsa ex fugit tempora dolor similique natus esse, minus repellendus porro illum at eligendi eaque sunt. Dolorum, omnis ex.
                Possimus suscipit in laborum perferendis qui asperiores, ducimus quisquam sequi delectus placeat labore! Alias voluptates doloremque itaque. Autem voluptates placeat provident harum reiciendis cum, sunt non quod eaque aspernatur laboriosam.
                Error hic, nostrum quo possimus asperiores, voluptatibus est nobis culpa maiores facilis, delectus iure repudiandae? Dolores, nostrum quibusdam, molestiae sit quisquam explicabo eius, optio eum aperiam dolore sed qui esse!
            </div>
        </div>
    )
}

export default FlipAnimation;