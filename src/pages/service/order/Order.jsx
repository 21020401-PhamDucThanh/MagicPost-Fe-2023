import React, { useState } from "react";
import "./order.scss";
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
  const [errorAlert, setErrorAlert] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [hideTimeoutId, setHideTimeoutId] = useState(null);
  const [startingAddress, setStartingAddress] = useState("");
  const [destinationAddress, setDestinationAddress] = useState("");
  const [nameSender, setNameSender] = useState("");
  const [nameReceiver, setNameReceiver] = useState("");
  const [senderPhoneNumber, setSenderPhoneNumber] = useState("");
  const [receiverPhoneNumber, setReceiverPhoneNumber] = useState("");
  const [weight, setWeight] = useState("");
  const [type, setType] = useState(1);
  const [note, setNote] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Kiểm tra xem tất cả các trường thông tin đã được nhập hay chưa
    if (
      !startingAddress ||
      !destinationAddress ||
      !nameSender ||
      !nameReceiver ||
      !senderPhoneNumber ||
      !receiverPhoneNumber ||
      !weight ||
      !type ||
      !note
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
      startingAddress,
      destinationAddress,
      nameSender,
      nameReceiver,
      senderPhoneNumber,
      receiverPhoneNumber,
      weight,
      type,
      note,
    };

    const token = localStorage.getItem("token");

    const headers = {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    };

    try {
      console.log('Data:', data);
      console.log('Headers:', headers);

      await axios.post("http://localhost:8080/transaction/", data, { headers });

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
            <div className="left">
              <div className="item">
                <div className="details">
                  <h2 className="itemTitle">Thông tin người gửi</h2>
                  <div className="detailItem">
                    <span className="itemKey">Họ và tên:</span>
                    <input
                      type="text"
                      placeholder="Nhập từ khóa..."
                      className="input"
                      value={nameSender}
                      onChange={(event) => setNameSender(event.target.value)}
                    />
                    <span className="itemKey">Số điện thoại:</span>
                    <input
                      type="text"
                      placeholder="Nhập từ khóa..."
                      className="input"
                      value={senderPhoneNumber}
                      onChange={(event) => setSenderPhoneNumber(event.target.value)}
                    />
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Địa chỉ:</span>
                    <input
                      type="text"
                      placeholder="Nhập từ khóa..."
                      className="longinput"
                      value={startingAddress}
                      onChange={(event) => setStartingAddress(event.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="item">
                <div className="details">
                  <h2 className="itemTitle">Thông tin người nhận</h2>
                  <div className="detailItem">
                    <span className="itemKey">Họ và tên:</span>
                    <input
                      type="text"
                      placeholder="Nhập từ khóa..."
                      className="input"
                      value={nameReceiver}
                      onChange={(event) => setNameReceiver(event.target.value)}
                    />
                    <span className="itemKey">Số điện thoại:</span>
                    <input
                      type="text"
                      placeholder="Nhập từ khóa..."
                      className="input"
                      value={receiverPhoneNumber}
                      onChange={(event) => setReceiverPhoneNumber(event.target.value)}
                    />
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Địa chỉ:</span>
                    <input
                      type="text"
                      placeholder="Nhập từ khóa..."
                      className="longinput"
                      value={destinationAddress}
                      onChange={(event) => setDestinationAddress(event.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="details">
              <h2 className="itemTitle">Thông tin đơn hàng</h2>
              <div className="detailItem">
                <span className="itemKey">Loại đơn hàng:</span>
                <FormControl sx={{ m: 1, minWidth: 250 }}>
                  <InputLabel id="demo-simple-select-autowidth-label">
                    Loại hàng
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    autoWidth
                    label="Loại hàng"
                    sx={{ marginRight: "128px" }}
                    value={type}
                    onChange={(event) => setType(event.target.value)}
                  >
                    <MenuItem value={1}>Hàng hóa</MenuItem>
                    <MenuItem value={2}>Tài liệu</MenuItem>
                  </Select>
                </FormControl>
                <span className="itemKey">Cân nặng:</span>
                <input
                  type="text"
                  placeholder="Nhập từ khóa..."
                  className="input"
                  value={weight}
                  onChange={(event) => setWeight(event.target.value)}
                />
                <span className="itemKey">Ghi chú:</span>
                <input
                  type="text"
                  placeholder="Nhập từ khóa..."
                  className="input"
                  value={note}
                  onChange={(event) => setNote(event.target.value)}
                />
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
    </Box>
  );
}
