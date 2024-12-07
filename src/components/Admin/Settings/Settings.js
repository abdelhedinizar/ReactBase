import { useState } from "react";
import AddStaffButton from "./AddStaffButton/AddStaffButton";
import "./Settings.css";
import StaffList from "./StaffList/StaffList";
import AddStaff from "./AddStaff/AddStaff";

const Settings = () => {
  const [currentView, setCurrentView] = useState("staffList");

  return (
    <div>
      <div className="settings-menu">
        <div className="menu-element">
          <i className="fa-solid fa-user-tie"></i>
        </div>
        <div className="menu-element">
          <i className="fa-solid fa-book-open"></i>
        </div>
        <div className="menu-element">
          <i className="fa-solid fa-receipt"></i>
        </div>
      </div>

      <div className="settings-content">
        {currentView === "staffList" && (
          <>
            <h2>Staff</h2>
            <div className="settings-item">
              <StaffList />
              <AddStaffButton onClick={() => setCurrentView("addMember")} />
            </div>
          </>
        )}
         {currentView === "addMember" && (
          <>
            <h2>Add Member</h2>
            <div className="settings-item">
              <AddStaff onBack={() => setCurrentView("staffList")}/>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Settings;
