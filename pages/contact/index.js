import React, { useState } from 'react'
import styles from './contact.module.scss'
import Home from '../../components/Home/Home'
import Text from '../../components/Text/Text'
import useWindowSize from '../../hooks/useWindowSize'

const index = () => {
 const [hoverText, setHoverText] = useState("copy to clipboard");
 const emailDefault = "sreevardhan.t11@gmail.com";
 const [email, setEmail] = useState(emailDefault)
 const { width } = useWindowSize();
 return (
  <div
   onClick={() => {
    if (width < 768 && email == "email copied!")
     setEmail(emailDefault);
   }}
   className={styles.ContactWrapper}>
   <div className={styles.ContactContainer}>
    <Home />
    <div className={styles.HeadingContainer}>
     <p className={styles.Heading}>
      Let's make <span>something great!</span>
     </p>
    </div>
    <div className={styles.ContentContainer}>
     <p className={styles.Heading}>Contact</p>
     <p className={styles.Text}>
      Lorem ipsum dolor sit amet. Id voluptatem unde nam iure minima eum accusantium dolor est neque dolor? Id deserunt nemo aut necessitatibus quia a praesentium doloribus et expedita illum est aspernatur repellendus in tempora expedita sit atque dolorem. Et voluptatem aliquam nam assumenda earum ad facilis molestias est officia maiores non asperiores velit ut dolorem consequuntur. Et consequatur omnis non nemo animi in repellat tenetur. At blanditiis tempore et ipsum quae est animi Quis vel pariatur sunt. Quo accusantium libero et quas temporibus quo quibusdam eaque qui laboriosam eaque ut modi obcaecati. Sed corrupti natus hic totam quas qui autem nostrum.
     </p>
     <p className={styles.Text}>
      Lorem ipsum dolor sit amet. Id beatae voluptas sit vitae inventore in autem rerum ut quisquam voluptatem id aspernatur facilis. Qui veritatis corrupti ut voluptas excepturi et ratione cupiditate eos dignissimos voluptas non alias dolor.
     </p>
     <p className={styles.Text}>
      Feel free to reach out through any platforms below:
     </p>
     <div className={styles.SocialsContainer}>
      <div
       onClick={(e) => {
        if (width < 768)
         setEmail("email copied!")
        navigator.clipboard.writeText(email)
        setHoverText('email copied!')
       }}
       onMouseLeave={() => setHoverText('copy to clipboard')}
       className={styles.Social}>
       <Text
        font="Regular"
        init={email}
        hover={hoverText}
        color="ea0f1e"
        size={width > 768 ? "17px" : "19px"}
       />
      </div>
      <a
       className={styles.Social}
       href='https://www.instagram.com/sreevardhan.110502/'
       target="_blank">
       <Text
        font="Regular"
        init="Instagram"
        hover="Instagram"
        color="ea0f1e"
        size={width > 768 ? "17px" : "19px"}
       />
      </a>
      <a
       className={styles.Social}
       href='https://www.linkedin.com/in/sreevardhan-taluchuri-4a633b140/'
       target="_blank">
       <Text
        font="Regular"
        init="Linkedin"
        hover="Linkedin"
        color="ea0f1e"
        size={width > 768 ? "17px" : "19px"}
       />
      </a>
     </div>
    </div>
   </div>
  </div>
 )
}

export default index