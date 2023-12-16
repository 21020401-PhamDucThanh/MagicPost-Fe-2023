import React, { useState } from "react";

import "./users.scss"
import Chart from "../../../../components/chart/Chart";
import List from "../../../../components/table/Table";
import Datatable from "../../../../components/datatable/Datatable"
import Sidebar from "../../service/sidebar/Sidebar";

const Users = () => {
  const [activeTab, setActiveTab] = useState("users");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="users">
      <Sidebar />
      <div className="listContainer">
        <br />
        <br />
        <Datatable/>
      </div>
    </div>
  )
}

export default Users