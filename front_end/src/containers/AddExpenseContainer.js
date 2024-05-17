import React, { useState } from 'react'
import AddExpenseForm from '../components/AddExpenseForm'
import ExpensesService from '../services/ExpensesService';

const AddExpenseContainer = ({expenses}) => {

  const [expense, setExpenseData] = useState([]);

  const createExpense = newExpense => {
    ExpensesService.addExpense(newExpense)
    .then(savedExpense => setExpenseData([...expenses, savedExpense]));

  }

  return (
    <>
    <div>AddExpenseContainer</div>
    <AddExpenseForm createExpense={createExpense} expenses={expenses}/>
    </>
  )
}

export default AddExpenseContainer