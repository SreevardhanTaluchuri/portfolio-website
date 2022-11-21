import React, { useState } from 'react'
import styles from "./Home.module.scss"
import { Link } from "react-router-dom";
import { animated, useSpring } from 'react-spring';

const Home = () => {
 const [backHovered, setIsBackHovered] = useState(false);
 const { a } = useSpring({
  a: backHovered ? -15 : 0,
 });
 return (
  <div className={styles.HomeContainer}>
   <Link className={styles.Link} to="/">
    <animated.p
     style={{
      transform: a.to(
       (a) => `translateX(${a}%)`
      ),
     }}
     onMouseEnter={() => setIsBackHovered((prevState) => !prevState)}
     onMouseLeave={() => setIsBackHovered((prevState) => !prevState)}
     className={styles.Home}>{backHovered ? "wanna go back?" : "back"}
    </animated.p>
   </Link>
  </div>
 )
}

export default Home