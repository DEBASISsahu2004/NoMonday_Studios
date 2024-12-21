import styles from './service.module.css'
import { useState } from 'react'
import Links from '../../components/links/Links'
import RightArrow from '../../assets/svgs/right-arrow.svg'
import LeftArrow from '../../assets/svgs/left-arrow.svg'

const Service = () => {
  const [activeService, setActiveService] = useState(null);

  const description = {
    brandDesign: "We take your brand's design to the next level. Our expert team crafts bold, unforgettable visuals that stand out in both digital and print. From initial concept to final rollout, we ensure your brand shines across all channels, creating a unified and impactful visual identity that turns heads and makes a lasting impression.",

    rebranding: "Time for a brand makeover? We offer the ultimate rebranding for your business. With our creative power and sharp focus, we'll give your image the fresh, unforgettable look it needs to turn heads. Whether it's digital or print, we make sure you stand out. Ready to take the next step? Let's do this!",

    influencerRelations: "We connect your brand with the coolest influencers. With our expertise and ever-growing network of bloggers, influencers, and celebrities from fashion, art, and culture, we put your brand right where it belongs - at the center of attention.",
  }

  const handleClick = (service) => {
    setActiveService(service);
    const serviceDescription = document.querySelector(`.${styles.serviceDescription}`);
    if (serviceDescription) {
      serviceDescription.style.display = "block";
      serviceDescription.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
      serviceDescription.textContent = description[service];
    }
  }

  return (
    <div className={styles.serviceContainer}>
      <Links
        href="/"
        className={`${styles.HomeLink}`}
        type="sitePage">
        <button>
          <img src={LeftArrow} alt="left arrow" />Home
        </button>
      </Links>

      <div className={styles.serviceSection}>
        <h1>Services</h1>
        <div className={styles.serviceList}>
          <p onClick={() => handleClick('brandDesign')} className={`${styles.service} ${styles.brandDesign} ${activeService === 'brandDesign' ? styles.active : ''}`}>brand design</p>
          <p onClick={() => handleClick('rebranding')} className={`${styles.service} ${styles.rebranding} ${activeService === 'rebranding' ? styles.active : ''}`}>rebranding</p>
        </div>

        <p className={styles.serviceDescription}></p>

        <p onClick={() => handleClick('influencerRelations')} className={`${styles.service} ${styles.influencerRelations} ${activeService === 'influencerRelations' ? styles.active : ''}`}>influencer relations</p>
      </div>

      <Links
        href="/contact"
        className={`${styles.contactLink}`}
        type="sitePage">
        <button>
          Contact<img src={RightArrow} alt="right arrow" />
        </button>
      </Links>
    </div>
  )
}

export default Service