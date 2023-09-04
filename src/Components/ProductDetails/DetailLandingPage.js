import React, { useContext, useState } from 'react'
import { PlusIcon } from '@heroicons/react/24/solid'
import { MinusIcon } from '@heroicons/react/24/solid'
import { toast } from 'react-hot-toast';
import Button from '../Button/Button';
import { CartContext } from '../Shared/Context/CartContext/CartProvider';

export default function DetailLandingPage({ data }) {
    const { thumbnail, stock, title, brand, price, description } = data
    const { addToCart } = useContext(CartContext);

    const [quantity, setQuantity] = useState(1);
    const [amount, setAmount] = useState();
    const handleDecreaseQuantity = () => {
        if (quantity > 1) {
            const total = quantity - 1
            setQuantity(total);
            const totalAmount = amount - price
            setAmount(totalAmount)

        }
    };

    const handleIncreaseQuantity = () => {
        const total = quantity + 1

        setQuantity(total);
        const totalAmount = price * total
        setAmount(totalAmount)

    };

    const handleAddToCart = (e) => {
        e.preventDefault();

        const cartItem = {
            thumbnail,
            title,
            price,
            quantity,
            amount,
        };

        addToCart(cartItem)
        toast.success('Product Add Cart on Successfully')
        // Optional: Show a success message or redirect to the cart page
    };



    return (

        <section className="relative mx-auto max-w-screen-xl px-4 py-16">
            <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
                <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
                    <img
                        alt=""
                        src={thumbnail}
                        className="aspect-square w-full rounded-xl object-cover"
                        onError={(e) => {
                            e.currentTarget.src =
                                "https://media.istockphoto.com/id/155384933/photo/computer-showing-an-error-message.jpg?b=1&s=612x612&w=0&k=20&c=g6FZqU_w16SQBzI4ACgj5nwitfDleNS-xCorvBsxjXA="
                        }}
                    />
                </div>

                <div className="sticky top-0 mt-5">
                    <strong className="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-[18px] tracking-wide text-blue-600">
                        Stock: {stock}
                    </strong>

                    <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between">
                        <div className="space-y-2">
                            <h1 className="text-xl font-bold sm:text-2xl">{title}</h1>
                            <h4 className="text-[16px] font-medium">{brand}</h4>

                        </div>


                        <p className="text-lg font-bold">
                            ${amount ? amount : price}
                        </p>
                    </div>
                    <div className="mt-4">
                        <div className="prose max-w-none">
                            <p>{description}</p>
                        </div>
                    </div>

                    <form onSubmit={handleAddToCart} className="mt-8">
                        <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div className="flex rounded border-gray-200">
                                <button
                                    type="button"
                                    className="px-3 py-2 rounded-l bg-gray-200 hover:bg-gray-300 focus:outline-none"
                                    onClick={handleDecreaseQuantity}
                                >
                                    <MinusIcon className="w-4 h-4" />
                                </button>
                                <input
                                    type="number"
                                    id="quantity"
                                    min="1"
                                    value={quantity}
                                    className="w-12 rounded border-gray-200 py-3 text-center text-xs [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                                />
                                <button
                                    type="button"
                                    className="px-3 py-2 rounded-r bg-gray-200 hover:bg-gray-300 focus:outline-none"
                                    onClick={() => handleIncreaseQuantity()}
                                >
                                    <PlusIcon className="w-4 h-4" />
                                </button>
                            </div>

                            <Button
                                type="submit"
                                className="block rounded bg-green-600 px-5 py-3 text-xs font-medium text-white hover:bg-green-500"
                                title="Add To Cart"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </section>

    )
}
