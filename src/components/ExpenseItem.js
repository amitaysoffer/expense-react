import React, { Component } from 'react'

class ExpenseItem extends Component {
  render() {
    const { date, category, description, amount, currency, id } = this.props.item
    return (
      <tr>
        <td>{date}</td>
        <td>{category}</td>
        <td>{description}</td>
        <td>{amount}{currency}</td>
        <td>
          <button className="btn btn-danger" onClick={() => this.props.deleteItem(id)}>x</button>
        </td>
      </tr>
    )
  }
}

export default ExpenseItem
