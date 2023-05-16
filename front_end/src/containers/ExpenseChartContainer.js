import React from 'react'
import { Pie} from 'react-chartjs-2'

const ExpenseChartContainer = ({expenses}) => {

  // const expenseCategory = expenses.reduce((acc, expense) => {
  //   const category = expense.category;
  //   if(acc[category]){
  //     acc[category] += expense.amount;
  //   }
  //   else{
  //     acc[category] = expense.amount;

  //   }
  //   return acc
    
    
  // }, {})


  

  const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount);
  console.log(totalExpenses)
  
  const data = {
    labels: Object.keys(expenseCategory),
    datasets: [
      {
        label: "Expense By Category",
        data: Object.values(expenseCategory).map((amount) => (amount/ totalExpenses) * 100),
        backgroundColour: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',

        ],
        borderColour: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1
      },
    ],
  }


  return (
    <>
    <div>ExpenseChartContainer</div>
    {/* <Pie data={data}/> */}
    </>

  )
}

export default ExpenseChartContainer