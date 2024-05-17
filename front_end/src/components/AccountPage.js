import React from 'react'

const AccountPage = ({account}) => {

  return (
    <>
    <div>Account</div>
    <div>
      <li>Name:{account.name}</li>
      <p>Amount: {account.amount}</p>

    </div>
    </>
  )
}

export default AccountPage