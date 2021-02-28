import React from 'react';

function CartTableItem(props) {
  const { item } = props;
  return (
    <tr>
      <td>
        <img
          className='w-10 h-10'
          src={`http://localhost:8000${item.image}`}
          alt={item.name}
        />
      </td>
      <td>
        <p>{item.name}</p>
      </td>
      <td>
        <p>{item.ammount}</p>
      </td>
    </tr>
  );
}

export default CartTableItem;
