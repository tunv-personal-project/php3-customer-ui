import React from 'react';

const Products = React.lazy(() => import('./views/Products'));
const Categories = React.lazy(() => import('./views/Categories'));
const Homepage = React.lazy(() => import('./views/Homepage'));

const routes = [
  { path: '/', exact: true, name: 'Trang Chủ', component: Homepage },
  { path: '/products', exact: true, name: 'Sản Phẩm', component: Products },
  //   { path: '/products/:id', exact: true, name: 'Chi Tiết Sản Phẩm' },
  { path: '/categories', exact: true, name: 'Danh Mục', component: Categories },
  //   { path: '/categories/:id', exact: true, name: 'Chi Tiết Danh Mục' },
];

export default routes;
