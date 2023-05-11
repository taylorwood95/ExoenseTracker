import React from 'react'

const AccountPage = ({account}) => {
  return (
    <>
    <div>Accounts</div>
    <div>
        <li>{account.user.accounts[0].name}</li>
        <p>{account.user.accounts[0].amount}</p>
    </div>
    <div>
    <li>{account.user.accounts[1].name}</li>
        <p>{account.user.accounts[1].amount}</p>
    </div>
    </>
  )
}

export default AccountPage