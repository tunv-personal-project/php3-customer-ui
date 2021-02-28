import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import categories from '../../services/categories';

function CategoryDetail(props) {
  const { id } = useParams();
  const [category, setCategory] = useState({});

  useEffect(() => {
    // effect
    const fetchCategory = async (id) => {
      const res = await categories.getDetail(id);
      if (res && res.data) {
        setCategory(res.data.data);
      }
      console.log('Detail Category', res.data);
    };

    fetchCategory(id);

    return () => {
      // cleanup
    };
  }, []);

  return (
    <>
      {category ? (
        <div className='container px-5 py-12 mx-auto'>
          <h2 className='text-2xl font-semibold text-gray-800 uppercase dark:text-white md:text-3xl mb-3'>
            {category.name}
          </h2>
          <p>{category.description}</p>

          <div className='w-full grid grid-cols-3 gap-4 mt-8'>
            {/* Filter */}
            <div className='w-full'>
              <p>Filter</p>
            </div>
            {/* Products */}
            <div className='col-span-2'>
              <p>Lorem</p>
            </div>
          </div>
        </div>
      ) : (
        <h2>Loading ... </h2>
      )}
    </>
  );
}

export default CategoryDetail;
