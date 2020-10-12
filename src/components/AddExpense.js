import React, { Component } from 'react'
import DisplayForm from './DisplayForm'


class AddExpense extends Component {
  constructor() {
    super()
    this.state = {
      date: this.addTodayDate(),
      category: 'travel',
      description: 'Some default value',
      amount: '1',
      currency: '$',
      id: Math.random()
    }
  }

  addTodayDate = () => {
    const today = new Date().toISOString().substr(0, 10);
    return today
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    this.props.addItem(this.state);

    this.setState({
      date: this.addTodayDate(),
      category: '',
      description: '',
      amount: '',
      currency: '',
      id: Math.random()
    });
  }

  render() {
    return (
      <DisplayForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} data={this.state} />
    )
  }
}

export default AddExpense
