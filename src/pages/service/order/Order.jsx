import * as React from 'react';
import './order.scss'
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Sidebar from '../sidebar/Sidebar';
import { green } from '@mui/material/colors';


export default function InputAdornments() {

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
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
                    <TextField id="outlined-basic" label="Họ và tên" variant="outlined" sx={{ m: 2, marginRight: '64px' }} />
                    <span className="itemKey">Số điện thoại:</span>
                    <TextField id="outlined-basic" label="Số điện thoại" variant="outlined" />
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Địa chỉ:</span>
                    <TextField
                      id="outlined-basic"
                      label="Địa chỉ"
                      variant="outlined"
                      sx={{ width: '477px', marginLeft: '35px' }}
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
                    <TextField id="outlined-basic" label="Họ và tên" variant="outlined" sx={{ m: 2, marginRight: '64px' }} />
                    <span className="itemKey">Số điện thoại:</span>
                    <TextField id="outlined-basic" label="Số điện thoại" variant="outlined" />
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Địa chỉ:</span>
                    <TextField
                      id="outlined-basic"
                      label="Địa chỉ"
                      variant="outlined"
                      sx={{ width: '477px', marginLeft: '35px' }}
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
                  <InputLabel id="demo-simple-select-autowidth-label">Loại hàng</InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    autoWidth
                    label="Loại hàng"
                    sx={{ marginRight: '128px' }}
                  >

                    <MenuItem value={1}>Hàng hóa</MenuItem>
                    <MenuItem value={2}>Tài liệu</MenuItem>
                  </Select>
                </FormControl>
                <span className="itemKey">Cân nặng:</span>
                <TextField
                  id="outlined-start-adornment"
                  sx={{ m: 2, width: '100px',marginRight: '128px'}}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                  }}
                />
                <span className="itemKey">Ghi chú:</span>
                <TextField id="outlined-basic" variant="outlined" sx={{width: '400px'}} />
              </div>

            </div>
            <Button size="large" variant="contained" disableElevation sx={{ background: "#7451f8" }}>
              Xác nhận
            </Button>

          </div>
        </div>
      </div>



    </Box >
  );
}