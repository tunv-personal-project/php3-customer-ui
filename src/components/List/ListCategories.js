import React from 'react';
import ProductDescItem from './ProductDescItem';
import _ from 'lodash';

function ListCategories(props) {
  const { title, list } = props;
  return (
    <>
      <section class='text-gray-600 body-font'>
        <div class='container px-5 py-24 mx-auto'>
          <h2 className='text-2xl font-semibold text-gray-800 uppercase dark:text-white md:text-3xl mb-3'>
            {title}
          </h2>
          <div class='flex flex-wrap -m-4'>
            {list &&
              _.chunk(list, 3)[0].map((item) => (
                <ProductDescItem key={item.id} data={item} />
              ))}
            {console.log('Chunk List', _.chunk(list, 2))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ListCategories;
