import React, {  useState } from "react";
import "./dashboard.scss";
import { Box, Button, Menu, MenuItem, Modal, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import LineGraph from "../graphs/LineGraph";
import BarGraph from "../graphs/BarGraph";
import DoubleBarGraph from "../graphs/DoubleBarGraph";
import MonthCalender from "../calender/MonthCalender";

function DashBoard() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isMonthChanged, setisMonthChanged] = React.useState(0);
  const [isOpen,setisOpen] = useState(false)
  const dataForGraph1 = [
    { x: 9, y: 20 },
    { x: 10, y: 40 },
    { x: 11, y: 30 },
    { x: 12, y: 50 },
    { x: 13, y: 60 },
    { x: 14, y: 40 },
    { x: 15, y: 30 },
    { x: 16, y: 20 },
    { x: 17, y: 50 },
    { x: 18, y: 10 },
  ];
  const dataForGraph2 = [
    { x: 9, y: 15 },
    { x: 10, y: 20 },
    { x: 11, y: 25 },
    { x: 12, y: 50 },
    { x: 13, y: 30 },
    { x: 14, y: 40 },
    { x: 15, y: 10 },
    { x: 16, y: 20 },
    { x: 17, y: 30 },
    { x: 18, y: 10 },
  ];
  const monthChnage = ()=>{
    isMonthChanged ? setisMonthChanged(0):setisMonthChanged(1)
  }
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setisOpen(false)
  };
  const handleSalesClick = ()=>{
    setisOpen(true)
  }
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  return (
    <div className="dashboard-main">
      <div className="dashboard-items">
        <div className="items-heading">
          {" "}
          Checking Account
          <div className="manage-menu">
            <Button
              id="demo-customized-button"
              aria-controls={open ? "demo-customized-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              variant="outlined"
              disableElevation
              onClick={handleClick}
              endIcon={<KeyboardArrowDownIcon />}
            >
              Manage
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Edit</MenuItem>
              <MenuItem onClick={handleClose}>Duplicate</MenuItem>

              <MenuItem onClick={handleClose}>Archive</MenuItem>
              <MenuItem onClick={handleClose}>More</MenuItem>
            </Menu>
          </div>
          <div className="calender-div">
            <MonthCalender monthChnage={monthChnage} />
          </div>
        </div>
        <div className="items-body">
          <LineGraph data={isMonthChanged ? dataForGraph1 : dataForGraph2} />
        </div>
      </div>
      <div className="dashboard-items">
        <div className="items-heading">
          {" "}
          Invoices owed to you
          <Button
            variant="contained"
            sx={{
              background: "lightGrey",
              color: "rgb(71,183,71)",
              boxShadow: "none",
              fontSize:'0.6rem',
              fontFamily:'Roboto, sans-serif',
              fontWeight:'500' ,
              width:'35%',
             
            }}
            onClick={handleSalesClick}
          >
            New Sales Invoice
          </Button>
        </div>
        <div className="items-body">
          <BarGraph isMonthChanged={isMonthChanged} />
        </div>
      </div>
      <div className="dashboard-items">
        <div className="items-heading">
          Total cash flow
          <div
            style={{
              width: "30%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <div
              style={{
                width: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  background: "rgb(71,183,71)",
                  borderRadius: "32%",
                }}
              ></div>
              <span>In</span>
            </div>
            <div
              style={{
                width: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  background: "rgb(2,187,125)",
                  borderRadius: "32%",
                }}
              ></div>
              <span>Out</span>
            </div>
          </div>
        </div>
        <div className="items-body">
          <DoubleBarGraph isMonthChanged={isMonthChanged}/>
        </div>
      </div>
      <div className="dashboard-items">
        <div className="items-heading">Account watchlist</div>
        <div className="items-body">
        <table width='100%'  style={{padding:'0 2% 0 2%',height:'100%'}}>
        <thead style={{color:'grey',fontSize:'0.9rem',fontWeight:'500',height:'20%'}}>
        <tr>
        <td style={{width:'60%'}}>Account</td>
        <td>This Month</td>
        <td>YTD</td>
        </tr>
        </thead>
        <tbody style={{fontSize:'0.8rem',fontWeight:'500'}}>
        <tr>
        <td>Sales</td>
        <td>1,194.8</td>
        <td>11,418.9</td>
        </tr>
        <tr>
        <td>Advertising</td>
        <td>1,194.8</td>
        <td>11,418.9</td>
        </tr>
        <tr>
        <td>Inventory</td>
        <td>1,194.8</td>
        <td>11,418.9</td>
        </tr>
        <tr>
        <td>Entertainment</td>
        <td>1,194.8</td>
        <td>11,418.9</td>
        </tr>
        <tr>
        <td>Product</td>
        <td>1,194.8</td>
        <td>11,418.9</td>
        </tr>
        </tbody>
        </table>
        </div>
      </div>

      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Click Below to Upload a File
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <input
          type="file"
          // onChange={handleFileChange}
          accept=".pdf,.doc,.docx" // Define accepted file types (optional)
        />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default DashBoard;
