import React, { useState, useEffect } from "react";
import styles from "./Hero.module.scss";
import Text from './../../components/Text/Text'
import Link from "next/link";
import { Container } from "react-bootstrap";
import { animated, useSpring, config } from "react-spring";
import useWindowSize from './../../hooks/useWindowSize'

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
  config: { ...config.gentle, duration: 1100 },
  loop: true,

 })
 const changeData = () => {
  const updatedData = data.map((item) => {
   const init = item.init
   return {
    ...item,
    init: item.hover,
    hover: init,
   }
  })
  setData(updatedData)
 }
 const { width } = useWindowSize();
 const mobileOptions = () => {
  if (width < 768) {
   if (data[0].init == 'Hello.' || data[0].init == 'About') {
    changeData()
   }
  }
 }
 return (
  <div
   onClick={() => mobileOptions()}
   className={styles.HeroWrapper}>
   <Container>
    <div className={styles.HeroContainer}>
     <div className={styles.IntroContainer}>
      {data.map((item, index) => {
       return (
        <Link className={styles.Link} key={index}
         href={
          (width < 768) ?
           (item.init == 'Hello.' || item.init == 'I am' || item.init == 'Sreevardhan') ? '/' : item.path

           :
           item.path
         }>
         <Text init={item.init} hover={item.hover} color={item.color} />
        </Link>
       )
      })}
     </div>
     <animated.div
      style={{
       transform: x.interpolate(
        [0, 0.25, 0.5, 0.75, 1],
        [0, -13, -16, -13, 0]).interpolate(x =>
         `translateY(${x}px)`)
      }}
      className={styles.MobileOptionsChange}>
      <p
       className={styles.OptionChange}>
       Tap anywhere</p>
     </animated.div>
    </div>
   </Container>
  </div>
 );
};

export default Hero;
