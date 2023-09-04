
export default function Table({ products, removeFromCart }) {

    return (
        <>
            {/* Check if products exist */}
            {products.length > 0 ? (
                <>
                    <table className="min-w-full divide-y border-2 text-center border-[#eaedff]">
                        <thead className="border-2 border-[#eaedff]">
                            <tr>
                                <th scope="col" className="px-6 py-3 font-bold border-2 border-[#eaedff] text-xs text-black uppercase tracking-wider">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3 font-bold border-2 border-[#eaedff] text-xs text-black uppercase tracking-wider">
                                    Unit Price & Quantity
                                </th>
                                <th scope="col" className="px-6 py-3 font-bold border-2 border-[#eaedff] text-xs text-black uppercase tracking-wider">
                                    Total
                                </th>
                                <th scope="col" className="px-6 py-3 font-bold border-2 border-[#eaedff] text-xs text-black uppercase tracking-wider">
                                    Remove
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {/* Render each product */}
                            {products?.map((pd) => (
                                <tr key={pd.id}>
                                    <td className="border-2 border-[#eaedff]  px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{pd.title}</div>
                                    </td>
                                    <td className="border-2 border-[#eaedff]  px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">${pd.price} X {pd.quantity}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap border-2 border-[#eaedff] ">
                                        <div className="text-sm text-gray-900">${pd.amount}</div>
                                    </td>
                                    <td className="border-2 border-[#eaedff]  px-6 py-4 whitespace-nowrap">
                                        {/* Remove button */}
                                        <button onClick={() => removeFromCart(pd?.id)} className="text-red-600 hover:text-red-700">Remove</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            ) : (
                // Render message if no products exist
                <h1 className="text-center text-2xl my-5 font-semibold">You Have Not Added Any Products Yet</h1>
            )}
        </>


    )
}
