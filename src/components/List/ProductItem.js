import React from 'react';
import { NavLink } from 'react-router-dom';
import NumberFormat from 'react-number-format';
import addToCart from '../../helper/addToCart';

function ProductItem(props) {
  const {
    name,
    image,
    price,
    categoryName,
    productId,
    categorySlug,
    slug,
  } = props;

  const handleAddToCart = () => {
    console.log(productId);
    const data = {
      id: productId,
      name: name,
      image: image ? image : 'https://dummyimage.com/420x260',
      price: price,
      ammount: 1,
    };

    try {
      addToCart(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div class='lg:w-1/4 md:w-1/2 p-4 w-full'>
        <div class='block relative h-48 rounded overflow-hidden'>
          <img
            alt={name}
            class='object-cover object-center w-full h-full block'
            src={
              image
                ? `http://localhost:8000${image}`
                : 'https://dummyimage.com/420x260'
            }
          />
        </div>
        <div class='mt-4'>
          <NavLink
            to={`/categories/${categorySlug}`}
            className='text-gray-500 text-xs tracking-widest title-font mb-1 block'
          >
            {categoryName}
          </NavLink>
          <NavLink
            to={`/products/${slug}`}
            className='text-gray-900 title-font text-lg font-medium hover:text-indigo-700 hover:underline'
          >
            {name}
          </NavLink>
          <p class='mt-1 font-bold'>
            <NumberFormat
              value={price}
              thousandSeparator={true}
              decimalSeparator='.'
              displayType={'text'}
              suffix=' đ'
            />
          </p>
          <button
            className='w-full border rounded-lg py-2 mt-2 font-semibold hover:bg-indigo-600 hover:text-white ease-in-out transform'
            onClick={handleAddToCart}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
