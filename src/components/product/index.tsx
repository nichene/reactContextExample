import React from "react";
import { useCartContext } from "../../contexts/cartContext";
import Links from "../../navigation/Links";
import Greeter from "../greeter";

function Product() {
  const { productsTotalCount, setProductsTotalCount } = useCartContext();

  const handleButtonClick = () => {
    setProductsTotalCount((productsTotalCount || 0) + 1);
  };

  return (
    <div>
      <Links />
      <Greeter />
      <header style={{ marginLeft: "24px", fontWeight: "bold" }}>
        Product
      </header>

      <div style={{ marginLeft: "24px" }}>
        <p>
          You have a total of: {productsTotalCount || 0} products <br />
          <button onClick={handleButtonClick}>Click to add more!</button>
        </p>
      </div>
    </div>
  );
}

export default Product;
