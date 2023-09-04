import "./table.css";
import data from '../../../Components/fakeData/data.json'
import { Link } from "react-router-dom";

const List = () => {

  return (
    <div className="table-container">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y border-2 text-center border-[#eaedff]">
          <thead className="border-2  border-[#eaedff]">
            <tr className="">
              <th
                scope="col"
                className="px-6 py-3 font-bold border-2 border-[#eaedff] text-xs text-black uppercase tracking-wider"
              >
                Image
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-bold border-2 border-[#eaedff] text-xs text-black uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-bold border-2 border-[#eaedff] text-xs text-black uppercase tracking-wider"
              >
                Unit Price
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-bold border-2 border-[#eaedff] text-xs text-black uppercase tracking-wider"
              >
                Category
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-bold border-2 border-[#eaedff] text-xs text-black uppercase tracking-wider"
              >
                Brand
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-bold border-2 border-[#eaedff] text-xs text-black uppercase tracking-wider"
              >
                Stock
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-bold border-2 border-[#eaedff] text-xs text-black uppercase tracking-wider"
              >
                Add Product
              </th>
            </tr>
          </thead>
          <tbody className=" divide-y">
            {data?.map((pd) => (
              <tr>
                <td>
                  <img
                    className="w-[80px] h-[80px] p-2"
                    src={pd.thumbnail}
                    alt=""
                  />
                </td>
                <td className="border-2 border-[#eaedff] px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{pd.title}</div>
                </td>
                <td className="border-2 border-[#eaedff] px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">${pd.price}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap border-2 border-[#eaedff]">
                  <div className="text-sm text-gray-900">{pd.category}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap border-2 border-[#eaedff]">
                  <div className="text-sm text-gray-900">{pd.brand}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap border-2 border-[#eaedff]">
                  <div className="text-sm text-gray-900">{pd.stock}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap border-2 border-[#eaedff]">
                  <div className="text-sm text-gray-900">
                    <Link to="/AddProduct">Add Product</Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  );
};

export default List;
