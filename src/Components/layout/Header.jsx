import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Header() {
    const cart = useSelector(state => state.cart);
    // console.log(cart)
    const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);
    return (
        <div className='bg-gray-200 p-4 justify-between flex px-5'>
            <div>
                Logo
            </div>
            <div className="flex items-center justify-center cursor-pointer ">
            <Link to={'/cart'} className="relative scale-75">
                    <FaCartShopping className='h-8 w-8 text-gray-600 text-3xl' />
                     <span className="absolute -top-2 left-4 rounded-full bg-red-500 p-0.5 px-2 text-sm text-red-50">{cartItemCount}</span>
                </Link>
                <div className='px-2'>
                <IoSettingsSharp className='h-6 w-6 text-gray-600 text-3xl' />
                </div>
            </div>
        </div>
    )
}
