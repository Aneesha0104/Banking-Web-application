import React from 'react';
import Pagination from './pagination';
import customerData from './customerData';
const CustomerList = () => {

  const handleEdit = (id) => {
    console.log(`Editing customer with ID: ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Deleting customer with ID: ${id}`);
  };

  return (
    <div className="container">
      
        <div className="d-flex justify-content-end mb-2">
          <button className="btn btn-outline-primary add-customer">
            Add customer +
          </button>
        </div>
        <table className="table table-hover table-striped">
          <thead>
            <tr>
              <th scope="col">Customer ID</th>
              <th scope="col">Customer Name</th>
              <th scope="col">Account Number</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {customerData.map((customer) => (
              <tr key={customer.id}>
                <th scope="row">{customer.id}</th>
                <td>{customer.name}</td>
                <td>{customer.accountNumber}</td>
                <td className="align-middle">
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => handleEdit(customer.id)}
                  >
                    <i className="bi bi-pencil-fill"></i>
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(customer.id)}
                  >
                    <i className="bi bi-trash-fill"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination/>
      </div>
   
  );
};

export default CustomerList;
