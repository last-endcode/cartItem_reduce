import React from 'react';
import { useGlobalContext } from './Context';
import CartItem from './CartItem';
import '../Style/CartContent.css';
import { GiShoppingBag } from 'react-icons/gi';

function CartContent() {
  const { cart, clear, total } = useGlobalContext();

  if (cart.length === 0) {
    return (
      <>
        <section className='cart'>
          <header>
            <h3>your item</h3>
          </header>
          <div className='cart-empty'>
            <h3>
              <GiShoppingBag />
              hello, your item is empty.
            </h3>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <section className='cart'>
        <header>
          <h3>your item</h3>
        </header>

        <div>
          {cart.map((item) => {
            return <CartItem key={item.id} {...item}></CartItem>;
          })}
        </div>
        <footer>
          <hr style={{ marginBottom: '0.1rem', color: '#ddd' }} />
          <div className='amount-total'>
            <h4>total</h4>
            <h4>{total}</h4>
          </div>
          <button className='clear-item' onClick={clear}>
            clear cart
          </button>
        </footer>
      </section>
    </>
  );
}

export default CartContent;
