import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import products from '../../services/products';
import List from '../../components/List';

function Products(props) {
  const [pro, setPro] = useState([]);

  useEffect(() => {
    const fetchP = async () => {
      const response = await products.getAll();

      if (response && response.data.is_success) {
        console.log('Products', response.data);
        setPro(response.data.data.data);
      }
    };

    fetchP();
    return () => {};
  }, []);

  return (
    <>
      <Helmet>
        <title>Sản Phẩm</title>
      </Helmet>

      <div className=''>
        <List list={pro} title='Tất cả sản phẩm' />
      </div>
    </>
  );
}

export default Products;
