import styles from './Header.module.css'
import logo from '../../images/logo.svg'
import search from '../../images/search.svg'
import cart from '../../images/cart.svg'
import menu from '../../images/menu.svg'
import { Link } from 'react-router-dom'

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
            <Link to="/" exact="true">
              Home
            </Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <Link to="/dogcare">Dog care</Link>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/register">Register</a>
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
