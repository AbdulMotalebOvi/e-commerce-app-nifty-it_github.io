import React, { useEffect, useState } from 'react';
import jsonData from '../../fakeData/data.json'
import { Link } from 'react-router-dom';
import ButtonBlack from '../../ButtonBlack/ButtonBlack';
import CommonSection from '../../CommonSection/CommonSection';
import useTitle from '../../Hooks/useTitle';

const AllProducts = () => {
    useTitle('All Products')
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    const header = 'All Products';
    const title = 'All Products';
    const linkUp = 'AllProducts'
    const sectionMarkup = CommonSection(header, title, linkUp);
    useEffect(() => {
        setData(jsonData)
    }, []);

    const handleClick = (page) => {
        setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const visibleData = data.slice(startIndex, endIndex);

    const totalPages = Math.ceil(data.length / itemsPerPage);

    return (
        <section>
            {sectionMarkup}
            <div className="max-w-screen-xl mx-auto my-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {/* Visible data loop */}
                    {visibleData?.map((pd) => (
                        <Link
                            to={`/Details/${pd?.id}`}
                            className="block space-y-3 rounded-lg p-4 ml-5 bg-[#FFFDFE]"
                            key={pd.id}
                        >
                            <img
                                alt="Home"
                                src={pd.thumbnail}
                                className="h-56 w-full rounded-md object-cover"
                            />
                            <div className="mt-2 text-center space-y-5">
                                <h3 className="text-[#3B3849] font-semibold text-2xl line-clamp-1">
                                    {pd.title}{" "}
                                </h3>
                                <p className="text-[#8D8D8D] text-[14px] line-clamp-2">
                                    {pd.description}
                                </p>
                                <h4 className="font-semibold text-[18px] text-[#0E4B80]">
                                    {pd.price}.00 USD
                                </h4>
                            </div>
                            <div className="text-center my-4">
                                <Link to={`/Details/${pd?.id}`}>
                                    <ButtonBlack title="Order Now" />
                                </Link>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="flex justify-center mt-5">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            className="inline-flex ml-5 h-10 items-center justify-center shadow border gap-4 rounded stroke-slate-700 px-4 text-sm font-medium text-slate-700 transition duration-300 hover:bg-emerald-50 hover:stroke-emerald-800 hover:text-emerald-800 focus:bg-emerald-300 focus:stroke-emerald-800 focus:text-emerald-800 focus-visible:outline-none"
                            key={index}
                            onClick={() => handleClick(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default AllProducts;
