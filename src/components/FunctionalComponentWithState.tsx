import { useState } from "react";

const FunctionalComponentWithState = ( ) => {
    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count + 1)
    }

    const resetCount = () => {
        setCount(0)
    }

    return (
        <>
         <div className="space-y-4 pt-12"></div>
        <h1 className="text-center">Count is {count}</h1>
        <div className="text-center space-x-4">
        <button
        className="bg-black text-white py-2 px-4"
        onClick={increaseCount}
        >
            increase
            </button>
            <button
            className="bg-red-500 text-white py-2 px-4"
            onClick={resetCount}
            >
            reset
            </button>
            </div>
        </>
    )
}

export default FunctionalComponentWithState;