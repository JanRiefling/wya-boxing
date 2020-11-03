import React from "react";
import {useDispatch} from "react-redux";


function WyaStartButton() {

    const dispatch = useDispatch();

    function startApp() {
      dispatch({ type: "START_COUNTDOWN" });
    }
  return (
    <button 
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
    onClick={startApp}
    >
      Whoop Your Ass
    </button>
  );
}

export default WyaStartButton;
