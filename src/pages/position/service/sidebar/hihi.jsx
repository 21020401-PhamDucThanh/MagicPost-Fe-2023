import * as React from 'react';
import "./sidebar.scss"
import { useNavigate } from 'react-router-dom';
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import EditNoteIcon from '@mui/icons-material/EditNote';
import MenuIcon from '@mui/icons-material/Menu';
import { styled, useTheme } from '@mui/material/styles';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../../../context/darkModeContext";
import { useContext } from "react";
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';


const Side = () => {
  const [collapsed, setCollapsed] = React.useState(false);

  const { dispatch } = useContext(DarkModeContext);
  return (
    <div style={{ display: 'flex', height: '100%', minHeight: '400px' }} >
      <Sidebar collapsed={collapsed} className="sidebar">
        <div className="top">
          <Link to="/service" style={{ textDecoration: "none" }}>
            <span className="logo">Service</span>

          </Link>
          <main style={{ padding: 10 }}>
            <div>
              <MenuIcon className="sb-button" onClick={() => setCollapsed(!collapsed)} />
            </div>
          </main>
        </div>
        <hr />
        <div className="item">
          <img
            src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="avatar"
          />
        </div>
        <div className="center">
          <ul>
            <p className="title">Công việc</p>
            <Link to="/service/create" style={{ textDecoration: "none" }}>
              <li>
                <DashboardIcon className="icon" />
                <span>Tạo đơn hàng</span>
              </li>
            </Link>
            <Link to="/service/create" style={{ textDecoration: "none" }}>
              <li>
                <EditNoteIcon className="icon" />
                <span>Cập nhật đơn hàng</span>
              </li>
            </Link>
            <p className="title">Quản lý</p>
            <Link to="/service/users" style={{ textDecoration: "none" }}>
              <li>
                <PersonOutlineIcon className="icon" />
                <span>Quản lý nhân viên</span>
              </li>
            </Link>
            <Link to="/service/general" style={{ textDecoration: "none" }} >
              <li>
                <InsertChartIcon className="icon" />
                <span>Thống kê đơn vận</span>
              </li>
            </Link>
            <Link to="/service/order" style={{ textDecoration: "none" }}>
              <li>
                <CreditCardIcon className="icon" />
                <span>Danh sách đơn vận</span>
              </li>
            </Link>
            <p className="title">Người dùng</p>
            <Link to="/service/profile" style={{ textDecoration: "none" }}>
              <li>
                <AccountCircleOutlinedIcon className="icon" />
                <span>Thông tin cá nhân</span>
              </li>
            </Link>
            <li>
              <ExitToAppIcon className="icon" />
              <span>Đăng xuất</span>
            </li>

            <p className="title">Giao diện</p>
          </ul>
        </div>
        <div className="bottom">
          <div
            className="colorOption"
            onClick={() => dispatch({ type: "LIGHT" })}
          ></div>
          <div
            className="colorOption"
            onClick={() => dispatch({ type: "DARK" })}
          ></div>
        </div>
      </Sidebar>
    </div>
  );
};

export default Side;
