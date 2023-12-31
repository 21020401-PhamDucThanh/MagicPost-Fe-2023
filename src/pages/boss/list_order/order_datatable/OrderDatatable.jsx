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
    {
      field: "location",
      headerName: "Vị trí đơn hàng",
      width: 170,
      editable: true,
      valueGetter: (params) => {
        if (params.row && params.row.location) {
          const lastIndex = params.row.location.length - 1;
          // Xác định thuộc tính cụ thể trong object, ví dụ: params.row.location[lastIndex].propertyName
          const propertyValue = lastIndex >= 0 ? params.row.location[lastIndex].location : "Không có vị trí";
          return propertyValue;
        } else {
          return "Dữ liệu không hợp lệ";
        }
      },
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