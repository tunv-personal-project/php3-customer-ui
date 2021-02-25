import React from 'react';

const Products = React.lazy(() => import('./views/Products'));

const routes = [
  { path: '/', exact: true, name: 'Trang Chủ' },
  { path: '/products', exact: true, name: 'Sản Phẩm', component: Products },
  //   { path: '/products/:id', exact: true, name: 'Chi Tiết Sản Phẩm' },
  //   { path: '/categories', exact: true, name: 'Danh Mục' },
  //   { path: '/categories/:id', exact: true, name: 'Chi Tiết Danh Mục' },
];

export default routes;
