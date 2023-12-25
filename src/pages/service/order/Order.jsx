import * as React from "react";
import "./order.scss";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Sidebar from "../sidebar/Sidebar";
import { green } from "@mui/material/colors";
import { Input } from "@mui/material";

export default function InputAdornments() {
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
                      // required=''
                      // // value={searchTerm}
                      // // onChange={handleSearchChange}
                    />
                    <span className="itemKey">Số điện thoại:</span>
                    <input
                      type="text"
                      placeholder="Nhập sddt..."
                      className="input"
                      // required=''
                      // // value={searchTerm}
                      // // onChange={handleSearchChange}
                    />
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Địa chỉ:</span>
                    <input
                      type="text"
                      placeholder="Nhập sddt..."
                      className="longinput"
                      // required=''
                      // // value={searchTerm}
                      // // onChange={handleSearchChange}
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
                      placeholder="Nhập sddt..."
                      className="input"
                      // required=''
                      // // value={searchTerm}
                      // // onChange={handleSearchChange}
                    />{" "}
                    <span className="itemKey">Số điện thoại:</span>
                    <input
                      type="text"
                      placeholder="Nhập sddt..."
                      className="input"
                      // required=''
                      // // value={searchTerm}
                      // // onChange={handleSearchChange}
                    />{" "}
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Địa chỉ:</span>
                    <input
                      type="text"
                      placeholder="Nhập sddt..."
                      className="longinput"
                      // required=''
                      // // value={searchTerm}
                      // // onChange={handleSearchChange}
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
                  >
                    <MenuItem value={1}>Hàng hóa</MenuItem>
                    <MenuItem value={2}>Tài liệu</MenuItem>
                  </Select>
                </FormControl>
                <span className="itemKey">Cân nặng:</span>
                <input
                      type="text"
                      placeholder="Nhập sddt..."
                      className="input"
                      // required=''
                      // // value={searchTerm}
                      // // onChange={handleSearchChange}
                    />
                <span className="itemKey">Ghi chú:</span>
                <input
                      type="text"
                      placeholder="Nhập sddt..."
                      className="input"
                      // required=''
                      // // value={searchTerm}
                      // // onChange={handleSearchChange}
                    />
              </div>
            </div>
            <Button
              size="large"
              variant="contained"
              disableElevation
              sx={{ background: "#7451f8" }}
            >
              Xác nhận
            </Button>
          </div>
        </div>
      </div>
    </Box>
  );
}
