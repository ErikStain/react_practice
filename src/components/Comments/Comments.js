import { Component } from 'react'
import { FloatingLabel, Form, Button } from 'react-bootstrap'

export class Comments extends Component {
  state = { name: '', comment: '' }
  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value,
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    const obj = JSON.stringify({ ...this.state })
    fetch('http://localhost:4445/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: obj,
    })
      .then((response) => {
        return response.json()
      })
      .then((data) => console.log(data))
  }
  render() {
    return (
      <section>
        <Form onSubmit={this.handleSubmit}>
          <FloatingLabel
            controlId="floatingTextarea"
            label="Comments"
            className="mb-3"
          >
            <Form.Control
              name="name"
              as="textarea"
              placeholder="Leave your name"
              onChange={this.handleChange}
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingTextarea2" label="Comments">
            <Form.Control
              name="comment"
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: '100px' }}
              onChange={this.handleChange}
            />
          </FloatingLabel>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </section>
    )
  }
}
