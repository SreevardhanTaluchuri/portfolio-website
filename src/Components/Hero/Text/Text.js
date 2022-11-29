import React, { useState } from 'react'
import { animated, useSpring } from 'react-spring';
import "./Text.scss";

const Text = ({ init, hover, color, size = "", font = "" }) => {
 const [isHovered, setIsHovered] = useState(false);
 const { a } = useSpring({
  a: isHovered ? 80 : 0,
 });
 return (
  <animated.p
   onMouseEnter={() => {
    setIsHovered(true);
    console.log(isHovered);
   }}
   onMouseLeave={() => setIsHovered(false)}
   className="heroText"
   style={{
    color: `#${color}`,
    transform: a.to(
     (a) => `translateX(${a}px)`
    ),
    fontSize: size ? size : "",
    fontFamily: font ? font : "",
   }}>
   {isHovered ? hover : init}
  </animated.p>
 )
}

export default Text