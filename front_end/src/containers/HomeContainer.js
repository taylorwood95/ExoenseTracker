import React, { useEffect, useState } from 'react'
import AccountPage from '../components/AccountPage'

const HomeContainer = ({expenses}) => {

  const accountNodes = expenses.map((account, index) => {
    return <AccountPage key={index} account={account}/>
    
  })
  
  
  
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