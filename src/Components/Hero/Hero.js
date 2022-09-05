import React, { useState, useEffect } from "react";
import "./Hero.css";
import Text from './Text/Text'
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { animated, useSpring, useTransition } from "react-spring";

const Hero = () => {
    const data = [
        {
            init: "Hello.",
            hover: "About",
            path: "/about",
            color: "faf8f9"
        },
        {
            init: "I am",
            hover: "Work",
            path: "/work",
            color: "ea0f1e"
        },
        {
            init: "Sreevardhan",
            hover: "Contact",
            path: "/contact",
            color: "ea0f1e"
        }
    ]
    return (
        <div className="HeroWrapper">
            <Container>
                <div className="MobileView">
                    <MobileView />
                </div>

                <div className="HeroContainer">
                    <div className="IntroContainer">
                        {data.map((item, index) => {
                            return (
                                <Link className="Link" key={index} to={item.path}>
                                    <Text init={item.init} hover={item.hover} color={item.color} />
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </Container>
        </div>
    );
};

const MobileView = () => {
    return (
        <>
            <div className="MobileViewContainer">
                <div className="MobileInfoContainer">
                    <p className="MobileTextWhite">Hello.</p>
                    <p className="MobileTextRed">I am</p>
                    <p className="MobileTextRed">Sreevardhan</p>
                </div>
                <div className="MobileTap">Tap anywhere!</div>
            </div>
        </>
    );
};

export default Hero;
