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
            category: category
        })
        setTitle('');
        setAmount('');
        setCategory('');
        
    }

    const expenseOptions = expenses.map((categoryItem, index) => {
        return <option key={index} value={index}>{categoryItem.category}</option>
      
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
                {expenseOptions}
            </select>
        </div>
        <button type="submit">Add Expense</button>
    </form>

    </>
  )
}

export default AddExpenseForm