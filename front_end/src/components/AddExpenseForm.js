import React, { useState } from 'react'
import ExpensesService from '../services/ExpensesService'

const AddExpenseForm = ({createExpense, expenses}) => {

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('')
    const [category, setCategory] = useState('')

    const handleTitleChange = event => setTitle(event.target.value);
    const handleAmountChange = event => setAmount(event.target.value)
    const handleCategoryChange = event => setCategory(event.target.value)

    const handleSubmit = event => {
        event.preventDefault();
        createExpense({
            title: title,
            amount: amount,
            category: category,
            user : expenses[0].user

        })
        setTitle('');
        setAmount('');
        setCategory('');
        
    }

    const categoryOptions = ["Entertainment","Bills","Eating Out",
    "Transport",
    "Rent","Mortgage","Groceries",
    "Subscriptions","Other"];

    const categories = categoryOptions.map((category, index) => {
        return <option key={index} value={index}>{category}</option>
      
    })

    
  return (
    <>
    <div>AddExpenseForm</div>
    <form onSubmit={handleSubmit}>
        <h1>Add Expense</h1>
        <div>
            <label htmlFor='title'>Name:</label>
            <input type="text" id="title" value={title} required onChange={handleTitleChange}></input>
        </div>
        <div>
            <label htmlFor='amount'>Amount:</label>
            <input id="amount" value={amount} required onChange={handleAmountChange}></input>
        </div>
        <div>
            <select name="category" onChange={handleCategoryChange} defaultValue="Select Category">
                <option defaultValue="Select Category"> category</option>
                {categories}
            </select>
        </div>
        <button type="submit">Add Expense</button>
    </form>

    </>
  )
}

export default AddExpenseForm