import React, { Suspense, useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import Hero from '../../components/Hero';
import List from '../../components/List';
import NewsLetter from '../../components/NewsLetter';
import Cons from '../../components/Feature/Cons';
import productsService from '../../services/products';
import categoriesService from '../../services/categories';
import ListCategories from '../../components/List/ListCategories';

function Homepage(props) {
  const [detail, setDetail] = useState({ product: null, category: null });

  useEffect(() => {
    // effect
    const fetchData = async () => {
      const resP = await productsService.getAll();
      const resC = await categoriesService.getAll();

      if (resP.data.is_success && resC.data.is_success) {
        setDetail({
          product: resP.data.data.data.filter((item) => item.is_show === 1),
          category: resC.data.data.data,
        });

        console.log('Categories', resC.data);
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
      {detail && detail.category ? (
        <ListCategories title='Danh Mục' list={detail.category} />
      ) : (
        <Loading />
      )}
      <Cons />

      {detail && detail.product ? (
        <List list={detail.product} title={'Sản Phẩm'} />
      ) : (
        <Loading />
      )}

      <NewsLetter />
    </>
  );
}

export default Homepage;
