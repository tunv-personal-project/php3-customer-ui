import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import categories from '../../services/categories';
import ListCategories from '../../components/List/ListCategories';

function Categories(props) {
  const [cate, setCate] = useState();

  useEffect(() => {
    const fetchC = async () => {
      const response = await categories.getAll();

      if (response && response.data.is_success) {
        console.log('C', response.data.data.data);
        setCate(response.data.data.data);
      }
    };

    fetchC();
    return () => {};
  }, []);

  return (
    <>
      <Helmet>
        <title>Danh Mục</title>
      </Helmet>
      <ListCategories title='Danh mục sản phẩm' list={cate} />
    </>
  );
}

export default Categories;
