import React from 'react'
import ExpenseList from '../components/ExpenseList'

const ExpenseListContainer = ({expenses}) => {
  return (
    <>
    <div>ExpenseListContainer</div>
    <ExpenseList expenses={expenses}/>
    </>
  )
}

export default ExpenseListContainer