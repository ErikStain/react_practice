import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>
        Dog is my <br /> Copilot.
      </h1>
      <ul className={styles.buttonList}>
        <li>
          <button>Buy Now</button>
        </li>
        <li>
          <button>See Details</button>
        </li>
      </ul>
    </section>
  )
}
