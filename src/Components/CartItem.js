import React from 'react';
import '../Style/CartItem.css';
import { RiArrowUpSFill, RiArrowDownSFill } from 'react-icons/ri';
import { useGlobalContext } from './Context';

function CartItem({ id, title, price, img, amount }) {
  const { removeItem, inc_dec } = useGlobalContext();
  return (
    <>
      <article className='cart-item'>
        <img src={img} alt='' />
        {/* info like title, price, remove */}
        <div>
          <h4>{title}</h4>
          <h4 className='price'>${price}</h4>
          {/* remove item */}
          <button className='remove-btn' onClick={() => removeItem(id)}>
            remove item
          </button>
        </div>
        {/* increase decrease */}
        <div>
          {/* increase */}
          <button className='amount-btn' onClick={() => inc_dec(id, 'inc')}>
            <RiArrowUpSFill />
          </button>

          {/* amount */}
          <p className='amount'>{amount}</p>

          {/* decrease */}
          <button className='amount-btn' onClick={() => inc_dec(id, 'dec')}>
            <RiArrowDownSFill />
          </button>
        </div>
      </article>
    </>
  );
}

export default CartItem;
