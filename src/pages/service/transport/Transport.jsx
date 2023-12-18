import * as React from 'react';
import './transport.scss'
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


export default function Transport() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <div className="transport">
                <Sidebar />
                <div className="transportContainer">
                    <br />
                    <br />
                    <div className="top">
                        <div className="left">
                            <div className="item">
                                <div className="details">
                                    <h2 className="itemTitle">Tạo vận chuyển</h2>
                                    <div className="detailItem">
                                        <span className="itemKey">ID đơn hàng:</span>
                                        <TextField id="outlined-basic" label="ID" variant="outlined" sx={{ m: 2 }} />
                                        <Button variant="outlined" sx={{color: "#7451f8", borderColor: "#7451f8"}}>Kiểm tra</Button>
                                    </div>
                                    <div className="detailItem">
                                        <span className="itemKey">Loại vận chuyển:</span>
                                        <FormControl sx={{ m: 1, minWidth: 250 }}>
                                            <InputLabel id="demo-simple-select-autowidth-label">Loại hàng</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-autowidth-label"
                                                id="demo-simple-select-autowidth"
                                                autoWidth
                                                label="Vận chuyển"
                                                sx={{ marginRight: '128px' }}
                                            >

                                                <MenuItem value={1}>Đến điểm giao dịch</MenuItem>
                                                <MenuItem value={2}>Đến điểm tập kết</MenuItem>
                                                <MenuItem value={3}>Giao hàng</MenuItem>
                                                <MenuItem value={4}>Hoàn trả hàng</MenuItem>

                                            </Select>
                                        </FormControl>
                                    </div>

                                    <div className="detailItem">
                                        <span className="itemKey">Địa chỉ:</span>
                                        <FormControl sx={{ m: 1, minWidth: 250 }}>
                                            <InputLabel id="demo-simple-select-autowidth-label">Loại hàng</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-autowidth-label"
                                                id="demo-simple-select-autowidth"
                                                autoWidth
                                                label="Vận chuyển"
                                                sx={{ marginRight: '128px', minWidth: 300  }}
                                            >

                                                <MenuItem value={1}>S</MenuItem>
                                                <MenuItem value={2}>Đ</MenuItem>
                                                <MenuItem value={3}>Gx</MenuItem>
                                                <MenuItem value={4}>H</MenuItem>

                                            </Select>
                                        </FormControl>
                                    </div>
                                    <Button size="large" variant="contained" disableElevation sx={{ background: "#7451f8", marginTop:"10%" }}>
                                        Xác nhận
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="item">
                                <div className="details">
                                    <h2 className="itemTitle">Thông tin đơn hàng </h2>
                                    <div className="detailItem">
                                        <span className="itemKey">Họ và tên người nhận:</span>
                                        <TextField disabled
                                            id="outlined-disabled"
                                            label="Disabled"
                                            sx={{ m: 2,width: '50%' }} />
                                    </div>
                                    <div className="detailItem">
                                        <span className="itemKey">Số điện thoại người nhận:</span>
                                        <TextField disabled
                                            id="outlined-disabled"
                                            label="Disabled"
                                            sx={{ m: 2, width: '50%' }} />
                                    </div>
                                    <div className="detailItem">
                                        <span className="itemKey">Địa chỉ người nhận:</span>
                                        <TextField disabled
                                            id="outlined-disabled"
                                            label="Disabled"
                                            sx={{ m: 2, width: '390px' }} />

                                    </div>
                                    <div className="detailItem">
                                        <span className="itemKey">Loại vận chuyển</span>
                                        <TextField disabled
                                            id="outlined-disabled"
                                            label="Disabled"
                                            sx={{ m: 2, width: '50%'}} />
                                    </div>
                                    <div className="detailItem">
                                        <span className="itemKey">Địa chỉ điểm</span>
                                        <TextField disabled
                                            id="outlined-disabled"
                                            label="Disabled"
                                            sx={{ m: 2,width: '75%' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </Box >
    );
}