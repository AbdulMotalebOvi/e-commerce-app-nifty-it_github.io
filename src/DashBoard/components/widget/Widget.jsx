import "./widget.css";
import { UserCircleIcon, CurrencyBangladeshiIcon } from '@heroicons/react/24/solid';

const Widget = ({ type }) => {
  let data;

  // temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: () => (
          <UserCircleIcon
            className="h-6 w-6 text-blue-500"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: () => (
          <CurrencyBangladeshiIcon
            className="h-6 w-6 text-blue-500"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "addProducts":
      data = {
        title: "Add Products",
        isMoney: true,
        link: "AddProducts",
        icon: () => (
          <CurrencyBangladeshiIcon
            className="h-6 w-6 text-blue-500"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }


  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data?.title}</span>

        <span className="link">{data?.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">

          {diff}%
        </div>

      </div>
    </div>
  );
};

export default Widget;
