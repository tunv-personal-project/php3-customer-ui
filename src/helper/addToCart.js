const addToCart = (data) => {
  let localData = localStorage.getItem('cart');

  if (localData) {
    const parsedData = parseData(localData);
    const id = data.id;
    let pos = -1;

    parsedData.forEach((item, index) => {
      if (item.id === id) {
        pos = index;
        return;
      }
    });

    if (pos > -1) {
      parsedData[pos].ammount += data.ammount;
    } else {
      parsedData.push(data);
    }

    localStorage.setItem('cart', JSON.stringify(parsedData));
    // console.log('Add To Cart', parsedData);
    return true;
  } else {
    localData = [];
    localData.push(data);

    localStorage.setItem('cart', JSON.stringify(localData));
    // console.log('Add New Data', localData);
    return true;
  }
};

const parseData = (str) => {
  return JSON.parse(str);
};

export default addToCart;
