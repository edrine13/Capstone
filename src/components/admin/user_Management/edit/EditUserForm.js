import React, { useEffect, useState, useCallback } from 'react';

const EditUserForm = (props) => {
  console.log(props.edit);
  const [editUser, setEditUser] = useState(props.edit);

  return (
    <div className="mt-5 container">
      <div className="modal" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit User</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => setEditUser(null)}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="editLastName">Last Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="editLastName"
                    value={editUser.lastName}
                    onChange={(e) =>
                      setEditUser({
                        ...editUser,
                        lastName: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="editFirstName">First Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="editFirstName"
                    value={editUser.firstName}
                    onChange={(e) =>
                      setEditUser({
                        ...editUser,
                        firstName: e.target.value,
                      })
                    }
                  />
                </div>
                {/* Add other fields for editing */}
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={() => setEditUser(null)}
              >
                Cancel
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUserForm;
