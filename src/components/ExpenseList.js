import React from 'react'
import ExpenseItem from './ExpenseItem'

function ExpenseList(props) {
  const hideElement = {
    display: 'none'
  }
  const styleHeader = {
    padding: 60,
    textAlign: 'center',
    background: '#333',
    color: '#fff',
    fontSize: 30,
    marginTop: 20
  }

  return (
    <div className="expense-list table-responsive">
      <h1 style={props.expenseList.length > 0 ? hideElement : styleHeader}>No Expenses Yet</h1>
      <table style={props.expenseList.length > 0 ? { marginTop: 30 } : hideElement} className="table table-striped table-hover table-light">
        <thead className="thead-light">
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {props.expenseList.map(item =>
            <ExpenseItem deleteItem={props.deleteItem} item={item} key={item.id} />)}
        </tbody>
      </table>
    </div>

  )
}

export default ExpenseList
