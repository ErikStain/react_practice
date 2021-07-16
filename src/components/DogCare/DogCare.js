// import styles from './DogCare.module.css'
import img1 from '../../images/Mask Group.png'

export function DogCare() {
  return (
    <section>
      <div>
        <img src={img1} alt="img" />
      </div>
      <div>
        <p>Dog Care</p>
        <h2>Start your adoption journey with us</h2>
        <p>
          A dog in heat needs more than shade The more people I meet the more I
          like my dog.The more people I meet the more I like my Dogs leave paw
          prints forever on our hearts.
        </p>
        <ul>
          <li>
            <button>Appointment Now</button>
          </li>
          <li>
            <button>See Details</button>
          </li>
        </ul>
      </div>
    </section>
  )
}
