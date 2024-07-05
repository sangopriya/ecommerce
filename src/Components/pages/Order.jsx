import React from 'react';
import { useSelector } from 'react-redux';

export default function Order() {
  const orders = useSelector((state) => state.orders);
  console.log(orders)

  return (
    <section className='px-5'>
      <div>Orders</div>
      {orders.map((order, key) => {
        const totalAmount = order.items.reduce((total, item) => total + (item.price * item.quantity), 0);
        return (
          <div key={key} className='border border-solid border-gray mb-4'>
            <div className='flex justify-between p-2'>
              <h3>Order Id: {order.id}</h3>
              <h3>Total: {totalAmount}/-</h3>
            </div>
            <div className='p-2'>
              <h3>Items</h3>
              {order.items.map((item, itemKey) => (
                <div key={itemKey} className='flex justify-between my-2'>
                  <div className='flex'>
                    <img src={item.img} alt={item.name} className='w-20 h-20 mr-2' />
                    <div className='flex flex-col'>
                      <h4>{item.name}</h4>
                      <h4>{item.price}</h4>
                    </div>
                  </div>
                  <div>{item.quantity} * {item.price} = {item.quantity * item.price}/-</div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}
