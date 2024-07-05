import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { addToCart, updateQuantity, removeFromCart } from '../../store/actions/cartAction';

export default function ItemOverview() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const itemId = parseInt(id);
  const item = useSelector(state => state.items.flatMap(category => category.items).find(item => item.id === itemId));
  const itemdata = useSelector(state => state.items);
  const categoryId = useSelector(state=>state.categories)
  const items = itemdata.find(category => category.items.some(item => item.id === itemId));
  const category = categoryId.find(category =>
     {
    if (category.id===items.categoryId)
    {
      return category.category
    }
    }
  );
  const cartItem = useSelector(state => state.cart.find(cartItem => cartItem.id === itemId));
  const [quantity, setQuantity] = useState(cartItem ? cartItem.quantity : 0);

 
  

  console.log(category.id)
  if (!item) {
    return <div>Item not found</div>;
  }

  const handleAdd = () => {
    if(quantity<=item.quantity){
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    dispatch(updateQuantity(item.id, newQuantity));
  };
}

  const handleSubtract = () => {    
     if (quantity > 0) {       
      const newQuantity = quantity - 1;      
       setQuantity(newQuantity);       
       if (newQuantity > 0) {         
        dispatch(updateQuantity(item.id, newQuantity));       
      } else { dispatch(removeFromCart(item.id)); } } 
    };
  
  

  return (
    <div className='px-5'>
      <div><Link to={`/category/${category.id}`}>{category.category}</Link> / {item.name}</div>
      <div className='flex flex-col md:flex-row gap-4 w-full py-5'>
        {/* <div className='md:w-[50%] h-32'> */}
        <img className='w-[40%]' src={item.img} alt={item.name} />
        {/* </div> */}
        <div className='flex flex-col md:w-[50%] gap-2'>
          <h1 className='font-bold'>{item.name}</h1>
          <p>{item.description}</p>
          <h3 className='font-bold text-3xl'>₹ {item.price}</h3>
          <div className='flex flex-row gap-2'>
            <button className='border-2 border-solid border-black px-2' onClick={parseInt(item.quantity) > quantity ? handleAdd : null}>+</button>
            <span className='border-2 border-solid border-black flex items-center justify-center px-4 py-2'>{quantity}</span>
            <button className='border-2 border-solid border-black px-2' onClick={handleSubtract}>-</button>
          </div>
          {parseInt(item.quantity) <= quantity && <span className='text-red-600'>Stock Sold</span>}
        </div>
      </div>
    </div>
  );
}
