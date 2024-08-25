import React, { useState } from 'react';
import SendMoney from './sendMoney'; // Import the PopUpForm component

const PayMoney = () => {
  const [selectedIcon, setSelectedIcon] = useState(null); // Initialize as null for no selection
  const [showPopUp, setShowPopUp] = useState(false); 

  const handleIconClick = (index) => {
    setSelectedIcon(prev => (prev === index ? null : index)); // Toggle selection
  };

  const handleSendClick = () => {
    if (selectedIcon !== null) {
      setShowPopUp(true); // Show the pop-up form if an icon is selected
    } else {
      alert("Please select a person to send money to."); // Alert if no icon is selected
    }
  };

  const handleClosePopUp = () => {
    setShowPopUp(false); // Close the pop-up form
  };

  return (
    <div className="card pay-money-card" style={{ height: '11.5rem', width: '20rem' }}>
      <div className="card-header">
        <h5>Send Money</h5>
      </div>
      <div className="card-body">
        <p className="person-container">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`icon-container ${selectedIcon === i ? 'selected-icon' : ''}`}
              onClick={() => handleIconClick(i)}
            >
              <i className="bi bi-person"></i>
              {selectedIcon === i && <i className="bi bi-check-circle tick-mark"></i>}
            </div>
          ))}
        </p>
        <button className="btn btn-primary send-button" onClick={handleSendClick}>Send</button>
      </div>

      {/* Render the PopUpForm component conditionally */}
      {showPopUp && <SendMoney onClose={handleClosePopUp} />}
    </div>
  );
};

export default PayMoney;
