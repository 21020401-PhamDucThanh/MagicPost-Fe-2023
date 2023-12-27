import React, { useState } from "react";

import "./listOrder.scss"
import Datatable from "../components/datatable/Datatable"
import Sidebar from "../sidebar/Sidebar";

const ListOrder = () => {
  const [activeTab, setActiveTab] = useState("ListOrder");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="listOrder">
      <Sidebar />
      <div className="listContainer">
        <Datatable/>
      </div>
    </div>
  )
}

export default ListOrder