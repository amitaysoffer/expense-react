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

  addItem = (item) => {
    const newExpenseList = this.state.expenseList.concat(item);
    this.setState({ expenseList: newExpenseList })
    // console.log(item)
  }

  deleteItem = (id) => {
    const updatedExpenseList = this.state.expenseList.filter(item => item.id !== id)
    this.setState({ expenseList: updatedExpenseList })
  }

  render() {
    console.log(this.state.expenseList)
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

