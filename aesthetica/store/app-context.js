import React from "react";

const AppContext = React.createContext({
  handleLogin: (value) => {},
  appState: {
    itemsNumber: 0,
    cartItems: {
      item: {
        id: 0,
        number: 0,
      },
    },
    isLoggedIn: false,
  },
});

export default AppContext;
