import { useReducer } from "react";
import AppContext from "./app-context";

const defaultAppState = {
  userState: {
    itemsNumber: 0,
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
    if (state.userState.cartItems.length === 0) {
      return {
        userState: {
          itemsNumber: state.userState.itemsNumber + action.value.quantity,
          cartItems: [[action.value.slug, action.value.quantity]],
          isLoggedIn: state.userState.isLoggedIn,
        },
      };
    } else
      return {
        userState: {
          itemsNumber: state.userState.itemsNumber + action.value.quantity,
          cartItems: [
            ...state.userState.cartItems,
            [action.value.slug, action.value.quantity],
          ],
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

  const addToCartHandler = (slug, quantity) => {
    dispatchAction({ type: "ADD TO CART", value: { slug, quantity } });
  };

  const appContext = {
    handleLogin: loginHandler,
    handleLogout: logoutHandler,
    handleAddToCart: addToCartHandler,
    userData: appState.userState,
  };

  return (
    <AppContext.Provider value={appContext}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
