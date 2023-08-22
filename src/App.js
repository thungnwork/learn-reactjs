import { useState } from 'react';
import './App.css';
import Expense from './components/Expense/Expense';
import NewExpense from './components/NewExpense/NewExpense';
import Navigation from './components/Navigation/Navigation';

function App() {
  const initialExpenses = [
    {id: 1, title: 'Petrol Gas', amount: 2, date: new Date(2023, 8, 8)},
    {id: 2, title: 'Cinema', amount: 10, date: new Date(2022, 7, 4)},
    {id: 3, title: 'Coffee', amount: 5, date: new Date(2023, 4, 5)},
    {id: 4, title: 'Dinner', amount: 20, date: new Date(2023, 2, 6)},
  ];

  const [expenses, setExpenses] = useState(initialExpenses);

  const addExpenseHandler = (data) => {
    setExpenses(previousState => {
      return [data, ...previousState];
    });
  }

  return (
    <>
      <Navigation />
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense expenses={expenses}></Expense>
    </>
  );
}

export default App;
