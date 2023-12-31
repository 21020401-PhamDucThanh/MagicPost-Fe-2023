import * as React from 'react';
import "./sidebar.scss"
import { useState, useContext, useRef, useEffect } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ListAltIcon from '@mui/icons-material/ListAlt';
import PostAddIcon from '@mui/icons-material/PostAdd';
import InsertChartIcon from "@mui/icons-material/InsertChart";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import MenuIcon from '@mui/icons-material/Menu';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const drawerWidth = 200;

export default function Sidebar() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    linkRef.current.click();
  };
  const role = localStorage.getItem("role");

  const linkRef = useRef(null);

  const [userRole, setUserRole] = useState(role);

  // Sử dụng useEffect để cập nhật userRole khi có thay đổi trong localStorage
  useEffect(() => {
    setUserRole(role);
  }, [role]);


  const [isDrawerLarge, setIsDrawerLarge] = React.useState(true);

  const toggleDrawerSize = () => {
    if (linkRef.current) {
      setIsDrawerLarge(!isDrawerLarge);
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: '#7451f8' }}>        <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawerSize}
          edge="start"
          sx={{
            marginRight: 1,
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          MagicPost
        </Typography>
      </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: isDrawerLarge ? drawerWidth : '52px',
          flexShrink: 0,
          transition: 'width 0.3s',
          [`& .MuiDrawer-paper`]: { width: isDrawerLarge ? drawerWidth : '52px', boxSizing: 'border-box', transition: 'width 0.3s' },
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
          <br />
          <div className="center">
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

              <Link to="/boss/list" style={{ textDecoration: "none" }} ref={linkRef}>
                <li style={{ display: 'flex', alignItems: 'center' }}>
                  <ListAltIcon className="icon" />
                  <span style={{ marginLeft: '8px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Danh sách đơn hàng</span>
                </li>
              </Link>
              <hr />
              <Link to="/boss/users" style={{ textDecoration: "none" }} ref={linkRef}>
                <li style={{ display: 'flex', alignItems: 'center' }}>
                  <RecentActorsIcon className="icon" />
                  <span style={{ marginLeft: '8px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Danh sách nhân viên</span>
                </li>
              </Link>
              <hr />
              <Link to="/boss/new" style={{ textDecoration: "none" }} ref={linkRef}>
                <li style={{ display: 'flex', alignItems: 'center' }}>
                  <AddBusinessIcon className="icon" />
                  <span style={{ marginLeft: '8px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Tạo điểm mới</span>
                </li>
              </Link>
              <hr />
              <Link to="/boss/profile" style={{ textDecoration: "none" }} ref={linkRef}>
                <li style={{ display: 'flex', alignItems: 'center' }}>
                  <AccountCircleOutlinedIcon className="icon" />
                  <span style={{ marginLeft: '8px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Thông tin cá nhân</span>
                </li>
              </Link>
              <Link to="/login" style={{ textDecoration: "none" }} ref={linkRef}>
                <li style={{ display: "flex", alignItems: "center" }} onClick={handleLogout}>
                  <ExitToAppIcon className="icon" />
                  <span style={{ marginLeft: "8px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    Đăng xuất
                  </span>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </Drawer>
    </Box>
  );
}

