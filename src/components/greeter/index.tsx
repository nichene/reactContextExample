import React from "react";
import { useUserContext } from "../../contexts/userContext";

function Greeter() {
  const { userName } = useUserContext();

  return (
    <div>
      <p style={{ marginLeft: "24px" }}>
        Hello, {userName ? userName : "unknown person"}. It is lovely to see you
        here ♡
      </p>
    </div>
  );
}

export default Greeter;
