import { Component } from 'react'

class ProductsClass extends Component {
  state = {}
  componentDidMount() {}
  render() {
    return (
      <section>
        <div>
          <button
            onClick={() => {
              return setCounter(counter - 1)
            }}
          >
            Click less
          </button>
          <p>{counter}</p>
          <button
            onClick={() => {
              return setCounter(counter + 1)
            }}
          >
            Click more
          </button>
        </div>
      </section>
    )
  }
}

export default ProductsClass