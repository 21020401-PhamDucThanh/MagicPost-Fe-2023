import "./datatable.scss";
import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import axios from "axios";

const Datatable = () => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'username',
      headerName: 'Tài khoản',
      width: 150,
      editable: true,
    },
    {
      field: 'name',
      headerName: 'Họ và tên',
      width: 150,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Tuổi',
      width: 110,
      editable: true,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 210,
      editable: true,
    },

    {
      field: 'role',
      headerName: 'Chức danh',
      width: 110,
      editable: true,
    },
    
  ];

  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token"); // Lấy token từ localStorage
      const response = await axios.get("http://localhost:8080/users/all", {
        headers: {
          Authorization: `Bearer ${token}`, // Sử dụng template literal để chèn token vào header Authorization
        },
      });
      console.log(response.data.data);

      setRows(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  let gridRows = Array.isArray(rows) ? rows.map((item, index) => ({ ...item, id: index })) : [];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Danh sách nhân viên

        <Link to="/service/New" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        rows={gridRows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 9,
            },
          },
        }}
        pageSizeOptions={[9]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  );
};

export default Datatable;
