import * as React from 'react';
import "./sidebar.scss"
import { DarkModeContext } from "../../../../context/darkModeContext";
import { useState, useContext, useRef } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import MenuIcon from '@mui/icons-material/Menu';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const drawerWidth = 240;

export default function ClippedDrawer() {
  const linkRef = useRef(null);

  const [isDrawerLarge, setIsDrawerLarge] = React.useState(true);

  const toggleDrawerSize = () => {
    if (linkRef.current) {
      setIsDrawerLarge(!isDrawerLarge);
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawerSize}
            edge="start"
            sx={{
              marginRight: 5,
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Clipped drawer
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: isDrawerLarge ? drawerWidth : '72px',
          flexShrink: 0,
          transition: 'width 0.3s',
          [`& .MuiDrawer-paper`]: { width: isDrawerLarge ? drawerWidth : '72px', boxSizing: 'border-box', transition: 'width 0.3s' },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="toggle drawer size"
            onClick={toggleDrawerSize}
            edge="start"
            sx={{
              visibility: isDrawerLarge ? 'visible' : 'hidden',
              transition: 'visibility 0.3s',
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <div className="sidebar">
          <hr />
          <div className="center">
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <br />
              <Link to="/service/create" style={{ textDecoration: "none" }} ref={linkRef}>
                <li style={{ display: 'flex', alignItems: 'center' }}>
                  <AddCircleOutlineIcon className="icon" />
                  <span style={{ marginLeft: '8px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Tạo đơn hàng mới</span>
                </li>
                </Link>
                <Link to="/service/create" style={{ textDecoration: "none" }} ref={linkRef}>
                <li style={{ display: 'flex', alignItems: 'center' }}>
                  <AddCircleOutlineIcon className="icon" />
                  <span style={{ marginLeft: '8px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Cập nh đơn hàng</span>
                </li>
              </Link>
              <Link to="/service/create" style={{ textDecoration: "none" }} ref={linkRef}>
                <li style={{ display: 'flex', alignItems: 'center' }}>
                  <BorderColorIcon className="icon" />
                  <span style={{ marginLeft: '8px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Thống kê đơn hàng</span>
                </li>
              </Link>
              <br />
              <hr />
              <br />
              <Link to="/service/users" style={{ textDecoration: "none" }}ref={linkRef}>
                <li style={{ display: 'flex', alignItems: 'center' }}>
                  <RecentActorsIcon className="icon" />
                  <span style={{ marginLeft: '8px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Quản lý người dùng</span>
                </li>
              </Link>
              <Link to="/service/payments" style={{ textDecoration: "none" }}ref={linkRef}>
                <li style={{ display: 'flex', alignItems: 'center' }}>
                  <CreditCardIcon className="icon" />
                  <span style={{ marginLeft: '8px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Quản lý thanh toán</span>
                </li>
              </Link>
              <Link to="/service/analytics" style={{ textDecoration: "none" }}ref={linkRef}>
                <li style={{ display: 'flex', alignItems: 'center' }}>
                  <InsertChartIcon className="icon" />
                  <span style={{ marginLeft: '8px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Thống kê</span>
                </li>
              </Link>
              <br />
              <hr />
              <br />
              <Link to="/service/profile" style={{ textDecoration: "none" }}ref={linkRef}>
                <li style={{ display: 'flex', alignItems: 'center' }}>
                  <AccountCircleOutlinedIcon className="icon" />
                  <span style={{ marginLeft: '8px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Hồ sơ</span>
                </li>
              </Link>
              <Link to="/logout" style={{ textDecoration: "none" }}ref={linkRef}>
                <li style={{ display: 'flex', alignItems: 'center' }}>
                  <ExitToAppIcon className="icon" />
                  <span style={{ marginLeft: '8px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Đăng xuất</span>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </Drawer>
    </Box>
  );
}

