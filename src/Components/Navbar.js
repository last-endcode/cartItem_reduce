import React from 'react';
import '../Style/Navbar.css';
import { FaShoppingCart } from 'react-icons/fa';
import { useGlobalContext } from './Context';

function Navbar() {
  const { amount } = useGlobalContext();
  return (
    <nav>
      <div className='nav-center'>
        <h3>samsung</h3>
        <div className='amount-container'>
          <FaShoppingCart />
          <p className='amount'>{amount}</p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
