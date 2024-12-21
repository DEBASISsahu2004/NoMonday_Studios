import styles from './service.module.css'
import Links from '../../components/links/Links'
import RightArrow from '../../assets/svgs/right-arrow.svg'
import LeftArrow from '../../assets/svgs/left-arrow.svg'

const Service = () => {

  const description = {
    brandDesign: "We take your brand's design to the next level. Our expert team crafts bold, unforgettable visuals that stand out in both digital and print. From initial concept to final rollout, we ensure your brand shines across all channels, creating a unified and impactful visual identity that turns heads and makes a lasting impression.",

    rebranding: "Time for a brand makeover? We offer the ultimate rebranding for your business. With our creative power and sharp focus, we'll give your image the fresh, unforgettable look it needs to turn heads. Whether it's digital or print, we make sure you stand out. Ready to take the next step? Let's do this!",

    influencerRelations: "We connect your brand with the coolest influencers. With our expertise and ever-growing network of bloggers, influencers, and celebrities from fashion, art, and culture, we put your brand right where it belongs - at the center of attention.",
  }

  const handleMouseEnter = (service) => {
    const serviceDescription = document.querySelector(`.${styles.serviceDescription}`);
    if (serviceDescription) {
      serviceDescription.style.display = "block";
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
          <p onMouseEnter={() => handleMouseEnter('brandDesign')} className={`${styles.service} ${styles.service1}`}>brand design</p>
          <p onMouseEnter={() => handleMouseEnter('rebranding')} className={`${styles.service} ${styles.service2}`}>rebranding</p>
        </div>

        <p className={styles.serviceDescription}></p>

        <p onMouseEnter={() => handleMouseEnter('influencerRelations')} className={`${styles.service} ${styles.service3}`}>influencer relations</p>
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