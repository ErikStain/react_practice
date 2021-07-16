import styles from "./Products.module.css"

function ProductsList({array}) {
    return (
        <ul className={styles.list}>
        {array.map((object) => {
          const { id, title, content, button } = object
          return (
            <li key={id}>
              <h3 className={styles.itemTitle}>{title}</h3>
              <p className={styles.itemText}>{content}</p>
              <button className={styles.itemButton}>{button}</button>
            </li>
          )
        })}
      </ul>
    )
}
export default ProductsList