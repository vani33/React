import React, { useState } from "react";
// import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter"
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

// const Expenses = (props) => { 
function Expenses(props) {
  
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    //console.log(selectedYear);
    setFilteredYear(selectedYear);
  };

  //to filter the expenses according to the year
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  //to display the message if no expenses found for the respective year.
  // let expensesContent = <p>No expenses found</p>;

  // if(filteredExpenses.length > 0){
  //   expensesContent = filteredExpenses.map(expense => 
  //     <ExpenseItem 
  //       key={expense.id}//to uniquely identify the react of where to add the newly added one.
  //       title={expense.title} 
  //       amount={expense.amount} 
  //       date={expense.date}
  //     />
  //   );
  // }

  return (
    <div>
    
    <Card className="expenses">
    <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>

    <ExpensesChart expenses={filteredExpenses}/>
    
    <ExpensesList items = {filteredExpenses}/>
    {/* {expensesContent} */}

    {/* writing too much code in JSX is not much appreciable, so use the expensesContent variable to be returned in JSX*/}

    {/* {filteredExpenses.length === 0 && <p>No expenses found</p>}
    {filteredExpenses.length > 0 && filteredExpenses.map(expense => 
    <ExpenseItem 
      key={expense.id}//to uniquely identify the react of where to add the newly added one.
      title={expense.title} 
      amount={expense.amount} 
      date={expense.date}
    />
    )} */}

    {/* {filteredExpenses.length === 0 ? <p>No expenses found</p> : filteredExpenses.map(expense => 
    <ExpenseItem 
      key={expense.id}//to uniquely identify the react of where to add the newly added one.
      title={expense.title} 
      amount={expense.amount} 
      date={expense.date}
    />
    )} */}

    {/* {props.expenses.map(expense =>  */}
    {/* {filteredExpenses.map(expense => 
    <ExpenseItem 
      key={expense.id}//to uniquely identify the react of where to add the newly added one.
      title={expense.title} 
      amount={expense.amount} 
      date={expense.date}
    />
    )} */}
    
    {/* instead of hardcoding the data for every expense item, we are using map function as above */}
      {/* <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      />
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      />
      <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      />
      <ExpenseItem
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
      /> */}

    </Card>
    </div>
  );
}

export default Expenses;