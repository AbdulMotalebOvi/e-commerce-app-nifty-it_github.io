
import useTitle from "../../../Components/Hooks/useTitle";
import Sidebar from "../../components/sidebar/Sidebar";
import List from "../../components/table/List";
import Widget from "../../components/widget/Widget";
import "./home.css";


const DashBoard = () => {
  useTitle('Dashboard')
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">

        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="AddProduct" />

        </div>

        <div className="listContainer">
          <div className="listTitle">Products</div>
          <List />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
