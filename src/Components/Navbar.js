import React from 'react';
import { AiFillShopping } from 'react-icons/ai';
import '../Style/Navbar.css';
import { useGlobalContext } from './Context';

function Navbar() {
  const { amount } = useGlobalContext();
  return (
    <nav>
      <div className='nav-center'>
        <h3>samsung</h3>
        <div className='nav-container'>
          <AiFillShopping />
          <div className='amount-container'>
            <p>{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
