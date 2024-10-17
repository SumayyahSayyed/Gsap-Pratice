import React, { useEffect, useState } from 'react'
import './Navbar.css';

import { gsap } from "gsap";


const Navbar = () => {
    const [navItem, setNavItem] = useState([]);
    const [isDropDownOpen, setIsDropDownOpen] = useState(false)


    navItem.forEach((item) => {
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

    const openDropDown = () => {
        setIsDropDownOpen(prev => !prev);
    }

    useEffect(() => {
        const dropDown = document.querySelector(".drop-down");
        const tl = gsap
            .timeline({
                paused: true
            }).
            to(dropDown, {
                duration: 1, maxHeight: "700px", opacity: 1,
            });

        if (isDropDownOpen) {
            tl.play();
        }
        if (!isDropDownOpen) {
            tl.reverse();
        }
    }, [isDropDownOpen]);

    useEffect(() => {
        const navElement = document.querySelectorAll(".nav-item");
        setNavItem(navElement)
    }, [])


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

                {
                    isDropDownOpen && (
                        <div className='drop-down'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro sequi quam animi soluta unde sit quibusdam illo ducimus ut. Id animi molestiae optio deleniti numquam aliquid eaque facilis accusantium enim?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro sequi quam animi soluta unde sit quibusdam illo ducimus ut. Id animi molestiae optio deleniti numquam aliquid eaque facilis accusantium enim?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro sequi quam animi soluta unde sit quibusdam illo ducimus ut. Id animi molestiae optio deleniti numquam aliquid eaque facilis accusantium enim?Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        </div>
                    )
                }
            </ul>
        </div>
    )
}

export default Navbar