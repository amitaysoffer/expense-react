import React from 'react';
import Header from './components/Header';
import AddExpense from './components/AddExpense';
import ExpenseList from './components/ExpenseList';
import expenseData from './expenseData'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      expenseList: expenseData
    }
    this.addItem = this.addItem.bind(this);
  }

  addItem = (newItem) => {
    this.setState({ expenseList: [...this.state.expenseList, newItem] })
  }

  deleteItem = (id) => {
    const updatedExpenseList = this.state.expenseList.filter(item => item.id !== id)
    this.setState({ expenseList: updatedExpenseList })
  }

  render() {
    return (
      <div className="container">
        <Header />
        <AddExpense addItem={this.addItem} />
        <ExpenseList deleteItem={this.deleteItem} expenseList={this.state.expenseList} />
      </div>
    );
  }
}

export default App;

