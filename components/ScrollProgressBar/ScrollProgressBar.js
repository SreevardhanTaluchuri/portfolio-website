import React, { useState, useEffect } from 'react'
import styles from './ScrollProgressBar.module.scss'

const ScrollProgressBar = () => {
 const [scrollPosition, setScrollPosition] = useState(0);

 const onScroll = () => {
  const winScroll = document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  const scrolled = (winScroll / height) * 100;

  setScrollPosition(scrolled);
 }

 useEffect(() => {
  window.addEventListener("scroll", onScroll);

  return () => window.removeEventListener("scroll", onScroll);
 }, [])
 return (
  <div className={styles.ProgressBarWrapper}>
   <div
    className={styles.ProgressBar}
    style={{ width: `${scrollPosition}%` }}
   ></div>
  </div>
 )
}

export default ScrollProgressBar