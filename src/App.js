import React, { useState } from "react";
import "./App.css";
// import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { 
    id: "e2", 
    title: "New TV", 
    amount: 799.49, 
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

// function App()  =>{ //we can also use this syntax in place of function if u like
const App = () => {
  // using javascript to include paragraph; below <p> tag will simplfy this using react JSX
  // const para = document.getElementById('p')
  // para.textContent = 'This is also visible'
  // document.getElementById('root').append(para)

  //This is used previously in place of JSX(the below return statement), we need to use import react at the top
  //if we need to use this
  
  // return React.createElement (
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started"),
  //   React.createElement(Expenses, {expenses: expenses})
  // );

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    // console.log('In App.js');
    // console.log(expense);

    //this is not the better approach so going for below one by passing the function
    //setExpenses([expense, ...expenses]);

    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      {/* <h2>Let's get started</h2> */}
      {/* <p>This is also visible</p> */}
      {/* <NewExpense/> */}

      {/* this onAddExpense should be called from NewExpense */}
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );

  }
export default App;
