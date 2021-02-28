import React, { useState } from 'react';
import ProductItem from './ProductItem';

function List(props) {
  const { list, title, categoryName, categoryId } = props;

  const [current, setCurrent] = useState({});

  return (
    <section class='text-gray-600 body-font'>
      <div class='container px-5 py-24 mx-auto'>
        <h2 className='text-2xl font-semibold text-gray-800 uppercase dark:text-white md:text-3xl mb-3'>
          {title}
        </h2>
        <div class='flex flex-wrap -m-4'>
          {list &&
            list.map((item) => (
              <ProductItem
                key={item.id}
                name={item.name}
                image={item.media.url}
                price={item.price}
                productId={item.id}
                categoryName={item.category ? item.category.name : categoryName}
                categoryId={item.category ? item.category.id : categoryId}
              />
            ))}
        </div>
      </div>
    </section>
  );
}

export default List;
