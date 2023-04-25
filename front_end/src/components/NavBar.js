import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <ul>
            <li>
                <Link to ="/">Home</Link>
            </li>
            <li>
                <Link to="/addexpense">Add Expense</Link>
            </li>
            <li>
                <Link to="/expenselist">Expenses</Link>
            </li>
            <li>
                <Link to="/expensecharts">Expense Data</Link>
            </li>
        </ul>
        </div>
  )
}

export default NavBar