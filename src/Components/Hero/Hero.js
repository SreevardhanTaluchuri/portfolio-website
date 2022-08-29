import React, { useState } from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { animated, useSpring, useTransition } from "react-spring";

const Hero = () => {
    const defaults = {
        one: false,
        two: false,
        three: false,
    };
    const [isHovered, setIsHovered] = useState(defaults);
    const fade = useSpring({
        from: {
            opcaity: 0,
            transform: `translateY(10vh)`,
        },
        to: {
            opcaity: 1,
            transform: `translateY(10vh)`,
        },
    });
    const { a, b, c } = useSpring({
        a: isHovered.one ? 80 : 0,
        b: isHovered.two ? 80 : 0,
        c: isHovered.three ? 80 : 0,
    });
    return (
        <div className="HeroWrapper">
            <Container>
                <div className="MobileView">
                    <MobileView />
                </div>

                <div className="HeroContainer">
                    <div className="IntroContainer">
                        <Link className="Link" to="/about">
                            <animated.p
                                style={{
                                    transform: a.to(
                                        (a) => `translateX(${a}px)`
                                    ),
                                }}
                                className="TextWhite"
                                onMouseEnter={() =>
                                    setIsHovered({
                                        one: true,
                                        two: false,
                                        three: false,
                                    })
                                }
                                onMouseLeave={() => setIsHovered(defaults)}
                            >
                                {isHovered.one ? "About" : "Hello."}
                            </animated.p>
                        </Link>
                        <Link className="Link" to="/work">
                            <animated.p
                                style={{
                                    transform: b.to(
                                        (b) => `translateX(${b}px)`
                                    ),
                                }}
                                className="TextRed"
                                onMouseEnter={() => {
                                    setIsHovered({
                                        one: false,
                                        two: true,
                                        three: false,
                                    });
                                    console.log(isHovered);
                                }}
                                onMouseLeave={() => setIsHovered(defaults)}
                            >
                                {isHovered.two ? "Work" : "I am"}
                            </animated.p>
                        </Link>
                        <Link className="Link" to="/contact">
                            <animated.p
                                style={{
                                    transform: c.to(
                                        (c) => `translateX(${c}px)`
                                    ),
                                }}
                                className="TextRed"
                                onMouseEnter={() => {
                                    setIsHovered({
                                        one: false,
                                        two: false,
                                        three: true,
                                    });
                                    console.log(isHovered);
                                }}
                                onMouseLeave={() => setIsHovered(defaults)}
                            >
                                {isHovered.three ? "Contact" : "Sreevardhan"}
                            </animated.p>
                        </Link>
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
