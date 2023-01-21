import { useReducer } from "react";
import AppContext from "./app-context";

const defaultAppState = {
  userState: {
    totalPrice: 0,
    cartItems: [],
    isLoggedIn: false,
  },
};

const appReducer = (state, action) => {
  if (action.type === "LOGIN") {
    return {
      userState: {
        itemsNumber: state.userState.itemsNumber,
        cartItems: state.userState.cartItems,
        isLoggedIn: true,
      },
    };
  }

  if (action.type === "LOGOUT") {
    return {
      userState: {
        itemsNumber: state.userState.itemsNumber,
        cartItems: state.userState.cartItems,
        isLoggedIn: false,
      },
    };
  }

  if (action.type === "ADD TO CART") {
    const price = action.value.price * action.value.quantity;
    const totalPrice = state.userState.totalPrice + price;

    if (state.userState.cartItems.length === 0) {
      return {
        userState: {
          totalPrice: totalPrice,
          cartItems: [
            [
              action.value.slug,
              action.value.title,
              action.value.price,
              action.value.quantity,
              action.value.image,
            ],
          ],
          isLoggedIn: state.userState.isLoggedIn,
        },
      };
    } else
      return {
        userState: {
          totalPrice: totalPrice,
          cartItems: [
            ...state.userState.cartItems,
            [
              action.value.slug,
              action.value.title,
              action.value.price,
              action.value.quantity,
              action.value.image,
            ],
          ],
          isLoggedIn: state.userState.isLoggedIn,
        },
      };
  }

  if (action.type === "REMOVE FROM CART") {
    const price = action.value.price * action.value.quantity;
    const totalPrice = state.userState.totalPrice - price;

    return {
      userState: {
        totalPrice: totalPrice,
        cartItems: state.userState.cartItems.filter(
          (product) => product[0] !== action.value.slug
        ),
        isLoggedIn: state.userState.isLoggedIn,
      },
    };
  }
};

const AppContextProvider = (props) => {
  const [appState, dispatchAction] = useReducer(appReducer, defaultAppState);

  const loginHandler = () => {
    dispatchAction({ type: "LOGIN" });
  };

  const logoutHandler = () => {
    dispatchAction({ type: "LOGOUT" });
  };

  const addToCartHandler = (slug, title, price, quantity, image) => {
    dispatchAction({
      type: "ADD TO CART",
      value: { slug, title, price, quantity, image },
    });
  };

  const removeFromCartHandler = (slug, price, quantity) => {
    dispatchAction({
      type: "REMOVE FROM CART",
      value: { slug, price, quantity },
    });
  };

  const appContext = {
    handleLogin: loginHandler,
    handleLogout: logoutHandler,
    handleAddToCart: addToCartHandler,
    handleRemoveFromCart: removeFromCartHandler,
    userData: appState.userState,
  };

  return (
    <AppContext.Provider value={appContext}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
