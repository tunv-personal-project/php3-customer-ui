import React, { useState } from 'react';
import ProductItem from './ProductItem';

function List(props) {
  const { list, title } = props;

  const [current, setCurrent] = useState({});

  return (
    <section class='text-gray-600 body-font'>
      <div class='container px-5 py-24 mx-auto'>
        <h2 className='text-2xl font-semibold text-gray-800 uppercase dark:text-white md:text-3xl mb-3'>
          {title}
        </h2>
        <div class='flex flex-wrap -m-4'>
          {list &&
            list.map((item) => <ProductItem key={item.id} data={item} />)}
        </div>
      </div>
    </section>
  );
}

export default List;
