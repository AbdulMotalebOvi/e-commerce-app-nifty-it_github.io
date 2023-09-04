import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./dataTable.css";
import { userColumns, userRows } from "./datatablesource";

const DataTable = () => {
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    return (
        <div className=" datatable ">
            <div className="datatableTitle max-w-screen-xl mx-auto flex flex-wrap justify-between items-center">
                <Link to='/dashboard' className="mb-2 sm:mb-0">Dashboard</Link>
                <Link to="/Register" className="link">
                    Add New
                </Link>
            </div>
            <table className="max-w-screen-xl mx-auto">
                <thead>
                    <tr>
                        {userColumns.map((column) => (
                            <th key={column.field} className="hidden sm:table-cell">{column.headerName}</th>
                        ))}
                        <th className="hidden sm:table-cell">Action</th>
                    </tr>
                </thead>
                <tbody className="w-full">
                    {data.map((row) => (
                        <tr className="border" key={row.id}>
                            {userColumns.map((column) => (
                                <td className="p-5 border" key={column.field}>{row[column.field]}</td>
                            ))}
                            <td className="p-4 border">
                                <div className="cellAction">
                                    <div
                                        className="deleteButton"
                                        onClick={() => handleDelete(row.id)}
                                    >
                                        Delete
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
};

export default DataTable;
