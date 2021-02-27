import React from 'react';

function ProductItem(props) {
  const { data } = props;
  return (
    <>
      <div class='lg:w-1/4 md:w-1/2 p-4 w-full'>
        <div class='block relative h-48 rounded overflow-hidden'>
          <img
            alt={data.name}
            class='object-cover object-center w-full h-full block'
            src={`http://localhost:8000${data.media.url}`}
          />
        </div>
        <div class='mt-4'>
          <h3 class='text-gray-500 text-xs tracking-widest title-font mb-1'>
            {data.category.name}
          </h3>
          <h2 class='text-gray-900 title-font text-lg font-medium'>
            {data.name}
          </h2>
          <p class='mt-1'>{data.price} vnd</p>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
