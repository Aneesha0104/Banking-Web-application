import React from 'react';

const CurrentBalance = (props) => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title mb-2">{props.cardNumber}</h5>
          <h2 className="card-content mb-3">{props.balance}</h2>
          <h7 className="card-subtitle mb-2 text-muted">{props.name}</h7>
          <p className="card-text mb-2 text-muted">{props.date}</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentBalance;
