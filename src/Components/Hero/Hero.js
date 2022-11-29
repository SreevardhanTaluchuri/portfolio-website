import React, { useState, useEffect } from "react";
import styles from "./Hero.module.scss";
import Text from './Text/Text'
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { animated, useSpring, config } from "react-spring";

const Hero = () => {
    const [data, setData] = useState([
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
    ])
    const { x } = useSpring({
        from: { x: 0 }, x: 1,
        // config: { mass: 5, tension: 280, friction: 100, duration: 1000 },
        config: { ...config.gentle, duration: 1100 },
        loop: true,

    })
    const changeData = () => {
        const updatedData = data.map((item) => {
            const init = item.init
            let link = ""
            return {
                ...item,
                init: item.hover,
                hover: init,
            }
        })
        setData(updatedData)
    }
    return (
        <div className={styles.HeroWrapper}>
            <Container>
                <div className={styles.HeroContainer}>
                    <div className={styles.IntroContainer}>
                        {data.map((item, index) => {
                            return (
                                <Link className={styles.Link} key={index}
                                    to={() => {
                                        if (item.init == 'Hello.' || item.init == 'I am' || item.init == 'Sreevardhan')
                                            return '/'
                                        else
                                            return item.path

                                    }}>
                                    <Text init={item.init} hover={item.hover} color={item.color} />
                                </Link>
                            )
                        })}
                    </div>
                    <animated.div
                        style={{
                            transform: x.interpolate(
                                [0, 0.25, 0.5, 0.75, 1],
                                [0, -8, -16, -8, 0]).interpolate(x =>
                                    `translateY(${x}px)`)
                        }}
                        // style={upstyles}
                        className={styles.MobileOptionsChange}>
                        <p
                            onClick={() => changeData()}
                            className={styles.OptionChange}>
                            Tap anywhere</p>
                    </animated.div>
                </div>
            </Container>
        </div>
    );
};

export default Hero;
