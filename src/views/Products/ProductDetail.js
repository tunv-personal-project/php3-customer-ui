import React, { useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';
import { NavLink, useParams } from 'react-router-dom';
import addToCart from '../../helper/addToCart';
import products from '../../services/products';

function ProductDetail(props) {
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  const [ammount, setAmmount] = useState(1);

  useEffect(() => {
    //   effect
    const fetchData = async (id) => {
      const res = await products.getDetail(id);

      if (res && res.data.is_success) {
        setDetail({ ...res.data.data });
        console.log('Detail Product', res.data);
      }
    };

    fetchData(id);
    return () => {
      //   cleanup
    };
  }, []);

  const handleAmmount = (event) => {
    setAmmount(event.target.value);
  };

  const handleAddToCart = () => {
    const data = {
      id: detail.id,
      name: detail.name,
      image: detail.media.url,
      price: detail.price,
      ammount: ammount,
    };

    try {
      addToCart(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {detail && detail.media ? (
        <section>
          <div className='container px-5 py-24 mx-auto'>
            <div className='grid grid-cols-2 gap-16'>
              {/* image */}
              <div className='w-full'>
                <img
                  alt={detail.name}
                  src={`http://localhost:8000${detail.media.url}`}
                  className='w-full'
                />
              </div>

              {/* detail */}
              <div className='w-full'>
                <h2 className='text-xl font-semibold text-gray-800 uppercase dark:text-white md:text-3xl mb-3'>
                  {detail.name}
                </h2>
                <h3 className='text-3xl font-bold text-indigo-700 uppercase dark:text-white md:text-3xl mb-3'>
                  <NumberFormat
                    value={detail.price}
                    thousandSeparator={true}
                    decimalSeparator='.'
                    displayType={'text'}
                    suffix=' đ'
                  />
                </h3>
                <p className='text-gray-500 text-base tracking-widest title-font mb-1 mt-4 block'>
                  Mô Tả
                </p>
                <p className='text-xl'>{detail.description}</p>

                <p className='text-gray-500 text-base tracking-widest title-font mb-1 mt-4 block'>
                  Danh Mục
                </p>
                <div className='flex'>
                  <NavLink
                    to={`/categories/${detail.category.id}`}
                    className='px-4 py-2 bg-blue-200 text-blue-600 font-semibold rounded-lg'
                  >
                    {detail.category.name}
                  </NavLink>
                </div>

                <div className='grid grid-cols-2 gap-8'>
                  <div className='w-full flex flex-col'>
                    <label
                      htmlFor='ammount'
                      className='text-gray-500 text-base tracking-widest title-font mb-2 mt-4 block'
                    >
                      Số Lượng
                    </label>
                    <input
                      type='number'
                      min='1'
                      max='10'
                      className='px-4 py-2 border rounded-lg'
                      value={ammount}
                      onChange={handleAmmount}
                    ></input>
                  </div>
                  <div className='w-full flex flex-col justify-end h-auto'>
                    <button
                      className=' bg-indigo-500 text-white font-semibold hover:bg-indigo-600 py-2 rounded-lg'
                      onClick={handleAddToCart}
                    >
                      Thêm Vào Giỏ
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <h2>Loading ...</h2>
      )}
    </>
  );
}

export default ProductDetail;
