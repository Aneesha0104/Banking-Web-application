import React from 'react'

const SendMoney = ({onClose}) => {
  return (
    <div className="popup-overlay">
      <div className="popup-form">
        <h5 style={{justifyContent: 'center',alignItems: 'center',display: 'flex'}}>Send Money</h5>
        <form>
          <div className="form-group">
            <label htmlFor="amount">Amount in INR:</label>
            <input type="number" id="amount" className="form-control" placeholder="Enter amount" />
            <label htmlFor="AccountNumber">Account No.:</label>
            <input type="number" id="accNum" className="form-control" placeholder="Enter Account Number" />
            <label htmlFor="IFSCcode">IFSC code</label>
            <input type="text" pattern="[A-Za-z0-9]*" id="ifsc" className="form-control" placeholder="Enter IFSC code" />
            <label htmlFor="Reciever">Name of Reciever:</label>
            <input type="text" id="reciever" className="form-control" placeholder="Enter reciever's name" />
            

          </div>
          <div className="sendMoneyBtn">
            <button type="Submit" className="btn btn-success">Pay</button>
            <button type="button" className="btn btn-danger" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SendMoney;