import React from "react";
import "./AddStaffButton.css";

const AddStaffButton = ({ onClick }) => {
  return (
    <button className="add-staff-button" onClick={onClick}>
      +
    </button>
  );
};

export default AddStaffButton;
