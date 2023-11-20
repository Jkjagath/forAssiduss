import React from "react";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import ContactsRoundedIcon from "@mui/icons-material/ContactsRounded";
import "./sidebar.scss";
function SideBar() {
  let selectedElement = null;
  const handleClick = (e) => {
    if (selectedElement !== null) {
      selectedElement.target.classList.remove("clicked");
    }
    e.target.classList.add("clicked");
    selectedElement = e;
  };
  return (
    <div className="sideBar-main">
      <div className="sidebar-items" tabIndex="0" onClick={handleClick}>
        <DashboardRoundedIcon className="sidebar-icons" />
        Dashboard
      </div>
      <div className="sidebar-items" tabIndex="0" onClick={handleClick}>
        <AccountBalanceWalletRoundedIcon className="sidebar-icons" />
        Accounts
      </div>
      <div className="sidebar-items" tabIndex="0" onClick={handleClick}>
        <AttachMoneyRoundedIcon className="sidebar-icons" />
        Payroll
      </div>
      <div className="sidebar-items" tabIndex="0" onClick={handleClick}>
        <DescriptionRoundedIcon className="sidebar-icons" />
        Reports
      </div>
      <div className="sidebar-items" tabIndex="0" onClick={handleClick}>
        <PersonRoundedIcon className="sidebar-icons" />
        Advisor
      </div>
      <div className="sidebar-items" tabIndex="0" onClick={handleClick}>
        <ContactsRoundedIcon className="sidebar-icons" />
        Contacts
      </div>
    </div>
  );
}

export default SideBar;
