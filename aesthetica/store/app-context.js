import React from "react";

const AppContext = React.createContext({
  handleLogin: () => {},
  handleLogout: () => {},
  handleAddToCart: (slug, title, price, quantity, image) => {},
  handleRemoveFromCart: (slug, price, quantity) => {},
  appState: {
    totalPrice: 0,
    cartItems: {},
    isLoggedIn: false,
  },
});

export default AppContext;
