import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

//this function should be imported inside App.js function
function ExpenseItem(props) {
  // const expenseDate = new Date(2021, 7, 7);
  // const expenseTitle = 'Car Insurance';
  // const expenseAmount = 250.4;

  //it is one of the react hooks which is used for maintaining the state, normally used when we want to
  //reevaluate the function twice, must be written inside a function.
  //It accepts one arg i.e., initial value and returns two. setTitle is not variable it is a function(updating one)
  const [title, setTitle] = useState(props.title);

  //let title = props.title;

  const clickHandler = () =>{
    //title ="updated!!";
    setTitle('Updated!');
    console.log(title);
  }
  return (
    <li>
    <Card className="expense-item ">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
         <h2>{props.title}</h2>  
        {/* <h2>{title}</h2> */}
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* we can use the onclick events inside almost html elements in react */}
      <button onClick={clickHandler}>Change Title</button>
    </Card>
    </li>
  );
}

//if we want to use this function inside any other function, export must be used
export default ExpenseItem;
