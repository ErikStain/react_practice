import styles from './Header.module.css'
import logo from '../../images/logo.svg'
import search from '../../images/search.svg'
import cart from '../../images/cart.svg'
import menu from '../../images/menu.svg'

function Header() {
  return (
    <header className={styles.header}>
      <a href="/home" className={styles.logo}>
        <img src={logo} alt="logo" />
        <p>dog</p>
      </a>
      <nav className={styles.nav}>
        <ul className={styles.linksList}>
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="/dog care">Dog care</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/popular">Popular</a>
          </li>
        </ul>
        <ul className={styles.buttonsList}>
          <li>
            <button>
              <img src={search} alt="searchIcon" />
            </button>
          </li>
          <li>
            <button>
              <img src={cart} alt="cartIcon" />
            </button>
          </li>
          <li>
            <button>
              <img src={menu} alt="menuIcon" />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Header
