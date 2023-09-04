
import { ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'

import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext/CartProvider';
import { Link } from 'react-router-dom';
import Button from '../../../Button/Button';
import ButtonBlack from '../../../ButtonBlack/ButtonBlack';


export default function MyCart() {
    const { cartItems, removeFromCart } = useContext(CartContext)

    const deleItem = (id) => {
        removeFromCart(id)
    }

    return (
        <>
            {
                cartItems &&
                <li className="relative group">
                    <button className="flex items-center space-x-1 justify-center focus:outline-none">
                        <ShoppingBagIcon className="w-6 h-6 text-black" />
                        <span className='text-black'> {cartItems.length}</span>
                    </button>

                    {
                        cartItems?.map((pd, index) =>
                            <>
                                <div key={index} className="absolute right-[70px] mt-5 w-[350px] bg-white rounded-md transition-all duration-2000 opacity-0 group-hover:opacity-100  z-[1000]">
                                    <div className="overflow-hidden rounded bg-white  shadow-md shadow-slate-200">

                                        <div className="p-6 flex justify-between items-center border-b border-gray-500 ">
                                            <header className="flex gap-3  py-3">
                                                <div
                                                    to="#"
                                                    className="relative inline-flex h-[80px] w-[80px] items-center justify-center text-white"
                                                >
                                                    <img alt='product'
                                                        src={pd.thumbnail
                                                        }


                                                        className="max-w-full"
                                                    />
                                                </div>
                                                <div className='space-y-2'>
                                                    <p className="text-[13px] font-medium text-slate-700">
                                                        {pd.title}
                                                    </p>
                                                    <p className="text-sm text-slate-400"> {`${pd.quantity} x $${pd.price}`}</p>
                                                </div>
                                            </header>
                                            <div>
                                                <XMarkIcon onClick={() => deleItem(pd.id)} className="w-6 h-6 text-[#323232] cursor-pointer" />
                                            </div>

                                        </div>
                                        <div className='flex justify-between items-center p-5 font-medium '>
                                            <p>Subtotal: </p>
                                            {
                                                !pd.amount ? <p>${pd.price} </p> : <p>${pd.amount} </p>
                                            }
                                        </div>
                                        <div className='p-5 flex flex-col space-y-4 items-center'>
                                            <Link to='/MyCart'>
                                                <Button title='View Cart'  ></Button>
                                            </Link>


                                            <Link to='/'>

                                                <ButtonBlack title='Checkout'>Check Out</ButtonBlack>
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                            </>

                        )
                    }
                </li>
            }
        </>

    )
}