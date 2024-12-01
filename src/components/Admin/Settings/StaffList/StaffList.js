import React from "react";
import "./StaffList.css";

const StaffList = () => {
  const staff = [
    { name: "John Doe", email: "john.doe@example.com" },
    { name: "Jane Smith", email: "jane.smith@example.com" },
    { name: "Robert Brown", email: "robert.brown@example.com" },
  ];

  const handleChangePassword = (name) => {
    alert(`Change password for ${name}`);
  };

  const handleChangeEmail = (name) => {
    alert(`Change email for ${name}`);
  };

  const handleAddStaff = () => {
    alert("Add new staff functionality coming soon!");
  };

  return (
    <div className="staff-list-container">
      <table className="staff-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {staff.map((member, index) => (
            <tr key={index}>
              <td>{member.name}</td>
              <td>{member.email}</td>
              <td>
                <button
                  className="table-button change-password"
                  onClick={() => handleChangePassword(member.name)}
                >
                  Change Password
                </button>
                <button
                  className="table-button change-email"
                  onClick={() => handleChangeEmail(member.name)}
                >
                  Change Email
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StaffList;
