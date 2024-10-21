import React from "react";
import { useDispatch } from "react-redux";
import { handleIncreaseCountAction } from "../store/slices/counter";

function CounterButton() {

    const dispatch = useDispatch();

    function handleClick(){
        dispatch(handleIncreaseCountAction())
    }

  return (
    <button
        onClick={handleClick}
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
