import React, { useState, useEffect } from 'react';
import LoadingSpinner from '../../../../UI/LoadingSpinner';
import { updatedData } from '../../../../store/api/api';

const DataEditorForm = ({ user, onClose, props }) => {
  const [formData, setFormData] = useState(user);

  useEffect(() => {
    setFormData(user);
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updatedData(formData); // Assuming that the updatedData function sends the updated data to the server
      onClose();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value="{formData.firstName}"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value="{formData.lastName}"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value="{formData.email}"
            onChange={handleInputChange}
          />
        </div>
        {/* Add more form fields as needed */}
        <div className="d-flex justify-content-between">
          <button type="submit" className={`btn btn-success`}>
            Add
          </button>
          <button className="btn btn-danger ms-2">Close</button>
        </div>
      </form>
    </div>
  );
};

export default DataEditorForm;
