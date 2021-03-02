import React, { useState } from 'react';
import NumberFormat from 'react-number-format';
import total from '../../helper/total';
import order from '../../services/order';

function Items(props) {
  const { userData } = props;
  const [cart, setCart] = useState(() =>
    JSON.parse(localStorage.getItem('cart'))
  );

  const parseCart = (cart) => {
    const products = [];

    cart.map((item) => {
      const data = {
        id: item.id,
        quantity: item.ammount,
        unit_price: item.price,
      };

      products.push(data);
    });
    console.log('Product to Order', products);
    return products;
  };

  const [user, setUser] = useState({
    user_id: userData.id,
    name: userData.name,
    email: userData.email,
    address: null,
    phone: null,
    products: parseCart(cart),
    total: total(cart),
    quantity: cart.length,
  });

  const errors = {
    name: {
      required: true,
    },
    email: {
      required: true,
    },
    address: {
      required: true,
    },
    phone: {
      required: true,
    },
  };

  const checkErrorField = (key, value) => {
    if (errors[key].required) {
    }
  };

  const updateField = (event) => {
    const key = event.target.name;
    // Check Errors
    setUser({ ...user, [key]: event.target.value });
  };

  const handleOrder = async () => {
    try {
      const response = await order.createOrder(user);

      if (response && response.data.is_success) {
        window.location.href = '/';
        localStorage.removeItem('cart');
        alert('Tạo đơn hàng thành công, vui lòng kiểm tra mail của bạn');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='container mx-auto py-24'>
      <div className='grid grid-cols-2 gap-8'>
        {/* Form */}
        <div className='w-full'>
          <div className='w-full border rounded-lg p-6'>
            <div className='flex flex-col'>
              <div className='mb-2'>
                <label htmlFor='name' className='leading-7 text-sm'>
                  Họ Và Tên
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  className='w-full bg-gray-100 bg-opacity-50 focus:bg-opacity-100 rounded border focus:border-white text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                  value={user.name}
                  onChange={updateField}
                />
              </div>
              <div className='mb-2'>
                <label htmlFor='email' className='leading-7 text-sm'>
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={user.email}
                  className='w-full bg-gray-100 bg-opacity-50 focus:bg-opacity-100 rounded border focus:border-white text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                  onChange={updateField}
                />
              </div>
              <div className='mb-2'>
                <label htmlFor='address' className='leading-7 text-sm'>
                  Địa Chỉ
                </label>
                <input
                  type='text'
                  id='address'
                  name='address'
                  className='w-full bg-gray-100 bg-opacity-50 focus:bg-opacity-100 rounded border focus:border-white text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                  onChange={updateField}
                />
              </div>
              <div className='mb-2'>
                <label htmlFor='phone' className='leading-7 text-sm'>
                  Số Điện Thoại
                </label>
                <input
                  type='text'
                  id='phone'
                  name='phone'
                  className='w-full bg-gray-100 bg-opacity-50 focus:bg-opacity-100 rounded border focus:border-white text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                  onChange={updateField}
                />
              </div>
              <div>
                <button
                  className='w-full py-2 font-semibold text-white bg-indigo-500 hover:bg-indigo-600 mt-4 rounded-lg'
                  onClick={handleOrder}
                >
                  Đặt Hàng
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Cart */}
        <div className='w-full'>
          <div className='w-full'>
            <div className='w-full mt-4'>
              <h2 className='text-gray-500 text-base tracking-widest title-font mb-1 mt-4 block'>
                Đơn hàng của bạn
              </h2>
              <ul>
                {cart &&
                  cart.map((item) => (
                    <li key={item.id} className='mb-2'>
                      <div className='flex items-center justify-between'>
                        <img
                          alt={item.name}
                          src={`http://localhost:8000${item.image}`}
                          className='w-10 h-10 mr-2'
                        />
                        <p className='text-gray-900 text-base tracking-widest title-font mb-1 mt-4 block'>
                          {item.name}
                        </p>
                        <p className='text-gray-900 text-base tracking-widest title-font mb-1 mt-4 block'>
                          {item.ammount}
                        </p>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>

            <div className='flex justify-between items-center mt-8'>
              <h2 className='text-2xl text-gray-800'>Tổng Cộng</h2>
              <span className='text-4xl font-bold text-indigo-700'>
                <NumberFormat
                  value={total(cart)}
                  thousandSeparator={true}
                  decimalSeparator='.'
                  displayType={'text'}
                  suffix=' đ'
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Items;
