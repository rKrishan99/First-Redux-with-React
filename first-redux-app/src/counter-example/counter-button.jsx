import React from "react";

function CounterButton() {
  return (
    <button
      style={{
        backgroundColor: "black",
        color: "white",
        fontWeight: "bold",
        cursor: "pointer",
      }}
    >
      Increase Count
    </button>
  );
}

export default CounterButton;
