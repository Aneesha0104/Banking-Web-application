import React from 'react';
import { Navbar, MyTransaction } from './easyRoute';
import transactions from './transactions';
import Balances from './balanceData';

const UserDashboard = () => {
  return (
    <>
      <Navbar />
      <h2 className="mt-5 mb-2 px-3">Your Current Balance</h2>
      <Balances />
      <h3 className="mt-5 mb-2 px-3">My Transactions</h3>
      <MyTransaction transactions={transactions} />
    </>
  );
}

export default UserDashboard;
