import React from "react";

const AppContext = React.createContext({
  handleLogin: () => {},
  handleLogout: () => {},
  handleAddToCart: (value) => {},
  appState: {
    itemsNumber: 0,
    cartItems: {},
    isLoggedIn: false,
  },
});

export default AppContext;
