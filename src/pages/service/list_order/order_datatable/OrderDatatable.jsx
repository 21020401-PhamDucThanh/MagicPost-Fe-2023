import "./orderDatatable.scss";
import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import axios from "axios";

const Datatable = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "nameReceiver",
      headerName: "Người nhận",
      width: 150,
      editable: true,
    },
    {
      field: "destinationAddress",
      headerName: "Địa chỉ đến",
      width: 150,
      editable: true,
    },
    {
      field: "receiverPhoneNumber",
      headerName: "Số điện thoại",
      width: 110,
      editable: true,
    },
    {
      field: "type",
      headerName: "Loại hàng",
      width: 210,
      editable: true,
    },
    {
      field: "weight",
      headerName: "Cân nặng",
      width: 110,
      editable: true,
    },
    {
      field: "status",
      headerName: "Tình trạng đơn hàng",
      width: 170,
      editable: true,
    },
  ];

  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get("http://localhost:8080/transaction/all", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response.data.data);
      setRows(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const gridRows = Array.isArray(rows)
    ? rows.map((item, index) => ({ ...item, id: index }))
    : [];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Danh sách đơn hàng
        <Link to="/service/order" className="link">
          Tạo đơn hàng mới
        </Link>
      </div>
      <DataGrid
        rows={gridRows}
        columns={columns}
        pagination
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default Datatable;