import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Menu,
  MenuItem,
  Popover,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const MonthCalender = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState('January');

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMonthSelect = (month) => {
    setSelectedMonth(month);
    props.monthChnage(0)
    handleClose();
    // Use the selected month in your application logic here
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleOpen}
        sx={{ color: "black", border: "1px solid lightGrey", fontSize:'0.6rem',fontFamily:'Roboto, sans-serif',fontWeight:'500' }}
        endIcon={<KeyboardArrowDownIcon />}
      >
        {selectedMonth === null ? "Select Month" : selectedMonth}
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {months.map((month, index) => (
          <MenuItem key={index} onClick={() => handleMonthSelect(month)}>
            {month}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default MonthCalender;
