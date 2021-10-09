import React from "react";
import { useCartContext } from "../../contexts/cartContext";
import Links from "../../navigation/Links";
import Greeter from "../greeter";

function Checkout() {
  const { productsTotalCount } = useCartContext();

  return (
    <div>
      <Links />
      <Greeter />
      <header style={{ marginLeft: "24px", fontWeight: "bold" }}>
        Checkout
      </header>

      <div style={{ marginLeft: "24px" }}>
        <p>
          You have a total of: {productsTotalCount || 0} products. Hooray \o/
          <br />
        </p>
      </div>
    </div>
  );
}

export default Checkout;
