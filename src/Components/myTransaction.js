import React from 'react';
import { Link } from 'react-router-dom';
import { TransactionPage } from './easyRoute';

const MyTransaction = ({ transactions = [] }) => (
  <div className="card myTransaction">
    <div className="card-header d-flex justify-content-between align-items-center">
      <h5 className="mb-0">Recent Transactions</h5>
      <Link to="/TransactionPage" className="see-all-link">
        See All
      </Link>
    </div>
    <div className="card-body">
      {transactions.map((transaction, index) => {
        const statusColor = transaction.status === 'sent' ? 'sent' : 'received';
        return (
          <div key={index} className="transaction-item">
            <span>{transaction.name}</span>
            <button className={`status-button ${statusColor}`}>
              {transaction.status}
            </button>
            <span>{transaction.amount}</span>
          </div>
        );
      })}
    </div>
  </div>
);

export default MyTransaction;
