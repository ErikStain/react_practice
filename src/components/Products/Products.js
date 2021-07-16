// import styles from './Products.module.css'
import ProductsList from './ProductList'
import { array } from '../../database/products.json'
// console.log(array)

export function Products() {
  return (
    <section>
      <ProductsList array={array} />
    </section>
  )
}
