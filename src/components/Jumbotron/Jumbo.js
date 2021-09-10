// import { Jumbotron as Jumbo, Container } from 'react-bootstrap'
import './Jumbo.css'

export function Jumbotron() {
  return (
    // <Jumbo className="jumbo" fluid>
    //   <div className="overlay"></div>
    //   <Container>
    //       <h1>Title</h1>
    //   </Container>
    // </Jumbo>
    <div className="jumbo jumbotron-fluid">
      <div className="overlay"></div>
      <div className="container">
        <h1 className="display-4">Fluid jumbotron</h1>
        <p className="lead">
          This is a modified jumbotron that occupies the entire horizontal space
          of its parent.
        </p>
      </div>
    </div>
  )
}
