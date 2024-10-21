import React, { useEffect, useState } from 'react'
import './Navbar.css';

import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';


const Navbar = () => {
    const [isDropDownOpen, setIsDropDownOpen] = useState(false)


    const openDropDown = () => {
        setIsDropDownOpen(prev => !prev);
    };

    useGSAP(() => {
        const dropDown = document.querySelector(".drop-down");
        const tl = gsap.timeline({ paused: true })
            .fromTo(dropDown,
                { maxHeight: "0px", y: -50, zIndex: -100, opacity: 0 },
                { duration: 1, maxHeight: "700px", ease: "bounce.out", zIndex: 100, y: 0, opacity: 1 }
            );

        if (isDropDownOpen) {
            tl.play();
        } else {
            tl.reverse();
        }

    }, [isDropDownOpen]);

    useEffect(() => {
        const navElements = document.querySelectorAll(".nav-item");

        navElements.forEach((item) => {
            const navItemBorder = item.querySelector(".nav-item-border");

            const tl = gsap
                .timeline({
                    paused: true
                })
                .to(navItemBorder, { duration: 0.7, width: "100%", borderColor: "#005DBD", opacity: 1 });

            item.addEventListener("mouseenter", function () {
                tl.play();
            });

            item.addEventListener("mouseleave", function () {
                tl.reverse();
            });
        });

        return () => {
            navElements.forEach((item) => {
                item.removeEventListener("mouseenter", () => { });
                item.removeEventListener("mouseleave", () => { });
            });
        };
    }, []);


    return (
        <div className='navbar-section'>
            <h3>GSAP Library</h3>

            <ul className='navigation-section'>
                <li className='nav-item'>
                    <span>Home</span>
                    <span className='nav-item-border'></span>
                </li>
                <li className='nav-item'>
                    <span>About</span>
                    <span className='nav-item-border'></span>
                </li>
                <li role='button' className='nav-item' onClick={openDropDown}>
                    <span>Services</span>
                    <span className='nav-item-border'></span>
                </li>
                <li className='nav-item'>
                    <span>Contact Us</span>
                    <span className='nav-item-border'></span>
                </li>

                <div className={`drop-down ${isDropDownOpen ? "open" : ""}`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda unde eius quibusdam repellendus illum blanditiis delectus saepe vitae vero animi, ipsa incidunt quae itaque sunt tenetur, id optio est ducimus!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, assumenda illum! Culpa velit vitae ipsa quaerat amet, enim tempore ullam aliquid labore corporis porro voluptates officiis adipisci cupiditate eius possimus?
                </div>
            </ul>
        </div>
    )
}

export default Navbar