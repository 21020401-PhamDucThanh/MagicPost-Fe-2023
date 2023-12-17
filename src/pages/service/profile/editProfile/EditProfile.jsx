import * as React from 'react';
import './editProfile.scss'
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';

import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Sidebar from '../../sidebar/Sidebar';


export default function EitProfile() {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <div className="edit">
                <Sidebar />
                <div className="orderContainer">
                    <br />
                    <br />
                    <div className="top">
                        <div className="left">
                            <div className="item">
                                <div className="details">
                                    <h2 className="itemTitle">Thông tin cá nhân</h2>
                                    <div className="detailItem">
                                        <span className="itemKey">Họ và tên:</span>
                                        <TextField id="outlined-basic" label="Họ và tên" variant="outlined" sx={{ m: 2, marginRight: '64px' }} />
                                        <span className="itemKey">Số điện thoại:</span>
                                        <TextField id="outlined-basic" label="Số điện thoại" variant="outlined" />
                                    </div>
                                    <div className="detailItem" >
                                        <span className="itemKey">Email:</span>
                                        <TextField id="outlined-basic" label="Nhập email mới" variant="outlined" sx={{ m: 2, marginLeft: '44px' }} />
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
                                    <Button size="large" variant="contained" disableElevation sx={{ background: "#7451f8",marginTop:"24px" }}>
                                        Xác nhận
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="item">
                                <div className="details">
                                    <h2 className="itemTitle">Thay đổi mật khẩu</h2>
                                    <div className="detailItem">
                                        <span className="itemKey">Mật khẩu hiện tại:</span>
                                        <FormControl sx={{ m: 2, width: '25ch', marginLeft:"64px" }} variant="outlined">
                                            <InputLabel htmlFor="outlined-adornment-password">Mật khẩu hiện tại</InputLabel>
                                            <OutlinedInput
                                                id="outlined-adornment-password"
                                                type={showPassword ? 'text' : 'password'}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowPassword}
                                                            onMouseDown={handleMouseDownPassword}
                                                            edge="end"
                                                        >
                                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                            />
                                        </FormControl>
                                    </div>
                                    <div className="detailItem">
                                        <span className="itemKey">Mật khẩu mới:</span>
                                        <FormControl sx={{ m: 2, width: '25ch', marginLeft:"88px" }} variant="outlined">
                                            <InputLabel htmlFor="outlined-adornment-password">Mật khẩu mới</InputLabel>
                                            <OutlinedInput
                                                id="outlined-adornment-password"
                                                type={showPassword ? 'text' : 'password'}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowPassword}
                                                            onMouseDown={handleMouseDownPassword}
                                                            edge="end"
                                                        >
                                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                            />
                                        </FormControl>
                                    </div>
                                    <div className="detailItem">
                                        <span className="itemKey">Xác nhận mật khẩu mới:</span>
                                        <FormControl sx={{ m: 2, width: '25ch' }} variant="outlined">
                                            <InputLabel htmlFor="outlined-adornment-password">Xác nhận mật khẩu mới</InputLabel>
                                            <OutlinedInput
                                                id="outlined-adornment-password"
                                                type={showPassword ? 'text' : 'password'}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowPassword}
                                                            onMouseDown={handleMouseDownPassword}
                                                            edge="end"
                                                        >
                                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                            />
                                        </FormControl>
                                    </div>
                                    <Button size="large" variant="contained" disableElevation sx={{ background: "#7451f8" }}>
                                        Xác nhận
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </Box >
    );
}