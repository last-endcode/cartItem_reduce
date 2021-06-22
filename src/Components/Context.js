import React, { useState, useEffect, useReducer, useContext } from 'react';
// reducer & data.json
import reducer from './reducer';
import cartItems from './Data';

const initital_state = {
  cart: cartItems,
  loading: false,
  price: 0,
  amount: 0,
  total: 0,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  // reducer
  const [state, dispatch] = useReducer(reducer, initital_state);

  const remove = (id) => {
    dispatch({ type: 'REMOVE', payload: id });
  };
  const clear = () => {
    dispatch({ type: 'CLEAR' });
  };

  const increase = (id) => {
    dispatch({ type: 'INCREASE', payload: id });
  };

  const decrease = (id) => {
    dispatch({ type: 'INCREASE', payload: id });
  };

  const increase_decrease = (id, type) => {
    dispatch({ type: 'INCREASE_DECREASE', payload: { id, type } });
  };

  useEffect(() => {
    dispatch({ type: 'GET_TOTAL' });
  }, [state.cart]);
  return (
    <AppContext.Provider
      value={{
        ...state,
        remove,
        clear,
        increase_decrease,
        increase,
        decrease,
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
