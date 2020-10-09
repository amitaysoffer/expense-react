import React, { Component } from 'react'
import ExpenseItem from './ExpenseItem'

class ExpenseList extends Component {
  render() {
    return (
      <table className="table table-striped table-hover table-dark" style={{ marginTop: 20 }}>
        <thead className="thead-dark">
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {this.props.expenseList.map(item =>
            <ExpenseItem deleteItem={this.props.deleteItem} item={item} key={item.id} />)}
        </tbody>
      </table>

    )
  }
}

export default ExpenseList
