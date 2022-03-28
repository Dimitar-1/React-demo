import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense() {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expanseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
    };

    return (
        < div
    className = "new-expense" >
        < ExpenseForm
    onSaveExpanseData = {saveExpenseDataHandler}
    />
    < /div>
)
    ;
}

export default NewExpense;
