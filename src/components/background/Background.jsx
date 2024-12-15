import styles from './background.module.scss';

const Background = () => {

    return (
        <div className={styles.gradientbg} >
            <svg xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
                        <feBlend in="SourceGraphic" in2="goo" />
                    </filter>
                </defs>
            </svg>
            <div className={styles.gradientscontainer}>
                <div className={styles.g1}></div>
                <div className={styles.g2}></div>
                <div className={styles.g3}></div>
                <div className={styles.g4}></div>
                <div className={styles.g5}></div>
            </div>
        </div>
    );
};

export default Background;