import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restoreCake } from "../features/cake/cakeSlice";

const CakeView = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();

  const handleOrderCake = () => {
    dispatch(ordered());
  };

  const handleReturnCake = () => {
    dispatch(restoreCake());
  };

  return (
    <>
      <div className="flex text-5xl items-center justify-center">
        Number Of Cakes - {numOfCakes}
      </div>
      <div className="flex items-center justify-center gap-2 pt-4 ">
        {/* Use onClick to trigger the functions when the buttons are clicked */}
        <button
          onClick={handleOrderCake}
          className="rounded-2xl text-2xl px-6 py-2 bg-gradient-to-r from-emerald-600 to-teal-300"
        >
          Order Cake
        </button>
        <button
          onClick={handleReturnCake}
          className="rounded-2xl text-2xl px-6 py-2 bg-gradient-to-r from-emerald-600 to-teal-300"
        >
          Return Cake
        </button>
      </div>
    </>
  );
};

export default CakeView;
