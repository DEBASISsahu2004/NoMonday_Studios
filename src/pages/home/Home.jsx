import styles from './home.module.css'
import RightArrow from '../../assets/svgs/right-arrow.svg'
import Links from '../../components/links/Links'

const Home = () => {

  return (
    <div className={styles.homeContainer}>

      <div className={styles.logoContainer}>
      </div>

      <Links
        href="/service"
        className={`${styles.servicesLink}`} 
        type="servicePage">
        <button>
          Services<img src={RightArrow} alt="right arrow" />
        </button>
      </Links>

      <div className={styles.contentContainer}>
        <p className={styles.title}>Your brand deserves more, time for a revolution <span>!</span></p>
        <Links
          href="/contact"
          className=""
          type="contactLink">
          CONTACT US
        </Links>
      </div>

    </div>
  )
}

export default Home