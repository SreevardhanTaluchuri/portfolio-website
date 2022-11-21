import React, { useState, useEffect } from "react";
import styles from "./Hero.module.scss";
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
        <div className={styles.HeroWrapper}>
            <Container>
                <div className={styles.MobileView}>
                    <MobileView />
                </div>

                <div className={styles.HeroContainer}>
                    <div className={styles.IntroContainer}>
                        {data.map((item, index) => {
                            return (
                                <Link className={styles.Link} key={index} to={item.path}>
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
            <div className={styles.MobileViewContainer}>
                <div className={styles.MobileInfoContainer}>
                    <p className={styles.MobileTextWhite}>Hello.</p>
                    <p className={styles.MobileTextRed}>I am</p>
                    <p className={styles.MobileTextRed}>Sreevardhan</p>
                </div>
                <div className={styles.MobileTap}>Tap anywhere!</div>
            </div>
        </>
    );
};

export default Hero;
