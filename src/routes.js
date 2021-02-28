import React from 'react';

const Products = React.lazy(() => import('./views/Products'));
const Categories = React.lazy(() => import('./views/Categories'));
const CategoryDetail = React.lazy(() =>
  import('./views/Categories/CategoryDetail')
);
const Homepage = React.lazy(() => import('./views/Homepage'));

const routes = [
  {
    path: '/',
    exact: true,
    name: 'Trang Chủ',
    component: Homepage,
    is_navbar: true,
  },
  {
    path: '/products',
    exact: true,
    name: 'Sản Phẩm',
    component: Products,
    is_navbar: true,
  },
  //   { path: '/products/:id', exact: true, name: 'Chi Tiết Sản Phẩm' },
  {
    path: '/categories',
    exact: true,
    name: 'Danh Mục',
    component: Categories,
    is_navbar: true,
  },
  {
    path: '/categories/:id',
    exact: true,
    is_navbar: false,
    name: 'Chi Tiết Danh Mục',
    component: CategoryDetail,
  },
];

export default routes;
