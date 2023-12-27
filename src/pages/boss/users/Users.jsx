import React, { useState } from "react";

import "./users.scss"
import Chart from "../components/chart/Chart";
import List from "../components/table/Table";
import Datatable from "./datatable/Datatable"
import Sidebar from "../sidebar/Sidebar";

const Users = () => {
  const [activeTab, setActiveTab] = useState("users");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="users">
      <Sidebar />
      <div className="listContainer">
        <Datatable/>
      </div>
    </div>
  )
}

export default Users