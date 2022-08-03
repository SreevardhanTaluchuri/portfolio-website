import React, { useState } from "react";
import "./Hero.css";
import { Container } from "react-bootstrap";
import { animated, useSpring } from "react-spring";

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
        },
        to: {
            opcaity: 1,
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
                <div className="HeroContainer">
                    <div className="IntroContainer">
                        <animated.p
                            style={{
                                transform: a.to((a) => `translateX(${a}px)`),
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
                        <animated.p
                            style={{
                                transform: b.to((b) => `translateX(${b}px)`),
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
                        <animated.p
                            style={{
                                transform: c.to((c) => `translateX(${c}px)`),
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
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Hero;
