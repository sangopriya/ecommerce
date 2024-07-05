import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { setItems } from '../../store/actions/itemAction';
import { addToCart, updateQuantity, removeFromCart } from '../../store/actions/cartAction';
import { items as mockItems } from './metadata';

export default function Item() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const items = useSelector(state => state.items.find(cat => cat.categoryId === parseInt(id)));
  // console.log(items)
  const categoryName = useSelector(state => state.categories.find(name => name.id === parseInt(id)));

  useEffect(() => {
    dispatch(setItems(mockItems));
  }, [dispatch]);

  if (!items) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const cartItems = useSelector(state => state.cart);

  return (
    <div className='px-5 flex flex-col gap-4'>
      <div>{` ${categoryName.category}`}</div>
      <div className='text-lg grid grid-flow-row sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
      {items.items.map(item => {
          const cartItem = cartItems.find(cartItem => cartItem.id === item.id);
          return (
            <div key={item.id} className='flex flex-col border-4 border-solid border-gray lg:w-92 cursor-pointer'>
              <img className='h-80' src={item.img} alt={item.name} />
              <div className='flex flex-col p-2'>
                <div className='flex items-start w-full justify-start py-2 '>{item.name}</div>
                <div className='flex items-start w-full justify-start py-2 text-3xl'>₹ {item.price}</div>
              </div>
              {cartItem ? (
                <div className='flex justify-between font-bold border border-solid border-gray'>
                  <button className='border-2 border-solid border-gray p-5 text-lg' onClick={() => dispatch(updateQuantity(item.id, cartItem.quantity + 1))}>+</button>
                  <span className='border-2 border-solid border-gray flex items-center justify-center p-5'>{cartItem.quantity}</span>
                  <button className='border-2 border-solid border-gray p-5 text-lg' onClick={() => {
                    if (cartItem.quantity > 1) {
                      dispatch(updateQuantity(item.id, cartItem.quantity - 1));
                    } else {
                      dispatch(removeFromCart(item.id));
                    }
                  }}>-</button>
                </div>
              ) : (
                <Link to={`/item/${item.id}`} onClick={() => handleAddToCart(item)} className="bg-blue-500 text-white p-5 text-center">Add to Cart</Link>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}