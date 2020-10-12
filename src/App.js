import React from 'react';
import Header from './components/Header';
import AddExpense from './components/AddExpense';
import ExpenseList from './components/ExpenseList';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      expenseList: []
    }
  }

  modifyDateToWords = (date) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
      'August', 'September', 'October', 'November', 'December'];
    const month = months[parseInt(date.split('-')[1]) - 1];
    const dayNumber = parseInt(date.split('-')[2]);

    let formattedDay;
    switch (date[date.length - 1]) {
      case '1':
        formattedDay = dayNumber + "st";
        break;
      case '2':
        formattedDay = dayNumber + "nd";
        break;
      case '3':
        formattedDay = dayNumber + "rd";
        break;
      default:
        formattedDay = dayNumber + "th";
    }
    return month + ' ' + formattedDay
  }

  addItem = (newItem) => {
    newItem.date = this.modifyDateToWords(newItem.date)
    this.setState({ expenseList: [...this.state.expenseList, newItem] })
  }

  deleteItem = (id) => {
    const updatedExpenseList = this.state.expenseList.filter(item => item.id !== id)
    this.setState({ expenseList: updatedExpenseList })
  }

  componentDidUpdate() {
    localStorage.setItem('expense-list', JSON.stringify(this.state.expenseList));
  }

  componentDidMount() {
    const expleseListLS = JSON.parse(window.localStorage.getItem('expense-list'));
    expleseListLS ?
      this.setState({ expenseList: expleseListLS }) :
      this.setState({ expenseList: [] });
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

