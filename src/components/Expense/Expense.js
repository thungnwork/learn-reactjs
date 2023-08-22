import ExpenseItem from "./ExpenseItem";
import './Expense.css'
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

function Expense(props) {
    const [filterYear, setFilterYear] = useState('');

    const getYearFilterHandler = (year) => {
        setFilterYear(year);
    }

    return (
        <Card className="expenses">
            <ExpenseFilter onGetYearFilter={getYearFilterHandler} />

            {filterYear === '' 
                ? props.expenses.map(item => (
                    <ExpenseItem
                        key={item.id}
                        expense={item}
                    ></ExpenseItem>))  
                : props.expenses.filter(item => item.date.getFullYear() === filterYear).map(item => (
                    <ExpenseItem
                        key={item.id}
                        expense={item}
                    ></ExpenseItem>))
            }
        </Card>
    );
}

export default Expense;