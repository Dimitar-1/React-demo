import {useState} from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
    const expenseDate = props.date;
    const expenseTitle = props.title;
    const expenseAmount = props.amount;

    const [title, setTitle] = useState(expenseTitle);
    const clickHandler = () => {
        setTitle("meraba from here");
    };

    return (
        < Card
    className = "expense-item" >
        < ExpenseDate
    date = {expenseDate}
    />
    < div
    className = "expense-item__description" >
        < h2 > {title} < /h2>
        < div
    className = "expense-item__price" >${expenseAmount} < /div>
        < /div>

        < button
    onClick = {clickHandler} > Click
    me
    now
    ! < /button>
    < /Card>
)
    ;
}

export default ExpenseItem;
