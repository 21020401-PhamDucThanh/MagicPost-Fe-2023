import "./orderDatatable.scss";
import React, { useState } from "react";

import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../../../orderDatatablesource";
import { Link } from "react-router-dom";

const OrderDatatable = () => {
  const [activeTab, setActiveTab] = useState("users");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="orderDatatable">
      <div className="orderDatatableTitle">
        Add New User
        <a
          className={activeTab === "create" ? "active" : ""}
          onClick={() => handleTabClick("create")}
          href="#create"
          style={{ textDecoration: "none" }}
        >
          <span className="link">Trang chủ</span>
        </a>
        {/* <Link to="/users/new" className="link">
          Add New
        </Link> */}
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default OrderDatatable;
