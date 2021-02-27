const states = {
  detail: null,
  user: {
    id: '',
    username: '',
    user_avatar: '',
  },
  products: null,
  categories: null,
  cart: {
    items: null,
    total: {
      amount: null,
      price: null,
    },
  },
  shipping: [
    { id: 'standard', name: 'Tiêu Chuẩn', price: 39000, currency: 'vnd' },
    { id: 'now', name: 'Giao Nhanh', price: 59000, currency: 'vnd' },
  ],
};

export default states;
