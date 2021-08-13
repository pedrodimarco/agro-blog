import styles from './hero-image.module.css'

export default function Hero() {
    return (
            <>  
                <div className={styles.hero}>
                    <div className={styles.text}>
                        <h1>Entre mates te conté</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, consectetur!</p>
                    </div>
                </div>
            </>
    )
}