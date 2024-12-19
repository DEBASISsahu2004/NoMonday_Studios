import styles from './home.module.css'
import RightArrow from '../../assets/svgs/right-arrow.svg'

const Home = () => {

  return (
    <div className={styles.homeContainer}>

      <div className={styles.logoContainer}>
      </div>

      <a href="/service" className={styles.serviceButton}>Services<img src={RightArrow} alt="right arrow" /></a>

      <div className={styles.contentContainer}>
        <p className={styles.title}>Your brand deserves more, time for a revolution <span>!</span></p>
        <a href="/contact" className={styles.contactButton}>CONTACT US</a>
      </div>

    </div>
  )
}

export default Home