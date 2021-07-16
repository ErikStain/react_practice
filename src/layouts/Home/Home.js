import { Hero } from '../../components/Hero/Hero'
import { Products } from '../../components/Products/Products'
import { Popular } from '../../components/Popular/Popular'
import { Subscription } from '../../components/Subsription/Subsription'

let title = "Dog is my Copilot"

function Home() {
  return (
    <>
      <Hero title={title}/>
      <Products />
      <Popular />
      <Subscription />
    </>
  )
}

export default Home
