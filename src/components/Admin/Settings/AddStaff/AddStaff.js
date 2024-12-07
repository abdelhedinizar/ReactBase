import { useState } from "react";
import { AddStaffServ } from "../../../../services/UserServ";
import "./AddStaff.css";

const AddStaff = ({ onBack }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add logic to validate and submit the form data
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    await AddStaffServ(name, email, password, confirmPassword);
    console.log("Submitting:", { email, name, password });
    onBack();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="confirm-password">Confirm Password:</label>
        <input
          type="password"
          id="confirm-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <div className="form-buttons">
        <button type="submit">Add Member</button>
        <button type="button" className="back-button" onClick={onBack}>
          Back to Staff List
        </button>
      </div>
    </form>
  );
};

export default AddStaff;
