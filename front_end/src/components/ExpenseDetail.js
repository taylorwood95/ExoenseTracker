import React from 'react'

const ExpenseDetail = ({expense}) => {
  return (
    <div>Expense Detail

        <li>{expense.title}</li>
        <p>{expense.amount}</p>
        <p>{expense.category}</p>
    </div>
  )
}

export default ExpenseDetail