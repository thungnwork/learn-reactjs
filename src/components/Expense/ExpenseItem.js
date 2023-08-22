import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';
import { useState } from 'react';

function ExpenseItem(props) {
    var [title, setTitle] = useState(props.expense.title);

    // var title = props.expense.title;

    function handleClick() {
        setTitle(title + ' 1');
        console.log(title);
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.expense.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{props.expense.amount}</div>
                <button onClick={handleClick}>Change Title</button>
            </div>
        </Card>
    );
}

export default ExpenseItem;