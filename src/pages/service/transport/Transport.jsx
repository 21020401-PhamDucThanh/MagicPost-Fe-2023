import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './transport.scss';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AlertTitle from '@mui/material/AlertTitle';
import Alert from '@mui/material/Alert';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Sidebar from '../sidebar/Sidebar';

export default function Transport() {
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState({});
    const [orderId, setOrderId] = useState('');
    const [nameReceiver, setReceiverName] = useState('');
    const [receiverPhoneNumber, setReceiverPhoneNumber] = useState('');
    const [destinationAddress, setDestinationAddress] = useState('');
    const [status, setStatus] = useState('');
    const [location, setLocation] = useState({});
    const [address, setAddress] = useState({});
    const [name, setName] = useState({});



    const handleOptionChange = (event, optionName) => {
        const value = event.target.value;
        setSelectedOptions((prevOptions) => ({
            ...prevOptions,
            [optionName]: value,
        }));
    };

    const handleConfirm = () => {
        const token = localStorage.getItem("token");
        const headers = {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        };
        const allOptionsSelected = Object.values(selectedOptions).every(
            (value) => value !== ''
        );

        if (allOptionsSelected) {
            const newLocationItem = {
                location: name,
                address: address,
                companyId: "657b112c41e1190ecdf1abda",
                time: new Date().toString()
            };

            const updatedLocationArray = [...location, newLocationItem];

            setLocation(updatedLocationArray);

            const data = {
                location: updatedLocationArray,  // Make sure it matches the API structure
                status: status,
            };

            axios
                .post(`http://localhost:8080/transaction/update/${orderId}`, data, { headers })
                .then((response) => {
                    // Handle success
                    console.log(data);
                    setShowSuccessAlert(true); // Show the success alert

                })
                .catch((error) => {
                    // Handle error
                    console.error(error);
                });
        }
    };


    const handleOrderIdChange = (event) => {
        setOrderId(event.target.value);
        console.log(orderId);

    };

    useEffect(() => {
        const token = localStorage.getItem("token");
        console.log(orderId);

        axios
            .get(`http://localhost:8080/transaction/${orderId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                const order = response.data.data;
                setReceiverName(order.receiverName);
                setReceiverPhoneNumber(order.receiverPhoneNumber);
                setDestinationAddress(order.destinationAddress);
                setStatus(order.status);
                setLocation(order.location);
                console.log(order);

            })
            .catch((error) => {
                console.error(error);
                // Xử lý lỗi
            });
    }, []);

    const handleCheckOrder = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.get(`http://localhost:8080/transaction/${orderId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const order = response.data.data;
            setReceiverName(order.nameReceiver);
            setReceiverPhoneNumber(order.receiverPhoneNumber);
            setDestinationAddress(order.destinationAddress);
            setStatus(order.status);
            setLocation(order.location);
        } catch (error) {
            console.error(error);
            // Xử lý lỗi khi gọi API
        }
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
                                        <TextField id="outlined-basic" label="ID" variant="outlined" sx={{ m: 2 }} value={orderId} onChange={handleOrderIdChange} />
                                        <Button
                                            variant="outlined"
                                            sx={{ color: '#7451f8', borderColor: '#7451f8' }}
                                            onClick={handleCheckOrder}
                                        >
                                            Kiểm tra
                                        </Button>
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
                                                value={status}
                                                onChange={(event) => setStatus(event.target.value)}
                                            >
                                                <MenuItem value={'Giao hàng'}>Giao hàng</MenuItem>
                                                <MenuItem value={'Hoàn trả hàng'}>Hoàn trả hàng</MenuItem>
                                                <MenuItem value={'Nhận hàng'}>Nhận hàng</MenuItem>

                                            </Select>
                                        </FormControl>
                                    </div>
                                    <div className="detailItem">
                                        <span className="itemKey">Vị trí đơn hàng:</span>
                                        <FormControl sx={{ m: 1, minWidth: 250 }}>
                                            <InputLabel id="demo-simple-select-autowidth-label">Loại hàng</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-autowidth-label"
                                                id="demo-simple-select-autowidth"
                                                autoWidth
                                                label="Vận chuyển"
                                                sx={{ marginRight: '128px' }}
                                                value={name}
                                                onChange={(event) => setName(event.target.value)}
                                            >
                                                <MenuItem value={'Điểm giao dịch'}>Điểm giao dịch</MenuItem>
                                                <MenuItem value={'Điểm tập kết'}>Điểm tập kết</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>


                                    <div className="detailItem">
                                        <span className="itemKey">Địa chỉ:</span>
                                        <FormControl sx={{ m: 1, minWidth: 250 }}>
                                            <InputLabel id="demo-simple-select-autowidth-label">Địa điểm</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-autowidth-label"
                                                id="demo-simple-select-autowidth"
                                                autoWidth
                                                label="Vận chuyển"
                                                sx={{ marginRight: '128px', minWidth: 300 }}
                                                value={address}
                                                onChange={(event) => setAddress(event.target.value)}
                                            >
                                                <MenuItem value={'Hoàn Kiếm, Hà Nội'}>Hoàn Kiếm, Hà Nội</MenuItem>
                                                <MenuItem value={'Cầu Giấy, Hà Nội'}>Cầu Giấy, Hà Nội</MenuItem>
                                                <MenuItem value={'Đống Đa, Hà Nội'}>Đống Đa, Hà Nội</MenuItem>
                                                <MenuItem value={'Kim Bảng, Hà Nam'}>Kim Bảng, Hà Nam</MenuItem>
                                                <MenuItem value={'Nho Quan, Ninh Bình'}>Nho Quan, Ninh Bìnhi</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                    <Button size="large" variant="contained" disableElevation sx={{ background: "#7451f8", marginTop: "10%" }} onClick={handleConfirm}>
                                        Xác nhận
                                    </Button>
                                    <Alert
                                        severity="success"
                                        sx={{ marginTop: '16px', display: showSuccessAlert ? 'block' : 'none' }}
                                    >
                                        <AlertTitle>Thành công!</AlertTitle>
                                         Vui lòng— <strong>Hãy kiểm tra trạng thái</strong>
                                    </Alert>

                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="item">
                                <div className="details">
                                    <h2 className="itemTitle">Thông tin đơn hàng</h2>
                                    <div className="detailItem">
                                        <span className="itemKey">Họ và tên người nhận:</span>
                                        <TextField
                                            disabled
                                            id="outlined-disabled"
                                            sx={{ m: 2, width: '50%' }}
                                            value={nameReceiver}
                                        />
                                    </div>
                                    <div className="detailItem">
                                        <span className="itemKey">Số điện thoại người nhận:</span>
                                        <TextField
                                            disabled
                                            id="outlined-disabled"
                                            sx={{ m: 2, width: '50%' }}
                                            value={receiverPhoneNumber}
                                        />
                                    </div>
                                    <div className="detailItem">
                                        <span className="itemKey">Địa chỉ người nhận:</span>
                                        <TextField
                                            disabled
                                            id="outlined-disabled"
                                            sx={{ m: 2, width: '390px' }}
                                            value={destinationAddress}
                                        />
                                    </div>
                                    <div className="detailItem">
                                        <span className="itemKey">Status</span>
                                        <TextField
                                            disabled
                                            id="outlined-disabled"
                                            sx={{ m: 2, width: '50%' }}
                                            value={status}
                                        />
                                    </div>
                                    <div className="detailItem">
                                        <span className="itemKey">Địa chỉ điểm</span>
                                        {location && location[0] ? (
                                            <TextField
                                                disabled
                                                id="outlineddisabled"
                                                sx={{ m: 2, width: '75%' }}
                                                value={location[location.length - 1].address}
                                            />
                                        ) : (
                                            <TextField
                                                disabled
                                                id="outlineddisabled"
                                                sx={{ m: 2, width: '75%' }}
                                            //   value=""
                                            />
                                        )}
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