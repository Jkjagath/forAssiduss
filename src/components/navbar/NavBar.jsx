import React from "react";
import logo from "../../assets/Assiduus_Global_Logo.jpg";
import TextField from "@mui/material/TextField";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
// import { makeStyles } from '@mui/styles';
import "./navbar.scss";
import {
  Avatar,
  Badge,
  Menu,
  MenuItem,
  styled,
} from "@mui/material";
const CustomTextField = styled(TextField)(({ theme }) => ({
  border: "none", // Remove border
  "& .MuiInputBase-root": {
    "&:hover:before": {
      borderBottom: "none !important", // Remove border on hover using !important
    },
    background: "whiteSmoke",
    borderRadius: "10px",
    paddingLeft: "0px",
    // paddingTop:'8px',
    // paddinBottom:'8px'
  },
  "& .MuiFilledInput-input": {
    paddingTop: "8px",
    paddingBottom: "8px",
  },
  "& fieldset": {
    borderColor: "none",
    outline: "none",
  },

  "& .MuiFilledInput-root:before": {
    borderBottom: "none", // Modify or override the 'before' pseudo-element styles
    // Add other styles you want to override
  },
  "& .MuiFilledInput-root:after": {
    borderBottom: "none", // Modify or override the 'before' pseudo-element styles
    // Add other styles you want to override
  },
}));
const CustomBadge = styled(Badge)({
  "& .MuiBadge-badge": {
    backgroundColor: "green", // Change background color of the badge
    top: "25%",
    right: "20%",
    size: "large",
    height: "12px",
    width: "12px",
    borderRadius: "50%",
    // Add other custom styles as needed
  },
});

function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="navBar-main">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav-items">
        <CustomTextField
          size="small"
          variant="filled"
          InputProps={{
            startAdornment: (
              // <CustomInputAdornment position="start" >
              <SearchIcon />
              // </CustomInputAdornment>
            ),
          }}
        />
        <CustomBadge overlap="circular" variant="dot" >
          <NotificationsIcon />
        </CustomBadge>
        <div className="profile-div">
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <ArrowDropDownIcon
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          />
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>

        <div></div>
      </div>
    </div>
  );
}

export default NavBar;
