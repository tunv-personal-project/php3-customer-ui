import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import Hero from '../../components/Hero';
import List from '../../components/List';
import Cons from '../../components/Feature/Cons';
import productsService from '../../services/products';
import categoriesService from '../../services/categories';

function Homepage(props) {
  const [homepage, setHomepage] = useState(null);

  useEffect(() => {
    // effect
    const fetchData = async () => {
      const resProduct = await productsService.getAll();
      const resCategory = await categoriesService.getAll();

      if (resCategory && resProduct) {
        if (resProduct.data.is_success && resCategory.data.is_success) {
          setHomepage({
            products: resProduct.data.data.data,
            categories: resCategory.data.data.data,
          });
          console.log('Products', resProduct.data.data.data);
        }
      }
    };

    fetchData();

    return () => {
      // cleanup
    };
  }, []);

  const Loading = () => {
    return <h1>Loading ...</h1>;
  };

  return (
    <>
      <Helmet>
        <title>Trang Chủ</title>
      </Helmet>
      <Hero />
      <Cons />
      <List list={homepage.products} />
    </>
  );
}

export default Homepage;
