import {useState} from 'react';
import './ExpenseForm.css';


const ExpenseForm = (props)=> {
    const [enteredDate,setEnteredDate]=useState('') //the value of event.target.value is always a string 
    //even for date, so here we are setting initial value of date as string only
    const [enteredTitle,setEnteredTitle]=useState('') //Here we are storing the title value in enteredtitle 
    const [enteredAmount,setEnteredAmount]=useState('')


    const titleChangeHandler=(event) =>{
        setEnteredTitle(event.target.value)
    }    
    const amountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value)
    }
    const dateChangeHandler=(event)=>{
        setEnteredDate(event.target.value)
    }
    const [displayAdd,setDisplayAdd]=useState(true)
    const [form,setForm]=useState(true)
    const submitHandler=(event)=>{
        event.preventDefault()  //whenever the form is submitted, 
        //the default behaviour is that the browser reloads itself,
        //preventDefault() prevents the default browser behavior for a given element.

        const expenseData={
            title:enteredTitle,
            amount:+enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData)
        setEnteredAmount('')
        setEnteredDate('')
        setEnteredTitle('')
        setDisplayAdd(false)
    }
    const removeAdd=()=>{
        setDisplayAdd(false)
    }
    const showForm=()=>{
        setDisplayAdd(true)
    }


    if(!displayAdd){
        return <div className="new-expense__controls">
            <div className="new-expense__control">
            <button type="submit" onClick={showForm}>Add new expense</button>
            </div>
        </div>
    }
    
    
    if(form){
    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' min="2019-01-01" max="2023-05-31" value={enteredDate} onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button onClick={removeAdd}>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
    </form>
    }
}

export default ExpenseForm;