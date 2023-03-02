import React from "react";
import styles from "./about.module.scss";
import Home from './../../components/Home/Home'
import { Container } from "react-bootstrap";
import ScrollProgressBar from './../../components/ScrollProgressBar/ScrollProgressBar'
import Text from './../../components/Text/Text';
import useWindowSize from "../../hooks/useWindowSize";

const index = () => {
 const { width } = useWindowSize();
 return (
  <>
   <div className={styles.AboutWrapper}>
    <Container>
     <ScrollProgressBar />
     <div className={styles.AboutContainer}>
      <Home />
      <div className={styles.PageHeadingContainer}>
       <p
        className={styles.PageHeading}>I help transform
        <span>
         <span className={styles.HeadingRed}>concepts</span> into
         <span className={styles.HeadingRed}> products
         </span>
        </span>
       </p>
      </div>
      <div className={styles.AboutTextContainer}>
       <p className={styles.AboutTextHeading}>About</p>
       <p className={styles.AboutTextSubHeading}>
        Lorem ipsum dolor sit amet. Et molestiae dolor est excepturi Quis et saepe consequatur qui inventore beatae ut nihil officia in animi laboriosam et labore exercitationem. Sed assumenda autem eum dolorum cumque ea tempore rerum et minus voluptatibus.
       </p>
       <p className={styles.AboutText}>
        Lorem ipsum dolor sit amet. Et molestiae dolor est excepturi Quis et saepe consequatur qui inventore beatae ut nihil officia in animi laboriosam et labore exercitationem. Sed assumenda autem eum dolorum cumque ea tempore rerum et minus voluptatibus.
       </p>
       <p className={styles.AboutText}>
        I don't like to define myself based on my work. The work I want to accomplish defines who I am. Personality cannot be taught, but skills can. I'd rather keep learning, keep pushing myself, and accomplish exciting things that matter.
       </p>
       <p className={styles.AboutText}>
        Fueled by high energy levels and boundless enthusiasm, I am easily inspired and more than willing to follow my fascination wherever it takes me. I am a passionate, expressive and multi-talented spirit with a natural ability to entertain and inspire. I'm never satisfied just thinking of ideas. Instead, I have an almost impulsive need to respond.
       </p>
       <p className={styles.AboutText}>
        My abundant energy fuels me in the pursuit of many interests,
        hobbies, areas of study and artistic endeavors. I’m a fast learner,
        able to pick up new skills and juggle di"erent projects and roles
        with relative ease. I like to develop expertise in a number of areas
        over the course of my life and career.
       </p>
       <p className={styles.AboutText}>
        Lorem ipsum dolor sit amet. Et molestiae dolor est excepturi Quis et saepe consequatur qui inventore beatae ut nihil officia in animi laboriosam et labore exercitationem. Sed assumenda autem eum dolorum cumque ea tempore rerum et minus voluptatibus.
       </p>
       <p className={styles.AboutText}>
        Lorem ipsum dolor sit amet. Et molestiae dolor est excepturi Quis et saepe consequatur qui inventore beatae ut nihil officia in animi laboriosam et labore exercitationem. Sed assumenda autem eum dolorum cumque ea tempore rerum et minus voluptatibus.
       </p>
       <a className={styles.Resume}
        target="_blank"
        href="/pdf/Sreevardhan Taluchuri Resume.pdf" >
        <Text
         init="My Resume"
         hover="My Resume"
         color="ea0f1e"
         size={
          width > 768 ? "20px" : "18px"
         }
        />
       </a>
      </div>
     </div>
    </Container>
   </div>
  </>
 );
};

export default index;
