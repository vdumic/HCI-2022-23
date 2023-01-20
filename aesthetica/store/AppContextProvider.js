import { useReducer } from "react";
import AppContext from "./app-context";

const defaultAppState = {
  userState: {
    itemsNumber: 0,
    cartItems: {
      item: {
        id: 0,
        number: 0,
      },
    },
    isLoggedIn: false,
  },
};

const appReducer = (state, action) => {
  if (action.type === "LOGIN") {
    return {
      userState: {
        itemsNumber: state.userState.itemsNumber,
        cartItems: {
          item: state.userState.cartItems.item,
        },
        isLoggedIn: true,
      },
    };
  }
};

const AppContextProvider = (props) => {
  const [appState, dispatchAction] = useReducer(appReducer, defaultAppState);

  const loginHandler = () => {
    dispatchAction({ type: "LOGIN" });
  };

  const appContext = {
    handleLogin: loginHandler,
    userData: appState.userState,
  };

  return (
    <AppContext.Provider value={appContext}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
