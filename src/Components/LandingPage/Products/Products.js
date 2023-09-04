import React from 'react'
import jsonData from '../../fakeData/data.json'
import ButtonBlack from '../../ButtonBlack/ButtonBlack';
import { Link } from 'react-router-dom';
import Button from '../../Button/Button';

export default function Products() {
    const itemsPerPage = 8;

    // Calculate the start and end indexes based on the current page
    const startIndex = 0; // Assuming the initial page shows the first 8 items
    const endIndex = startIndex + itemsPerPage;

    const visibleData = jsonData.slice(startIndex, endIndex)
    return (
        <><div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Products</h2>
            <p className="mt-4 text-gray-300">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
                aliquam doloribus nesciunt eos fugiat. Vitae aperiam fugit consequuntur
                saepe laborum.
            </p>
        </div>
            <div className="max-w-screen-xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {/* Visible data loop */}
                    {visibleData?.map((pd) => (
                        <Link
                            key={pd.id}
                            to={`/Details/${pd?.id}`}
                            className="block space-y-3 rounded-lg p-4 ml-5 bg-[#FFFDFE]"
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
            </div>
            <div className="text-center my-10">
                <Link to="/AllProducts">
                    <Button title="show more" />
                </Link>
            </div>

        </>
    )
}
