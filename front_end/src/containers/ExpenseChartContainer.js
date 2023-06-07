import React from 'react'
import ExpenseChartData from '../components/ExpenseChartData'



const ExpenseChartContainer = ({ expenses }) => {

  const expenseNodes = expenses.map((expense, index) => {
    return <ExpenseChartData key={index} expense={expense}/>
    
  })


  return (
    <>
    <div>ExpenseChartContainer</div>
    {expenseNodes}
    </>
    
  )
}

export default ExpenseChartContainer