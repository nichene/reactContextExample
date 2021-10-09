import React, { useState } from "react";
import { useUserContext } from "../../contexts/userContext";
import Links from "../../navigation/Links";
import Greeter from "../greeter";

function Home() {
  const [inputValue, setInputValue] = useState<string>("");
  const { setUserName } = useUserContext();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    setUserName(inputValue);
  };

  return (
    <div>
      <Links />
      <Greeter />
      <header style={{ marginLeft: "24px", fontWeight: "bold" }}>Home</header>

      <div style={{ marginLeft: "24px" }}>
        <p>
          Name:
          <input type="text" onChange={handleInputChange}></input>
          <button onClick={handleButtonClick}>Login</button>
        </p>
      </div>
    </div>
  );
}

export default Home;
