import styles from './contact.module.css';
import RightArrow from '../../assets/svgs/right-arrow.svg';
import LeftArrow from '../../assets/svgs/left-arrow.svg';
import Instagram from '../../assets/svgs/instagram.svg';
import Linkedin from '../../assets/svgs/linkedin.svg';
import Links from '../../components/links/Links';

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <Links
        href="/service"
        className={`${styles.servicesLink}`}
        type="servicePage">
        <button>
          <img src={LeftArrow} alt="left arrow" />
          Services
        </button>
      </Links>

      <div className={styles.contactSection}>
        <h1>Contact Us</h1>
        <Links
          href="mailto:hello@nomondaystudios.com"
          className={`${styles.mailLink}`}
          type="socialHandleLink">
          <button>
            hello<span>@</span>nomondaystudios.com
          </button>
        </Links>

        <div className={styles.contactDetails}>
          <Links
            href="tel:+490176 8025780"
            className={`${styles.teleLink}`}
            type="socialHandleLink">
            <button>
              +49(0)176 8025780
            </button>
          </Links>

          <Links
            href="https://www.linkedin.com/company/nomondaystudios"
            className={`${styles.linkedinLink}`}
            type="socialHandleLink">
            <button>
              <img src={Linkedin} alt="linkedin" />
            </button>
          </Links>

          <Links
            href="https://www.instagram.com/nomondaystudios/"
            className={`${styles.instagramLink}`}
            type="socialHandleLink">
            <button>
              <img src={Instagram} alt="instagram" />
            </button>
          </Links>

        </div>
      </div>

      <Links
        href="/"
        className={`${styles.homeLink}`}
        type="homePage">
        <button>
          Home<img src={RightArrow} alt="right arrow" />
        </button>
      </Links>
    </div>
  )
}

export default Contact