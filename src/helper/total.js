const total = (list) => {
  let total = 0;

  list.map((item) => (total += item.ammount * item.price));

  return total;
};

export default total;
