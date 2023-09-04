
import { HomeIcon, UserCircleIcon, PlusCircleIcon } from '@heroicons/react/24/solid';
import { Link } from "react-router-dom";
import './style.css';

const Sidebar = () => {

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Home</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <HomeIcon className="h-6 w-6 text-blue-500" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/addUser" style={{ textDecoration: "none" }}>
            <li>
              <UserCircleIcon className="h-6 w-6 text-blue-500" />
              <span>Users</span>
            </li>
          </Link>

          <Link to='/AddProduct'>
            <li>
              <PlusCircleIcon className="h-6 w-6 text-blue-500" />
              <span>Add Products</span>
            </li>
          </Link>

        </ul>
      </div>

    </div>
  );
};

export default Sidebar;
