import React, { Component } from 'react'

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
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addTodayDate = this.addTodayDate.bind(this);
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
    // console.log(this.state)

    this.props.addItem(this.state);
    // debugger

    console.log(this.state)

    this.setState({
      date: this.addTodayDate(),
      category: '',
      description: '',
      amount: '',
      currency: '',
      id: Math.random()
    })


    console.log(this.state)
  }

  handleClick = () => {
    console.log('cat')
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        
        <div className="form-group row">
          <label htmlFor="date" className="col-sm-2 col-form-label">Date</label>
          <div className="col-sm-10">
            <input required className="form-control" value={this.state.date} onChange={this.handleChange} name="date" id="date" type="date"></input>
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="amount" className="col-sm-2 col-form-label">Amount</label>
          <div className="col-sm-10">
            <input required className="form-control" id="amount" type="number" value={this.state.amount} name="amount" onChange={this.handleChange}></input>
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="currency" className="col-sm-2">Currency</label>
          <div className="col-sm-10">
            <select required className="form-control" id="currency" value={this.state.currency} name="currency" onChange={this.handleChange}>
              <option value="">-- Choose currency --</option>
              <option value="$">Dollar</option>
              <option value="£">Pound</option>
              <option value="¢">Euro</option>
              <option value="?">Other</option>
            </select>
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="category" className="col-sm-2">Category</label>
          <div className="col-sm-10">
            <select required id="category" className="form-control" value={this.state.category} onChange={this.handleChange} name="category">
              <option value="">-- Choose category --</option>
              <option value="proffesional">Professional</option>
              <option value="travel">Travel</option>
              <option value="family">Family</option>
              <option value="bills">Bills</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="description" className="col-sm-2">Description</label>
          <div className="col-sm-10">
            <textarea required id="description" className="form-control" rows="3" value={this.state.description} onChange={this.handleChange} name="description"></textarea>
          </div>
        </div>

        <div className="row">
          <div className=" offset-sm-2 col-sm-8">
            <button type="submit" className="btn btn-primary">Submit Expense</button>
          </div>
        </div>
      </form>

    )
  }
}

export default AddExpense
