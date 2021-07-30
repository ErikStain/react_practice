import { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Comments } from '../../components/Comments/Comments'

export class Register extends Component {
  state = { email: '', pass: '', userName: '' }
  handleChange = (event) => {
    // console.log(event.target.value)
    // console.log(event.target.name)
    const { name, value } = event.target
    this.setState({
      [name]: value,
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
    const obj = JSON.stringify({ ...this.state })
    fetch(' http://localhost:4445/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: obj,
    })
      .then((response) => {
        console.log(response)
        return response.json()
      })
      .then((data) => console.log(data))
  }
  render() {
    return (
      <section>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User name</Form.Label>
            <Form.Control
              name="userName"
              type="text"
              placeholder="Enter your name"
              onChange={this.handleChange}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              onChange={this.handleChange}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="pass"
              type="password"
              placeholder="Password"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <Comments/>
      </section>
    )
  }
}
