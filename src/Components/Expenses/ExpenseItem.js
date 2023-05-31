import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
//this expenseitem component is called presentational component,dumb component or stateless component
//because it is not managing any state
function ExpenseItem(props){
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">
                    {props.amount}
                </div>
            </div>
        </Card>
    );
}
export default ExpenseItem;