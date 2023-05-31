import {useState} from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpensesFilter from '../NewExpense/ExpensesFilter';
import ExpensesChart from './ExpensesChart';
function Expenses(props){
    const[filteredYear,setFilteredYear]=useState('2020')
    const filterChangeHandler=(selectedYear)=>{
        setFilteredYear(selectedYear)
    }
    const filterArray= props.expenses.filter(item=>
        {return (item.date.getFullYear().toString()===filteredYear)});

    
    return (
        <li>            
        <Card className="expenses">
        <ExpensesFilter onChangeFilter={filterChangeHandler} selected={filteredYear} />
        <ExpensesChart expenses={filterArray}/>
        {/* the ExpensesFilter component is called Controlled Component because the values and changes to the 
        value of select component in the c
        hild component- Expensesfilter are handled by this component */}
        <ExpensesList items={ filterArray}/>
        {/* We are rendering our expenses that are defined in App.js, By using map function we are converting 
        array of items to array of components of ExpenseItem, the entire expression is dynamic
        and hence enclosed in {} */}

        {/* {<ExpenseItem title={props.expenses[0].title} amount={props.expenses[0].amount} date={props.expenses[0].date}></ExpenseItem>
        <ExpenseItem title={props.expenses[1].title} amount={props.expenses[1].amount} date={props.expenses[1].date}></ExpenseItem>
        <ExpenseItem title={props.expenses[2].title} amount={props.expenses[2].amount} date={props.expenses[2].date}></ExpenseItem>
        <ExpenseItem title={props.expenses[3].title} amount={props.expenses[3].amount} date={props.expenses[3].date}></ExpenseItem> } */}
        </Card></li>
    );
}
export default Expenses;