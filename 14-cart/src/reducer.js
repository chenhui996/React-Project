const reducer = (state, action) => {
  // return state
  //   const newCart = state.cart;
  switch (action.type) {
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };
    case "REMOVE":
      const newCart = state.cart.filter((item) => item.id !== action.payload);
      return {
        ...state,
        cart: newCart,
      };
    case "INCREASE":
      const incCart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
      return {
        ...state,
        cart: incCart,
      };
    case "DECREASE":
      const decCart = state.cart
        .map((item) => {
          if (item.id === action.payload) {
            return { ...item, amount: item.amount - 1 };
          }
          return item;
        })
        .filter((item) => item.amount !== 0);
      return {
        ...state,
        cart: decCart,
      };
    case "GET_TOTALS":
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          //   console.log(cartItem);
          cartTotal.amount += amount;
          cartTotal.total += price * amount;
          return cartTotal;
        },
        {
          total: 0,
          amount: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      return { ...state, total, amount };

    case "LOADING":
      return {
        ...state,
        loading: true,
      };
    case "DISPLAY_ITEMS":
      return {
        ...state,
        cart: action.payload,
        loading: false,
      };
    // 将add 与 subtract 写一起
    case "TOGGLE_AMOUNT":
      let tempCart = state.cart
        .map((item) => {
          if (item.id === action.payload.id) {
            if (action.payload.type === "inc") {
              return { ...item, amount: item.amount + 1 };
            }
            if (action.payload.type === "dec") {
              return { ...item, amount: item.amount - 1 };
            }
          }
          return item;
        })
        .filter((item) => item.amount !== 0);
      return {
        ...state,
        cart: tempCart,
      };
    default:
      break;
  }
  throw new Error("no matching action type");
};

export default reducer;
