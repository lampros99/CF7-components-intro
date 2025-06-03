import { useState } from "react"
import CounterButton from "./CounterButton";


const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  }

  const resetCount = () => {
    setCount(0);
  };

        return(
        <>
        <div className="disabled:bg-cf-dark-gray space-y-4 text-2xl pt-12"></div>
        <h1 className="text-center">Count is {count}</h1>
        <div className="text-center space-x-4">
          <CounterButton onClick={increaseCount} label="Increase"/>
          <CounterButton onClick={decreaseCount} disabled={count === 0} label="Decrease"/>
          <CounterButton onClick={resetCount} disabled={count === 0} label="Reset" addClass="bg-red-400" />

        {/* <button
        className="bg-black text-white py-2 px-4"
        onClick={increaseCount}>
            increase
            </button>
            <button 
            className="bg-black disabled:bg-gray-500 text-white py-2 px-4"
            onClick={decrease}
            disabled = {count === 0}
            >
            Decrease
            </button>
            <button
            className="bg-red-500  disabled:bg-gray-500 text-white py-2 px-4"
            onClick={resetCount}
            disabled = {count === 0}
            >
            reset
            </button> */}
            </div>
        </>
    )
}

export default Counter;