import React from 'react'
import { Pie } from 'react-chartjs-2'

const ExpenseChartData = ({expense}) => {

    const data = expense
    console.log(expense.user.amount)
  return (
    <>
    <div>ExpenseChartData</div>
    </>
  )
}

export default ExpenseChartData