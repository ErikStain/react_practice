import { Hero } from '../../components/Hero/Hero'
import { Products } from '../../components/Products/Products'
import { Popular } from '../../components/Popular/Popular'
import { Subscription } from '../../components/Subsription/Subsription'

function Home() {
  return (
    <>
      <Hero />
      <Products />
      <Popular />
      <Subscription />
    </>
  )
}

export default Home
