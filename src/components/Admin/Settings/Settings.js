import { useEffect, useState } from "react";
import AddStaffButton from "./AddStaffButton/AddStaffButton";
import "./Settings.css";
import StaffList from "./StaffList/StaffList";
import AddStaff from "./AddStaff/AddStaff";
import MenuList from "./MenuList/MenuList";
import { fetchDishList } from "../../../services/DishsServ";

const Settings = () => {
  const [dishList, setDishList] = useState([]);

  useEffect(() => {
    const getDishList = async () => {
      const dishesResp = await fetchDishList();
      setDishList(dishesResp);
    };
    getDishList();
  }, [setDishList]);
  const [currentView, setCurrentView] = useState("staffList");
  return (
    <div>
      <div className="settings-menu">
        <div
          className="menu-element"
          onClick={() => setCurrentView("staffList")}
        >
          <i className="fa-solid fa-user-tie"></i>
        </div>
        <div
          className="menu-element"
          onClick={() => setCurrentView("MenuList")}
        >
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
              <AddStaff onBack={() => setCurrentView("staffList")} />
            </div>
          </>
        )}
        {currentView === "MenuList" && (
          <>
            <h2>Liste de Menu</h2>
            <div className="settings-item">
              <MenuList dishes={dishList} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Settings;
