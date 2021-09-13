import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {

    //to show only the add expense button in the adding new expenses field
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString()
        };
        //console.log(expenseData);
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () =>{
        setIsEditing(false);
    };

    return (
    <div className="new-expense">
        {/* <ExpenseForm /> */}

        {/* this onSaveExpenseData should be called by ExpenseForm */}
        {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
        {isEditing && 
            (<ExpenseForm 
                onSaveExpenseData = {saveExpenseDataHandler} 
                onCancel={stopEditingHandler} 
            />
            )}
    </div>
    );
}

export default NewExpense;