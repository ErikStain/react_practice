import styles from './Subsription.module.css'
import img1 from '../../images/Vector.png'
import img2 from '../../images/Vector (1).png'
import img3 from '../../images/Vector (2).png'

export function Subscription() {
  return (
    <section>
      <h2>How the Monthly Subscription Work?</h2>
      <ul>
        <li>
          <div>
            <img src={img1} />
          </div>
          <div>
              <h2>Dogs leave paw prints forever on our hearts</h2>
              <p>Dogs never bite me. Just humans.Happiness is a warm puppy. My little dog a heartbeat at my feet.Necessity has the face of a dog.</p>
              <button>View Details</button>
          </div>
        </li>
        <li>
          <div>
            <img src={img2} />
          </div>
          <div>
              <h2>Dogs leave paw prints forever on our hearts</h2>
              <p>Dogs never bite me. Just humans.Happiness is a warm puppy. My little dog a heartbeat at my feet.Necessity has the face of a dog.</p>
              <button>View Details</button>
          </div>
        </li>
        <li>
          <div>
            <img src={img3} />
          </div>
          <div>
              <h2>Dogs leave paw prints forever on our hearts</h2>
              <p>Dogs never bite me. Just humans.Happiness is a warm puppy. My little dog a heartbeat at my feet.Necessity has the face of a dog.</p>
              <button>View Details</button>
          </div>
        </li>
      </ul>
      <div>
          <button>Subscribe</button>
      </div>
    </section>
  )
}
