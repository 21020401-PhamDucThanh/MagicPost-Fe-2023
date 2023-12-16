import "./analytics.scss";
import Widget from "../../../../components/widget/Widget";
import Featured from "../../../../components/featured/Featured";
import Table from "../../../../components/table/Table";
import Chart from "../../../../components/chart/Chart";
import Sidebar from "../sidebar/Sidebar";


const Analytics = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <br />
        <br />
        <br />

        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
