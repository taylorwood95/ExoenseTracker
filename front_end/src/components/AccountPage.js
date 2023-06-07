import React from 'react'

const AccountPage = ({account}) => {

  return (
    <>
    <div>Accounts</div>
    <div>
      <li>Name:{account.name}</li>
      <p>Amount: {account.amount}</p>
      
    </div>
    </>
  )
}

export default AccountPage