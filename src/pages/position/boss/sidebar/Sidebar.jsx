import "./sidebar.scss";
import { useNavigate } from 'react-router-dom';
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../../../context/darkModeContext";
import { useContext } from "react";



const Sidebar = () => {
  const history = useNavigate();
  const handleClick = () => {
    history.push('/service');
  };
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/service" style={{ textDecoration: "none" }}>
          <span className="logo">Service</span>
        </Link>
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
    </div>
  );
};

export default Sidebar;
