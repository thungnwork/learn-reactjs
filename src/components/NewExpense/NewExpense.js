import ExpenseForm from "./ExpenseForm";


function NewExpense(props) {

    const saveExpenseHandler = (data) => {
        const expenseData = {
            ...data,
            id: Math.random()
        };
        props.onAddExpense(expenseData);
    }

    return (
        <ExpenseForm onSaveExpense={saveExpenseHandler} />
    );
}

export default NewExpense;