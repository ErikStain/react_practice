import styles from './Hero.module.css'
import PropTypes from 'prop-types'

export function Hero({ title }) {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>{title}</h1>
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

Hero.defaultProps = {
  title: 'default title',
}
Hero.propTypes = {
  title: PropTypes.string.isRequired,
}
