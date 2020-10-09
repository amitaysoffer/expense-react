import React, { Component } from 'react'

class AddExpense extends Component {
  constructor() {
    super()
    this.state = {
      date: '2020-10-17',
      category: '',
      description: 'Some default value',
      amount: '',
      currency: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state);


  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group row">
          <label htmlFor="date" className="col-sm-2 col-form-label">Date</label>
          <div className="col-sm-10">
            <input className="form-control" value={this.state.date} onChange={this.handleChange} name="date" id="date" type="date"></input>
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="amount" className="col-sm-2 col-form-label">Amount</label>
          <div className="col-sm-10">
            <input className="form-control" id="amount" type="number" value={this.state.amount} name="amount" onChange={this.handleChange}></input>
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="currency" className="col-sm-2">Currency</label>
          <div className="col-sm-10">
            <select className="form-control" id="currency" value={this.state.currency} name="currency" onChange={this.handleChange}>
              <option>-- Choose category</option>
              <option>Dollar</option>
              <option>Pound</option>
              <option>Shekel</option>
              <option>Bitcoin</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="category" className="col-sm-2">Category</label>
          <div className="col-sm-10">
            <select id="category" className="form-control" value={this.state.category} onChange={this.handleChange} name="category">
              <option>Professional</option>
              <option>Travel</option>
              <option>Family</option>
              <option>Bills</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="description" className="col-sm-2">Description</label>
          <div className="col-sm-10">
            <textarea id="description" className="form-control" rows="3" value={this.state.description} onChange={this.handleChange} name="description"></textarea>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-10 offset-sm-2">
            <button type="submit" className="btn btn-primary">Submit Expense</button>
          </div>
        </div>
      </form>

    )
  }
}

export default AddExpense
