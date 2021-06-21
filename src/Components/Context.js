import React, { useState, useReducer, useEffect, useContext } from 'react';

// for data
import cartItems from './Data';
import reducer from './reducer';

// obj state
const initial_value = {
  cart: cartItems,
  loading: false,
  amount: 0,
  total: 0,
};
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initial_value);

  const clearItem = () => {
    dispatch({ type: 'CLEAR_ITEM' });
  };

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  // const increase = (id) => {
  //   dispatch({ type: 'INCREASE', payload: id });
  // };

  // const decrease = (id) => {
  //   dispatch({ type: 'DECREASE', payload: id });
  // };

  const inc_dec = (id, type) => {
    dispatch({ type: 'INC_DEC', payload: { id, type } });
  };

  // getTotal
  useEffect(() => {
    // getTotal
    dispatch({ type: 'GET_TOTAL' });
  }, [state.cart]);
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearItem,
        removeItem,
        inc_dec,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
