import React, { Component } from 'react'
import { Card, Input, Form } from 'antd'
import AUTH_SERVICE from '../../services/index'
import { MyContext } from './context/index'

class Login extends Component {
  state = {
    user: {}
  }

  handleInput = e => {
    const { user } = this.state
    const key = e.target.name
    user[key] = e.target.value
    this.setState({ user })
  }

  onSubmit = e => {
    e.preventDefault()
    AUTH_SERVICE.login(this.state.user)
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          width: '100vw',
          height: '100vh'
        }}
      >
        <h2>Login</h2>
        <Card style={{ width: '50vw' }}>
          <Form onSubmit={this.onSubmit}>
            <Form.Item>
              <Input onChange={this.handleInput} type="email" name="email" placeholder="Email" />
            </Form.Item>
            <Form.Item>
              <Input onChange={this.handleInput} type="password" name="password" placeholder="Password" />
            </Form.Item>
            <Form.Item>
              <Input type="submit" value="Login" />
            </Form.Item>
           
          </Form>
          <a href="/signup">
             <button>Signup</button>
           </a>
        </Card>
        
      </div>
    )
  }
}

Login.contextType = MyContext

export default Login