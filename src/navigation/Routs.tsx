import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Checkout from "../components/checkout";
import Home from "../components/home";
import Product from "../components/product";
import { CartContextProvider } from "../contexts/cartContext";
import { UserContextProvider } from "../contexts/userContext";

function AppRouter() {
  return (
    <Router>
      <UserContextProvider>
        <Route path="/" exact component={Home} />

        <CartContextProvider>
          <Route path="/product" exact component={Product} />
          <Route path="/checkout" exact component={Checkout} />
        </CartContextProvider>
      </UserContextProvider>
    </Router>
  );
}

export default AppRouter;
