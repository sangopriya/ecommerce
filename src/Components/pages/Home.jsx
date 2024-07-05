import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCategories } from '../../store/actions/categoryAction';
import { categories as mockCategories } from '../pages/metadata';


export default function Home() {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories);
  console.log(categories)

  useEffect(() => {
    dispatch(setCategories(mockCategories));
  }, [dispatch]);

  return (
    <div className='flex flex-col gap-4 justify-center lg:justify-start px-5'>
      <div>Categories</div>
    <div className=' text-lg flex flex-col lg:flex-row  gap-6 '>
       { categories.map((categorydata,key)=>{
        return(<div key={key} className='flex flex-col border-4 border-solid border-gray lg:w-96  cursor-pointer '>
            {/* {console.log(categorydata)} */}
            <img className='h-80' src={categorydata.img}/>
            <Link to={`/category/${categorydata.id}`} className='flex items-center w-full justify-center py-2 bg-blue-500 text-white'>{categorydata.category}</Link>
            
        </div>)})}
    </div>
    </div>
  )
}
