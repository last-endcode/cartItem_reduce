import React from 'react';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';
import '../Style/CartItem.css';
import { useGlobalContext } from './Context';

function CartItem({ id, title, img, price2, amount }) {
  const { remove, increase_decrease, increase, decrease } = useGlobalContext();
  return (
    <>
      <article className='cart-item'>
        <img src={img} className='cart-pic' alt={title} />
        <div>
          <h4>{title}</h4>
          <h4 className='price'>{price2}</h4>
          {/* remove */}
          <button className='remove-btn' onClick={() => remove(id)}>
            remove item
          </button>
        </div>

        {/* increase & decrease */}
        <div>
          <button
            className='amount-btn'
            onClick={() => increase_decrease(id, 'increase')}
          >
            <TiArrowSortedUp />
          </button>

          <p className='amount-item'>{amount}</p>

          <button
            className='amount-btn'
            onClick={() => increase_decrease(id, 'decrease')}
          >
            <TiArrowSortedDown />
          </button>
        </div>
      </article>
    </>
  );
}

export default CartItem;
