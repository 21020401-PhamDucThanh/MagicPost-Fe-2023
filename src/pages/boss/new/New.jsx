import React, { useState, useRef, useEffect } from "react";
import "./new.scss";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import AlertTitle from '@mui/material/AlertTitle';
import Alert from '@mui/material/Alert';
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Sidebar from "../sidebar/Sidebar";
import axios from "axios";

export default function InputAdornments() {
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  const [errorAlert, setErrorAlert] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [hideTimeoutId, setHideTimeoutId] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [Type, setType] = useState("");
  const [nameadmin , setAdminname] = useState("");
  const [role, setRole] = useState("ADMIN");



  const handleSubmit = async (event) => {
    event.preventDefault();

    // Kiểm tra xem tất cả các trường thông tin đã được nhập hay chưa
    if (
      !name ||
      !email ||
      !age ||
      !password
    ) {
      // Hiển thị alert lỗi
      setErrorAlert(true);

      // Ẩn alert sau 5 giây
      const errorTimeoutId = setTimeout(() => {
        setErrorAlert(false);
      }, 5000);

      // Lưu ID của timeout để có thể xóa nó nếu cần thiết
      setHideTimeoutId(errorTimeoutId);

      return;
    }

    const data = {
      name : name,
      address : address,
      Type : Type,
      ADMIN  :{
        name : nameadmin,
        age : age,
        email : email,
        username : username,
        password : password,
      } 
      
    };


    console.log(userId);


    const headers = {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    };

    try {
      console.log('Data:', data);
      console.log('Headers:', headers);

      await axios.post("http://localhost:8080/service-point", data, { headers });

      setShowAlert(true);
      const timeoutId = setTimeout(() => {
        setShowAlert(false);
      }, 5000);

      setHideTimeoutId(timeoutId);


    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <div className="order">
        <Sidebar />
        <div className="orderContainer">
          <br />
          <br />
          <div className="top">
            <div className="right">
              <div className="item">
                <div className="details">
                  <h2 className="itemTitle">Tạo mới trưởng điểm</h2>
                  <div className="detailItem">
                    <span className="itemKey">Tên chi nhánh:</span>
                    <input
                      type="text"
                      placeholder="Nhập từ khóa..."
                      className="longinput"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                    />
                                      </div>
                                      <div className="detailItem">

                    <span className="itemKey">Địa chỉ</span>
                    <input
                      type="text"
                      placeholder="Nhập từ khóa..."
                      className="longinput"
                      value={address}
                      onChange={(event) => setAddress(event.target.value)}
                    />
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Loại : </span>
                    <input
                      type="text"
                      placeholder="Nhập từ khóa..."
                      className="longinput"
                      value={Type}
                      onChange={(event) => setType(event.target.value)}
                    />
                  </div>



                  <div className="detailItem">
                    <span className="itemKey">Tên trưởng điểm</span>
                    <input
                      type="text"
                      placeholder="Nhập từ khóa..."
                      className="longinput"
                      value={nameadmin}
                      onChange={(event) => setAdminname(event.target.value)}
                    />
                  </div>


                  <div className="detailItem">
                    <span className="itemKey">Email</span>
                    <input
                      type="text"
                      placeholder="Nhập từ khóa..."
                      className="longinput"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </div>

                  <div className="detailItem">
                    <span className="itemKey">Tuổi</span>
                    <input
                      type="text"
                      placeholder="Nhập từ khóa..."
                      className="longinput"
                      value={age}
                      onChange={(event) => setAge(event.target.value)}
                    />
                  </div>

                  <div className="detailItem">
                    <span className="itemKey">Tài khoản</span>
                    <input
                      type="text"
                      placeholder="Nhập từ khóa..."
                      className="longinput"
                      value={username}
                      onChange={(event) => setUsername(event.target.value)}
                    />
                  </div>

                  <div className="detailItem">
                    <span className="itemKey">Mật khẩu</span>
                    <input
                      type="password"
                      placeholder="Nhập từ khóa..."
                      className="longinput"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                    />
                  </div>
                </div>
              </div>
              <Button
                size="large"
                variant="contained"
                disableElevation
                sx={{ background: "#7451f8" }}
                onClick={handleSubmit}
              >
                Xác nhận
              </Button>
              {errorAlert && ( // Hiển thị Alert lỗi nếu có lỗi
                <Alert severity="error">
                  <AlertTitle>Lỗi</AlertTitle>
                  Vui lòng nhập đầy đủ thông tin — <strong>kiểm tra lại!</strong>
                </Alert>
              )}

              {showAlert && (
                <Alert severity="success">
                  <AlertTitle>Thành công</AlertTitle>
                  Đơn hàng đã được gửi thành công — <strong>Hãy kiểm tra</strong>
                </Alert>
              )}
            </div>

          </div>

        </div>
      </div>
    </Box>
  );
}
