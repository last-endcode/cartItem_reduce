import { numberFormat } from './numberFormat';

const reducer = (state, action) => {
  if (action.type === 'CLEAR') {
    return { ...state, cart: [] };
  }

  if (action.type === 'REMOVE') {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload),
    };
  }

  if (action.type === 'INCREASE_DECREASE') {
    let item = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          // update amount
          if (action.payload.type === 'increase') {
            return { ...cartItem, amount: cartItem.amount + 1 };
          }
          if (action.payload.type === 'decrease') {
            return { ...cartItem, amount: cartItem.amount - 1 };
          }
        }
        // dont forget!
        return cartItem;
      })
      .filter((updateCartMinus) => updateCartMinus.amount !== 0);
    return { ...state, cart: item };
  }

  if (action.type === 'GET_TOTAL') {
    let { amount, total } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;

        const newPrice = price * amount;

        // update for notify
        cartTotal.amount += amount;
        cartTotal.total += newPrice;

        return cartTotal;
      },
      {
        amount: 0,
        total: 0,
      }
    );
    total = numberFormat(total.toFixed());

    return { ...state, total, amount };
  }

  throw new Error('action type not equal...');
};

export default reducer;
