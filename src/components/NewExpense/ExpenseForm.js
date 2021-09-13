import React, { useState } from "react";
import './ExpenseForm.css';


const ExpenseForm = (props) => {

  //we can use multiple states in a function(most preferrable than other method)
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

  //another way of using multiple useSates
  // const [userInput, setUserInput] = useState({
  //   enteredTitle : '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });


  //whenever this function is called, browser or react itself will amke sure that event object is created.
  const titleChangeHandler = (event) => {

    //using single useState hook for maintaining multiple states.
    //setUserInput({...userInput, enteredTitle: event.target.value,});

    //same as the above method, but there would be some misleading output with the above approach because 
    //react schedules the every task, so it would take some time to reflect the output with the previous approach
    //so it best to follow the below method using function to get the desired output.
    // setUserInput((prevState) => {
    //   return {...prevState, enteredTitle:event.target.value}
    // });

    //using multiple useStates 
    setEnteredTitle(event.target.value);

    //console.log(event.target.value)
  };

  const AmountChangeHandler = (event) => {
    //setUserInput({...userInput, enteredAmount: event.target.value});
      setEnteredAmount(event.target.value);
    //console.log(event.target.value)
  };

  const DateChangeHandler = (event) => {
    //setUserInput({...userInput,enteredDate: event.target.value});
      setEnteredDate(event.target.value);
    //console.log(event.target.value)
  };

  //on submitting the form
  const submitHandler = (event) => {
    event.preventDefault();

    //collect the data into a variable 
    const expenses = {
      title : enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    //console.log(expenses);
    props.onSaveExpenseData(expenses);

    //to clear the inputs upon submmiting the form
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value= {enteredTitle} onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={AmountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2021-01-01" step="2022-01-01" value={enteredDate} onChange={DateChangeHandler}/>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancel}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
