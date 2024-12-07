import React, { useEffect, useState } from "react";
import "./StaffList.css";
import { getStaff } from "../../../../services/UserServ";

const StaffList = () => {
  const [staffs, setStaffs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await getStaff();
      setStaffs(fetchedData.users);
    };
    fetchData();
  }, [setStaffs]);

  const handleChangePassword = (name) => {
    alert(`Change password for ${name}`);
  };

  const handleChangeEmail = (name) => {
    alert(`Change email for ${name}`);
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
          {staffs.map((member, index) => (
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
