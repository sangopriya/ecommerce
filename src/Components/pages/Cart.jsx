import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { updateQuantity, removeFromCart } from '../../store/actions/cartAction';
import { PLACE_ORDER } from '../../store/types';

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const { id } = useParams();
  const itemId = parseInt(id);
  const cartItem = cart.find(cartItem => cartItem.id === itemId);

  const handleAdd = (item) => {
    const newQuantity = item.quantity + 1;
    dispatch(updateQuantity(item.id, newQuantity));
  };

  const handleSubtract = (item) => {
    const newQuantity = item.quantity - 1;
    if (newQuantity > 0) {
      dispatch(updateQuantity(item.id, newQuantity));
    } else {
      dispatch(removeFromCart(item.id));
    }
  };

  const handlePlaceOrder = () => {
    dispatch({ type: PLACE_ORDER, payload: cart });
  };

  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className='md:flex w-full justify-between gap-4 px-5'>
      {cart && cart.length !== 0 && (
        <>
          <div className='w-full'>
            {cart.map((item, key) => {
              return (
                <div key={key} className='md:flex md:justify-between p-8 border border-solid border-black'>
                  <div className='md:flex'>
                    <div className='md:w-28 flex justify-center'>
                      <img src={item.img} alt={item.name} />
                    </div>
                    <div className='flex flex-col items-center justify-center px-2'>
                      <h1>{item.name}</h1>
                      <h1>Price: {item.price}</h1>
                    </div>
                  </div>
                  <div className='flex flex-row gap-2 items-center justify-center py-3'>
                    <button className='border-2 border-solid border-black px-5 py-2 h-10' onClick={() => handleAdd(item)}>+</button>
                    <span className='border-2 border-solid border-black px-5 py-2 items-center justify-center'>{item.quantity}</span>
                    <button className='border-2 border-solid border-black px-5 py-2 h-10' onClick={() => handleSubtract(item)}>-</button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className='md:w-[40%] flex flex-col gap-2'>
            <div className='border border-solid border-black p-5'>
              <h1 className='font-bold'>Summary</h1>
              {cart.map((item, key) => (
                <div key={key} className='flex justify-between'>
                  <h1>{item.name}</h1>
                  <h2>{item.quantity} * {item.price} = {item.quantity * item.price}</h2>
                </div>
              ))}
              <div className='flex justify-end'>
                <h1>Total = {totalAmount}</h1>
              </div>
            </div>
            <Link to='/order' onClick={handlePlaceOrder} className='bg-blue-400 text-white w-full py-5 justify-center flex'>Place Order</Link>
          </div>
        </>
      )}
      {cart.length === 0 && (
        <div className='w-full h-full flex gap-2 justify-center'>
          Nothing in cart <Link to='/' className='text-blue-500'>go to shopping</Link>
        </div>
      )}
    </div>
  );
}
