import React from 'react'
import ExpenseDetail from './ExpenseDetail'

const ExpenseList = ({expenses}) => {

    const expenseNodes = expenses.map((expense, index) => {
      return <ExpenseDetail key={index} expense={expense}/>
    })
  return (
    <div>ExpenseList
        <ul>
            {expenseNodes}
        </ul>
    </div>
  )
}

export default ExpenseList