import React , {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm=(props)=>{
    const [enteredTitle, setEnteredTitle]=useState('');
    const [enteredAmount, setEnteredAmount]=useState('');
    const [enteredDate, setEnteredDate]=useState('');

    //multistate ucun
    // const [userInput,setUserInput]=useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:''
    // });

    const titleChangeHandler=(event)=>{
        setEnteredTitle(event.target.value);

        // setUserInput({  tovsiye olunmur
        //     ...userInput,
        //     enteredTitle:event.target.value
        // });

        // setUserInput((prevState)=>{  tovsiye olunur(multistate)
        //     return {
        //         ...prevState,
        //         enteredTitle:event.target.value
        //     };
        // });
    };

    const amountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredAmount:event.target.value
        // });

        // setUserInput((prevState)=>{
        //     return {
        //         ...prevState,
        //         enteredAmount:event.target.value
        //     }
        // })
    };

    const dateChangeHandler=event=>{
        setEnteredDate(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredDate:event.target.value
        // });

        // setUserInput((prevState)=>{
        //     return {
        //         ...prevState,
        //         enteredDate:event.target.value
        //     };
        // })
    };

    const submitHandler=(event)=>{
        const expenseData={
            title:enteredTitle,
            amount: +enteredAmount, //string e cevirdik + la
            date:new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData);
        
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

        event.preventDefault();
    }

    return(
        <form onSubmit={submitHandler}> 
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    {/* two-way binding --> value={enteredTitle} */}
                    <input value={enteredTitle} type="text" onChange={titleChangeHandler}/> 
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input value={enteredAmount} type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input value={enteredDate} type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
                </div>
                <div className='new-expense__actions'>
                    <button type='button' onClick={props.onCancel}>Cancel</button>
                    <button  type='submit'>
                        Add New Expense
                    </button>
                </div>
            </div>
        </form>
    )
}
export default ExpenseForm;



