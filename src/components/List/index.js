import React from 'react';
import ProductItem from './ProductItem';

function List(props) {
  const { list } = props;

  return (
    <section class='text-gray-600 body-font'>
      <div class='container px-5 py-24 mx-auto'>
        <div class='flex flex-wrap -m-4'>
          {list &&
            list.map((item) => <ProductItem key={item.id} data={item} />)}
        </div>
      </div>
    </section>
  );
}

export default List;
