import AddStaffButton from "./AddStaffButton/AddStaffButton";
import "./Settings.css";
import StaffList from "./StaffList/StaffList";

const Settings = () => {
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
        <h2>Staff</h2>
        <div className="settings-item">
          <StaffList />
           <AddStaffButton />
      
        </div>
      </div>
    </div>
  );
};

export default Settings;
