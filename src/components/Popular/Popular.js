import styles from './Popular.module.css'
import img1 from "../../images/Harness-Lead-Leash-MediumLarge-Blue 1.png"
import img2 from "../../images/Reflective-dog-collar-1_1200x1200 1.png"
import img3 from "../../images/2075_SLT_FR__50984 1.png"
import img4 from "../../images/81ud4pbkltL 1.png"
import img5 from "../../images/Rectangle 55.png"

export function Popular() {
  return (
    <section>
      <h2>Popular Products</h2>
      <p>
        A dog in heat needs more than shade The more people I meet the more I
        like my dog.Dogs leave paw prints forever on our hearts.
      </p>
      <ul>
        <li>
          <div>
            <img src={img1} alt="img1" />
          </div>
          <div>
            <h3>Mauris blandit aliquet</h3>
            <button>View Details</button>
          </div>
        </li>
        <li>
          <div>
            <img src={img2} alt="img2" />
          </div>
          <div>
            <h3>Mauris blandit aliquet</h3>
            <button>View Details</button>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div>
            <img src={img3} alt="img3" />
          </div>
          <div>
            <h3>Mauris blandit aliquet</h3>
            <button>View Details</button>
          </div>
        </li>
        <li>
          <div>
            <img src={img4} alt="img4" />
          </div>
          <div>
            <h3>Mauris blandit aliquet</h3>
            <button>View Details</button>
          </div>
        </li>
        <li>
          <div>
            <img src={img5} alt="img5" />
          </div>
          <div>
            <h3>Mauris blandit aliquet</h3>
            <button>View Details</button>
          </div>
        </li>
      </ul>
      <div>
          <button>View All Products</button>
      </div>
    </section>
  )
}
