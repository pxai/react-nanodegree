import React, { Component } from 'react';
import fetchUser from '../utils/UserAPI';

class User extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      age: ''
    }
  }

  componentDidMount() {
    fetchUser().then((user) => this.setState({
      name: user.name,
      age: user.age
    }))
  }

  render() {
    return (
      <div>
        <p>Name: {this.state.name}</p>
        <p>Age: {this.state.age}</p>
      </div>
    )
  }
}

export default User;