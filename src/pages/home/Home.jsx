import styles from './home.module.css'
import Background from '../../components/background/Background'
import RightArrow from '../../assets/svgs/right-arrow.svg'

const Home = () => {
  return (
    <>
      <Background />
      <div className={styles.homeContainer}>
        <div className={styles.logoContainer}>
        </div>
        <button className={styles.serviceButton}>Services<img src={RightArrow} alt="right arrow" /></button>
        <div className={styles.contentContainer}>
          <p className={styles.title}>Your brand deserves more, time for a revolution <span>!</span></p>
          <button className={styles.contactButton}>CONTACT US</button>
        </div>
      </div>
    </>
  )
}

export default Home