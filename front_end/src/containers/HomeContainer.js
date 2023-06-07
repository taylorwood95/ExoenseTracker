import React, { useEffect, useState } from 'react'
import AccountPage from '../components/AccountPage'


const HomeContainer = () => {

  const [accounts, setAccounts] = useState([])

  const url = "http://localhost:8080/api/accounts"

  const accountNodes = accounts.map((account, index) => {
    return <AccountPage key={index} account={account}/>
    
  })

  const getAccounts = () => {
    fetch(url)
    .then(results => results.json())
    .then(data => setAccounts(data))

}

useEffect(() => {
  getAccounts()

}, [])


  
  
  
  return (
    <>
    <div>Home</div>
    <ul>
      {accountNodes}
    </ul>
    </>
  )
}

export default HomeContainer