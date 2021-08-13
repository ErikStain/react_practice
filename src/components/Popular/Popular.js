import { Component } from 'react'
import { connect } from 'react-redux'
// import styles from './Popular.module.css'
import getPopularProducts from '../../redux/operations'
import { popularProductsArray } from '../../redux/selectors.js'

class Popular extends Component {
  state = {}
  componentDidMount() {
    this.props.getPopular()
  }
  // componentDidUpdate(prevState, prevProps) {
  //   if (prevProps.popular !== this.props.popular) {
  //     console.log(this.props.popular)
  //     this.setState({ ...this.props.popular })
  //   }
  // }
  render() {
    // const { title, content, popular, button } = this.props.popular
    return (
      this.props.popular && (
        <section>
          <h2>{this.props.popular.title}</h2>
          <p>{this.props.popular.content}</p>
          <ul>
            {this.props.popular.popular &&
              this.props.popular.popular.map((object) => {
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
            <button>{this.props.popular.button}</button>
          </div>
        </section>
      )
    )
  }
}
const mapStateToProps = (store) => {
  return { popular: popularProductsArray(store) }
}
const mapDispachToProps = {
  getPopular: getPopularProducts,
}

export default connect(mapStateToProps, mapDispachToProps)(Popular)
