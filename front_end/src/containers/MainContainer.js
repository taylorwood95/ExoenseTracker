import React, { useEffect, useState } from 'react';
import AddExpenseContainer from './AddExpenseContainer';
import ExpenseListContainer from './ExpenseListContainer';
import HomeContainer from './HomeContainer';
import ExpenseChartContainer from './ExpenseChartContainer'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from '../components/NavBar';

const MainContainer = () => {

    const [expenses, setExpenses] = useState([])
    const url = "http://localhost:8080/api/expenses"

    const getExpenses = () => {
        fetch(url)
        .then(results => results.json())
        .then(data => setExpenses(data))
        


    
    }

    useEffect(() => {
        getExpenses()
      
    }, [])



  return (
    <div>
        
        <Router>
        <NavBar/>
        <Routes>
            <Route path="/" element={<HomeContainer expenses={expenses}/>}/>
            <Route path="/addexpense" element={<AddExpenseContainer expenses={expenses}/>}/>
            <Route path="/expenselist" element={<ExpenseListContainer expenses={expenses}/>}/>
            <Route path="/expensecharts" element={<ExpenseChartContainer expenses={expenses}/>}/>
        </Routes>
        </Router>
    </div>

  )
}

export default MainContainer