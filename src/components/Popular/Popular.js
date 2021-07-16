// import styles from './Popular.module.css'
import {
  title,
  content,
  popular,
  button,
} from '../../database/popularList.json'

export function Popular() {
  return (
    <section>
      <h2>{title}</h2>
      <p>{content}</p>
      <ul>
        {popular.map((object) => {
          const { id, title, button, img } = object
          return (
            <li key={id}>
              <div>
                <img src={img} alt="img" width="200" />
              </div>
              <div>
                <h3>{title}</h3>
                <button>{button}</button>
              </div>
            </li>
          )
        })}
      </ul>
      <div>
        <button>{button}</button>
      </div>
    </section>
  )
}
