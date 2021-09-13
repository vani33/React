import React from "react";
import './ExpensesLists.css';
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {


  if(props.items.length === 0){
    return <h2 className="expenses-list__fallback">Found No expenses</h2>;
  }
  return <ul className="expenses-list">
      {props.items.map(expense => 
      <ExpenseItem 
        key={expense.id}//to uniquely identify the react of where to add the newly added one.
        title={expense.title} 
        amount={expense.amount} 
        date={expense.date}
      />
    )}
  </ul>
  }



export default ExpensesList;