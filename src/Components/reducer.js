const reducer = (state, action) => {
  if (action.type === 'CLEAR_ITEM') {
    return { ...state, cart: [] };
  }

  if (action.type === 'REMOVE_ITEM') {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
    };
  }

  // if (action.type === 'INCREASE') {
  //   return {
  //     ...state,
  //     cart: state.cart.map((item) => {
  //       if (item.id === action.payload) {
  //         // update amount
  //         return { ...item, amount: item.amount + 1 };
  //       }
  //       return item;
  //     }),
  //   };
  // }

  // if (action.type === 'DECREASE') {
  //   return {
  //     ...state,
  //     cart: state.cart
  //       .map((item) => {
  //         if (item.id === action.payload) {
  //           // update amount
  //           return { ...item, amount: item.amount - 1 };
  //         }
  //         return item;
  //       })
  //       .filter((item) => item.amount !== 0),
  //   };
  // }

  // this option
  if (action.type === 'INC_DEC') {
    let tempCart = state.cart
      .map((item) => {
        if (item.id === action.payload.id) {
          // update amount increase & decrease
          if (action.payload.type === 'inc') {
            return { ...item, amount: item.amount + 1 };
          }
          if (action.payload.type === 'dec') {
            return { ...item, amount: item.amount - 1 };
          }
        }
        return item;
      })
      .filter((filterNull) => filterNull.amount !== 0);
    return { ...state, cart: tempCart };
  }

  // for amount, & total
  if (action.type === 'GET_TOTAL') {
    // get total, amount on state.cart use destruct
    let { amount, total } = state.cart.reduce(
      (cartTotal, cartItem) => {
        // check result json remember cartTotal is obj 0 0
        // and cartItem whole from data.json
        // console.log(cartTotal, cartItem);
        // so u can desttruct
        const { price, amount } = cartItem;
        // this result price & amount like : 599.99 1, etc
        // console.log(price, amount); string
        let newPrice = parseFloat(price) * amount;

        // add amount for notify agar sama dgn hasil increase and decrease
        cartTotal.amount += amount;
        cartTotal.total += newPrice;

        return cartTotal;
      },
      {
        amount: 0,
        total: 0,
      }
    );

    // total agar tidak terlalu bnyak angka diblekang
    total = parseFloat(total.toFixed(6));
    return { ...state, total, amount };
  }

  throw new Error('action type not equal');
};

export default reducer;
